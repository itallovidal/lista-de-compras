## Context

O `ItemCard` atualmente usa um `TextInput` simples com `keyboardType="numeric"` e `parseFloat()` para parsing. Isso não funciona para usuários brasileiros que esperam usar vírgula como separador decimal. O placeholder diz `0,00` mas o campo só aceita ponto. Valores como `20,50` são parseados como `20` pelo `parseFloat`.

O cálculo de totais no `ShoppingContext` já suporta decimais corretamente (`price * quantity` com `number`). O problema está exclusivamente na camada de input.

## Goals / Non-Goals

**Goals:**
- Permitir digitar vírgula como separador decimal e converter para ponto internamente
- Formatar o valor exibido no input como moeda (R$ 20,50) em tempo real
- Garantir no máximo 2 casas decimais
- Manter o valor armazenado como `number` (sem mudar o tipo)

**Non-Goals:**
- Não alterar o tipo de `price` no `ShoppingItem` (continua `number`)
- Não adicionar biblioteca externa de input masking (implementar com lógica própria)
- Não alterar a lógica de cálculo de totais no `ShoppingContext`

## Decisions

### 1. Criar utilitário `parsePriceInput` em `app/lib/parsePriceInput.ts`

Em vez de usar `parseFloat()` diretamente, criar uma função que:
- Substitui vírgula por ponto
- Remove caracteres não numéricos exceto ponto e vírgula
- Garante no máximo 2 casas decimais
- Retorna `number` válido ou `0`

**Alternativa considerada:** Usar biblioteca como `react-native-mask-input`. Rejeitada para evitar dependência extra para um caso simples.

### 2. Criar utilitário `formatPriceInput` em `app/lib/formatPriceInput.ts`

Função que formata um `number` para exibição no input como `20,50` (sem o `R$` prefix, para manter o campo compacto). Usa `Intl.NumberFormat` com `pt-BR` mas sem o símbolo de moeda.

**Alternativa considerada:** Exibir `R$ 20,50` completo no input. Rejeitada porque o campo é pequeno (`max-w-24`) e o prefixo `R$` ocuparia espaço desnecessário.

### 3. Manter `keyboardType="decimal-pad"`

Mudar de `"numeric"` para `"decimal-pad"` para mostrar o teclado com ponto/vírgula no mobile.

### 4. Handler `onChangeText` com parsing imediato

O `handlePriceChange` agora usa `parsePriceInput(text)` ao invés de `parseFloat(text)`. O valor exibido é formatado via `formatPriceInput(price)`.

## Risks / Trade-offs

- **[Risco] Usuário digita caracteres inválidos** → Mitigação: `parsePriceInput` sanitiza e ignora caracteres não numéricos
- **[Risco] Perda de precisão com floating point** → Mitigação: Para preços de supermercado, precisão de `number` é suficiente. Se necessário no futuro, migrar para centavos como inteiro.
- **[Trade-off] Input mostra `20,50` mas armazena `20.5`** → Aceitável, pois é a convenção brasileira. O `formatCurrency` já lida com exibição formatada nos totais.
