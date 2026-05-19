## Why

Hoje o cabeçalho concentra ações importantes da lista, mas não oferece um atalho explícito para salvar nem uma orientação rápida sobre recursos avançados. Isso aumenta atrito para quem quer entender como apagar itens por arraste e importar listas completas.

## What Changes

- Adiciona um botão de salvar no cabeçalho com ícone apropriado.
- Exibe um tooltip falado no cabeçalho explicando que é possível arrastar para apagar itens.
- Explica que listas completas podem ser importadas pela aba de importação.
- Mantém a navegação e o fluxo atual, apenas tornando as ações mais visíveis.

## Capabilities

### New Capabilities
- `header-actions`: ações e ajuda contextual no cabeçalho da lista, incluindo salvar e tooltip informativo.

### Modified Capabilities
- 

## Impact

- `app/components/ui/Header.tsx` para adicionar o botão de salvar e o tooltip.
- `app/components/lib/Tooltip.tsx` se precisar de ajuste de conteúdo ou apresentação.
- Pode exigir ajuste visual no cabeçalho para acomodar a nova ação sem quebrar o layout.
