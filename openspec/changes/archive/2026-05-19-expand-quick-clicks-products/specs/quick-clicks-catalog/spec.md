## ADDED Requirements

### Requirement: Catálogo expandido de produtos
O sistema SHALL fornecer um catálogo de sugestões com 15 categorias cobrindo todos os principais setores de supermercado, com 10 produtos por categoria (~150 produtos totais).

#### Scenario: Catálogo contém todas as categorias
- **WHEN** o catálogo é carregado
- **THEN** ele contém as categorias: Hortifruti, Açougue, Peixaria, Frios e Laticínios, Padaria e Confeitaria, Mercearia, Bebidas, Produtos de Limpeza, Higiene Pessoal, Pet Shop, Utilidades Domésticas, Temperos Óleos e Condimentos, Massas Farinhas e Grãos, Cereais Café e Chás

#### Scenario: Cada categoria tem 10 produtos
- **WHEN** uma categoria é acessada
- **THEN** ela contém exatamente 10 produtos relevantes ao setor

### Requirement: Catálogo em arquivo dedicado
O catálogo de sugestões SHALL ser definido em um arquivo TypeScript separado (`app/data/suggestionCatalog.ts`) exportado como um array tipado com `as const`.

#### Scenario: Importação do catálogo
- **WHEN** o componente Header importa o catálogo
- **THEN** ele recebe um array de objetos `{ name: string, products: string[] }` com tipagem inferida

#### Scenario: Tipagem de nomes de categoria
- **WHEN** o tipo `SuggestionCategoryName` é utilizado
- **THEN** ele é derivado automaticamente dos nomes do catálogo exportado

### Requirement: Ordem lógica das categorias
As categorias SHALL ser ordenadas seguindo o fluxo típico de compras em supermercado: perecíveis primeiro (Hortifruti, Açougue, Peixaria), depois refrigerados (Frios e Laticínios, Padaria), depois mercearia e bebidas, e por último não-alimentos (Limpeza, Higiene, Pet, Utilidades).

#### Scenario: Ordem de exibição
- **WHEN** o dialog de sugestões abre
- **THEN** as categorias aparecem na ordem: Hortifruti → Açougue → Peixaria → Frios e Laticínios → Padaria e Confeitaria → Mercearia → Bebidas → Produtos de Limpeza → Higiene Pessoal → Pet Shop → Utilidades Domésticas → Temperos Óleos e Condimentos → Massas Farinhas e Grãos → Cereais Café e Chás
