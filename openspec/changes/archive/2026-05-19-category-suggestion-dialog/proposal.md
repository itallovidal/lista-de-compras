## Why

Adicionar itens pela barra atual exige digitar o nome manualmente, o que torna o uso mais lento em compras recorrentes. Um fluxo guiado com categorias e sugestões ajuda a validar uma forma mais rápida e intuitiva de incluir produtos comuns.

## What Changes

- Quando o usuário tocar em adicionar com o campo vazio, a HomeScreen SHALL abrir um dialog com sugestões guiadas.
- O dialog SHALL mostrar categorias iniciais em formato de botões organizados em linhas.
- As categorias iniciais SHALL incluir Limpeza, Higiene, Bebidas e Frios.
- Ao selecionar uma categoria, o dialog SHALL trocar para uma lista de produtos daquela categoria.
- O usuário SHALL poder selecionar múltiplos produtos antes de confirmar.
- Ao confirmar a seleção, o app SHALL adicionar todos os produtos escolhidos com 1 unidade e preço `0`.
- O fluxo manual atual SHALL continuar disponível quando o usuário digitar um nome no campo e adicionar normalmente.
- O conjunto inicial de categorias e produtos SHALL ser pequeno e fixo para validar a experiência antes de expandir o catálogo.

## Capabilities

### New Capabilities
- None

### Modified Capabilities
- `home-ui`: o fluxo de adição de itens passa a abrir um dialog de sugestões quando o campo estiver vazio.

## Impact

- `app/components/ui/Header.tsx`: nova interação do botão de adicionar e novo dialog de sugestões.
- `app/contexts/ShoppingContext.tsx`: reutiliza o fluxo existente de adicionar item com `quantity: 1` e `price: 0`.
- `app/types/shopping.ts`: sem mudanças de modelo esperadas.
- `openspec/specs/home-ui/spec.md`: atualização do comportamento de adição na HomeScreen.
