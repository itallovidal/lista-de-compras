## Why

Hoje o fluxo de importação exige uma confirmação extra e mantém o usuário preso na aba de importação após concluir. Isso adiciona atrito a uma ação que deveria ser rápida e previsível.

## What Changes

- Remove a etapa de confirmação antes de importar a lista colada.
- Importa os itens diretamente ao tocar em `Importar`.
- Adiciona os itens à lista existente sem substituir o conteúdo atual.
- Redireciona o usuário para a lista após a importação concluída.
- Remove a mensagem/alerta de sucesso do fluxo de importação.

## Capabilities

### New Capabilities
- `importacao-direta`: fluxo de importação sem confirmação, com retorno automático para a lista após concluir.

### Modified Capabilities
- 

## Impact

- `app/pages/ImportScreen.tsx`: fluxo de importação e navegação pós-importação.
- `app/navigation/TabNavigator.tsx`: apoio ao redirecionamento para a aba da lista.
- `app/lib/importItems.ts`: sem mudança funcional esperada, mas continua sendo usado para validação/parsing.
- Testes do fluxo de importação precisam cobrir importação direta e retorno à lista.
