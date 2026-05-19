## Why

Hoje o app só mantém a lista atual e não oferece um fluxo claro para encerrar uma compra e consultar compras anteriores. Isso impede o usuário de reutilizar o histórico e torna o botão de salvar ambíguo.

## What Changes

- Adiciona um histórico local de compras salvas no `localStorage`/AsyncStorage seguindo o padrão já existente no app.
- Ao finalizar a compra pelo botão do header, abre um diálogo para informar qual mercado foi comprado.
- O diálogo mostra um resumo da lista atual com quantidade de itens e preço total.
- O diálogo permite salvar a compra no histórico ou apenas limpar a lista atual sem salvar.
- A aba de histórico passa a exibir cards de compras passadas com mercado, total e quantidade de itens.
- Ao abrir um card do histórico, o app mostra todos os itens comprados naquela lista.
- O app mantém no máximo 4 listas salvas no histórico, removendo as mais antigas quando necessário.
- O ícone de salvamento do header é trocado por um símbolo mais alinhado com finalização de compra.

## Capabilities

### New Capabilities
- `shopping-history`: persistência de listas finalizadas, visualização do histórico e detalhamento de compras passadas.

### Modified Capabilities
- `home-ui`: o fluxo do header muda para finalização da lista, com diálogo de confirmação e novo ícone.

## Impact

- `app/lib/storage.ts`: novo armazenamento do histórico de compras.
- `app/pages/HistoryScreen.tsx`: implementação da listagem e detalhamento.
- `app/components/ui/Header.tsx`: novo fluxo do botão de finalização.
- `app/contexts/ShoppingContext.tsx`: integração entre limpar lista atual e salvar histórico.
- `app/navigation/TabNavigator.tsx` e componentes de UI relacionados ao histórico.
