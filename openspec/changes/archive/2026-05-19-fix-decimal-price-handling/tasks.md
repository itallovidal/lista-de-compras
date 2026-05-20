## 1. Utilitários de preço

- [x] 1.1 Criar `app/lib/parsePriceInput.ts` com função que converte string de input em número (substitui vírgula por ponto, remove caracteres inválidos, limita a 2 casas decimais)
- [x] 1.2 Criar `app/lib/formatPriceInput.ts` com função que formata número para exibição no input (vírgula como separador, 2 casas decimais)
- [x] 1.3 Criar testes unitários para `parsePriceInput` cobrindo: vírgula, ponto, vazio, caracteres inválidos, mais de 2 casas decimais
- [x] 1.4 Criar testes unitários para `formatPriceInput` cobrindo: preço com centavos, preço inteiro, zero, mais de 2 casas decimais

## 2. Atualizar ItemCard

- [x] 2.1 Importar `parsePriceInput` e `formatPriceInput` no `ItemCard.tsx`
- [x] 2.2 Atualizar `handlePriceChange` para usar `parsePriceInput(text)` ao invés de `parseFloat(text)`
- [x] 2.3 Atualizar `value` do Input para usar `formatPriceInput(item.price)` ao invés de `item.price.toString()`
- [x] 2.4 Alterar `keyboardType` de `"numeric"` para `"decimal-pad"`
- [x] 2.5 Atualizar placeholder de `"0,00"` para manter consistência visual

## 3. Verificação e testes manuais

- [x] 3.1 Verificar que digitar "20,50" resulta em preço 20.5 e total calculado corretamente
- [x] 3.2 Verificar que digitar "20.50" resulta em preço 20.5 e total calculado corretamente
- [x] 3.3 Verificar que itens com preço zero exibem campo vazio
- [x] 3.4 Verificar que o total no Header exibe formatação correta com centavos (ex: R$ 20,50)
