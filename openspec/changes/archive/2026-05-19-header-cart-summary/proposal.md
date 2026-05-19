## Why

O header hoje não deixa claro o tamanho real do carrinho quando há múltiplas unidades do mesmo produto. O usuário precisa enxergar rapidamente quantos produtos distintos existem e quantas unidades totais estão no carrinho.

## What Changes

- Substitui o resumo atual do header por duas métricas de carrinho: produtos distintos e itens totais.
- Exibe essas métricas de forma clara no topo da HomeScreen, sem depender de contagem implícita.
- Mantém os fluxos atuais de adicionar, editar quantidade, remover e salvar a lista.

## Capabilities

### Modified Capabilities
- `home-ui`: o header passa a apresentar um resumo de carrinho com duas informações explícitas: quantidade de produtos distintos e quantidade total de itens.

## Impact

- `app/components/ui/Header.tsx` para exibir as duas métricas do carrinho.
- `app/pages/HomeScreen.tsx` para fornecer os valores calculados ao header.
- `app/contexts/ShoppingContext.tsx` se for necessário expor um cálculo reutilizável para total de unidades.
- `openspec/specs/home-ui/spec.md` para refletir o novo contrato do header.
