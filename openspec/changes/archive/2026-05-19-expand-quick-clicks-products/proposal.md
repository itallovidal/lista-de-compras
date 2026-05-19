## Why

O catálogo de sugestões atual possui apenas 4 categorias com 3 produtos cada (12 itens totais), hardcoded no `Header.tsx`. Isso limita severamente a utilidade da funcionalidade de cliques rápidos, que foi projetada para acelerar a adição de produtos comuns do dia a dia. Expandir o catálogo para cobrir todos os principais setores de um supermercado tornará o recurso realmente prático.

## What Changes

- O catálogo de sugestões será expandido de 4 para 15 categorias, cobrindo: Hortifruti, Açougue, Peixaria, Frios e Laticínios, Padaria e Confeitaria, Mercearia, Bebidas, Produtos de Limpeza, Higiene Pessoal, Pet Shop, Utilidades Domésticas, Temperos, Massas/Farinhas/Grãos, Cereais/Café/Chás
- Cada categoria terá 10 produtos, totalizando ~150 produtos no catálogo
- O catálogo será extraído do `Header.tsx` para um arquivo dedicado de dados (`app/data/suggestionCatalog.ts`)
- O dialog de sugestões ganhará scroll vertical para acomodar o número maior de categorias
- O fluxo atual de seleção multi-produto e adição em lote será preservado

## Capabilities

### New Capabilities
- `quick-clicks-catalog`: Catálogo expandido de produtos por categoria para o dialog de sugestões, com ~150 produtos em 15 categorias, armazenado em arquivo de dados dedicado

### Modified Capabilities
- `home-ui`: O requirement "Catálogo inicial enxuto" será substituído por um catálogo completo. O dialog precisará suportar scroll para listar 15 categorias. O requirement "Categorias iniciais em botões" será atualizado para refletir a nova quantidade e organização.

## Impact

- `app/components/ui/Header.tsx`: Remoção do `SUGGESTION_CATALOG` inline, importação do catálogo externo
- `app/data/suggestionCatalog.ts`: Novo arquivo com a definição completa do catálogo
- `openspec/specs/home-ui/spec.md`: Atualização dos requirements de categorias
- UI do dialog: adaptação para scroll vertical com muitas categorias
