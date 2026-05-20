## Why

O aplicativo não suporta corretamente preços com centavos. Usuários brasileiros esperam digitar valores como `20,50` (vírgula como separador decimal), mas o input atual usa `parseFloat()` que só reconhece ponto. Além disso, o placeholder exibe `0,00` mas o campo aceita apenas ponto, causando confusão e cálculos incorretos.

## What Changes

- Adicionar máscara de input monetário que converte vírgula para ponto automaticamente
- Formatar o valor exibido no input como moeda brasileira (R$) durante a digitação
- Garantir que cálculos de totais usem valores decimais corretamente
- Validar input para permitir no máximo 2 casas decimais

## Capabilities

### New Capabilities
- `decimal-price-input`: Input de preço com máscara monetária brasileira, conversão automática de vírgula para ponto e formatação visual em tempo real

### Modified Capabilities
- `item-card-ui`: O input de preço passa a exibir valor formatado como moeda e aceitar vírgula como separador decimal

## Impact

- `app/components/ShoppingItem/ItemCard.tsx` - handler de preço e input
- `app/lib/formatCurrency.ts` - possível adaptação para parsing reverso
- `app/types/shopping.ts` - sem alterações (price já é `number`)
- `app/contexts/ShoppingContext.tsx` - sem alterações (cálculo já suporta decimais)
