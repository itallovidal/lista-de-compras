## Context

O catálogo de sugestões atual está hardcoded como um array `const` dentro de `Header.tsx` com apenas 4 categorias e 3 produtos cada. O dialog usa `flex-row flex-wrap` sem scroll, o que funciona para poucos itens mas quebrará com 15 categorias. O componente `Header` já é grande (384 linhas) e misturar dados com UI dificulta manutenção.

## Goals / Non-Goals

**Goals:**
- Extrair o catálogo para um arquivo de dados dedicado (`app/data/suggestionCatalog.ts`)
- Adicionar 15 categorias com 10 produtos cada (~150 produtos)
- Adaptar a UI do dialog para scroll vertical (ScrollView/FlatList)
- Preservar o fluxo existente de seleção multi-produto e adição em lote

**Non-Goals:**
- Não adicionar busca/filtro de produtos (fase futura)
- Não persistir seleções favoritas do usuário
- Não adicionar preços padrão aos produtos do catálogo
- Não mudar o tipo de dados do catálogo (continua sendo `string[]` por categoria, sem IDs ou SKUs)

## Decisions

1. **Catálogo como arquivo TypeScript estático** em vez de JSON: mantém type-checking com `as const`, permite inferência de tipos para `SuggestionCategoryName`, e não requer parsing runtime. Alternativa JSON foi rejeitada por perder tipagem.

2. **ScrollView simples** para a lista de categorias em vez de FlatList: com apenas 15 itens, ScrollView é suficiente e mais simples. FlatList traria complexidade desnecessária (keyExtractor, renderItem). O grid de produtos por categoria também usará ScrollView com `flex-wrap`.

3. **Manter a estrutura de dados atual** `{ name: string, products: string[] }[]`: sem introduzir IDs, ícones, ou metadados. Isso mantém a mudança focada na expansão de dados e na adaptação de scroll, sem refatorar o modelo.

4. **Localização do arquivo**: `app/data/suggestionCatalog.ts` segue a convenção do projeto de ter dados/constantes em diretórios dedicados (similar a `app/lib/`, `app/types/`).

## Risks / Trade-offs

- **[Risco] Performance do dialog com muitos produtos**: 150 produtos renderizados de uma vez podem causar lentidão. → Mitigação: os produtos são renderizados apenas quando uma categoria é selecionada (10 por vez), não todos simultaneamente.

- **[Risco] ScrollView sem scroll horizontal para chips de produtos**: 10 produtos em flex-wrap podem ocupar várias linhas. → Mitigação: ScrollView vertical envolve o conteúdo, permitindo scroll natural.

- **[Trade-off] Catálogo estático vs dinâmico**: Não usar AsyncStorage ou API externa significa que atualizações exigem deploy. Aceitável para esta fase pois o catálogo é relativamente estável.

- **[Trade-off] Sem ícones por categoria**: A UI atual não usa ícones nas categorias. Adicionar ícones melhoraria a UX mas aumentaria o escopo. Deixado como melhoria futura.
