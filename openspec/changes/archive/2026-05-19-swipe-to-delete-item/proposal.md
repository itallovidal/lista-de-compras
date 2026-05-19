## Why

Hoje o item só pode ser removido tocando no ícone de lixeira, o que deixa a ação menos fluida em uma lista de compras de uso rápido. Um gesto de swipe da direita para a esquerda torna a exclusão mais natural e acelera a interação no item.

## What Changes

- Adiciona suporte a gesto de deslize da direita para a esquerda no container do item.
- Expõe a ação de remover ao final do swipe, usando a mesma remoção já existente.
- Introduz `react-native-gesture-handler` e `react-native-reanimated` para suportar a interação.
- Mantém o botão de delete atual como alternativa de acesso à mesma ação.

## Capabilities

### New Capabilities
- `swipe-to-delete-item`: permite remover um item da lista com um gesto de deslize horizontal.

### Modified Capabilities
- 

## Impact

- `ItemCard` e componentes de lista de itens.
- Configuração da aplicação para gesture handler e reanimated.
- Dependências do projeto e setup do app.
