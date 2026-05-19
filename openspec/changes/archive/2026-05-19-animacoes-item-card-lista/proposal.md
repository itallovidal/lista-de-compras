## Why

Os cards e a lista mudam de forma brusca ao entrar e sair, o que deixa a experiência menos fluida e dificulta perceber o que acabou de mudar. Animar a entrada e a saída melhora a clareza visual e dá feedback imediato quando um item é removido.

## What Changes

- Adicionar animação de entrada para item cards, vindo de baixo para cima com duração curta.
- Fazer a opacidade do item card cair junto com o gesto de swipe ao excluir.
- Animar o reflow da lista quando um item é removido para manter o contexto visual.
- Preservar o comportamento funcional atual da lista e da remoção.

## Capabilities

### New Capabilities
- `item-card-animations`: animações de entrada e saída dos cards de item e transição visual da lista ao excluir itens.

### Modified Capabilities
- 

## Impact

Afeta a camada de UI da lista de compras, especialmente os componentes de item card e a renderização da lista durante remoções.
