## Why

O modal de histórico pode ficar maior que a tela quando há muitas compras, o que impede o usuário de navegar por toda a lista com conforto. Limitar a altura e permitir scroll interno mantém o histórico usável em telas pequenas e evita que itens fiquem inacessíveis.

## What Changes

- Limita a altura máxima do modal de histórico a 3/5 da altura da tela.
- Adiciona scroll interno ao conteúdo da lista quando o histórico exceder esse limite.
- Mantém o comportamento atual para listas curtas, sem alterar a experiência visual básica.

## Capabilities

### New Capabilities
- `shopping-history`: visualização do histórico de compras em modal com comportamento responsivo para listas longas.

### Modified Capabilities
- 

## Impact

- Layout e estilo do modal de histórico.
- Componente de lista dentro do modal, que passa a ser scrollável.
- Ajustes de teste/validação para garantir altura máxima e navegação correta em listas longas.
