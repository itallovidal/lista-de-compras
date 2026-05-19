## Why

Hoje o total exibido no header precisa refletir imediatamente qualquer alteração de quantidade feita nos cards de itens. Isso evita inconsistência visual entre o resumo da compra e o conteúdo real da lista.

## What Changes

- Garante que o valor do header seja recalculado quando a quantidade de um item for aumentada ou reduzida.
- Mantém o header como fonte confiável do total da compra durante a edição da lista.
- Preserva o comportamento atual dos cards de item, alterando apenas a sincronização do resumo superior.

## Capabilities

### New Capabilities
- `header-total-sync`: o header passa a acompanhar em tempo real mudanças de quantidade e preço nos itens da lista.

### Modified Capabilities
- `home-ui`: o requisito de total em destaque passa a exigir atualização imediata do valor quando a quantidade de um item muda.

## Impact

- `app/components/ui/Header.tsx` para exibição do total atualizado.
- `app/components/ShoppingItem/ItemCard.tsx` para o fluxo de atualização de quantidade.
- `app/contexts/ShoppingContext.tsx` para a recomputação consistente do total.
- `openspec/specs/home-ui/spec.md` para explicitar o comportamento esperado do header.
