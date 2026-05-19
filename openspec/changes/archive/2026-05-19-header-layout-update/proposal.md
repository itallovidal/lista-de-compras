## Why

O header da HomeScreen concentra o total, ações rápidas e o campo de novo item no mesmo espaço. A proposta é reorganizar essa área para deixar a hierarquia mais clara e melhorar o uso em telas menores sem mudar o fluxo principal.

## What Changes

- Reorganiza o header para exibir o valor total na primeira linha, com as ações de salvar e ajuda ao lado.
- Exibe a contagem de itens em uma linha separada abaixo do total.
- Mantém um espaçamento visível entre o bloco de resumo e a linha de entrada.
- Deixa o input de novo item e o botão de adicionar em uma linha própria, com largura confortável.
- Preserva o comportamento atual de salvar, tooltip e finalização da lista.

## Capabilities

### New Capabilities

- `header-layout`: reorganização visual do header da HomeScreen para priorizar resumo, ações e entrada de itens.

### Modified Capabilities

- `home-ui`: muda a composição visual do header da HomeScreen, alterando a disposição de total, contagem, ações rápidas e entrada de itens.

## Impact

- `app/components/ui/Header.tsx` para reorganizar o layout do header.
- `app/pages/HomeScreen.tsx` se houver necessidade de ajustar o empacotamento visual da tela.
- `openspec/specs/home-ui/spec.md` para refletir a nova hierarquia do header.
