## 1. Criar arquivo de dados do catálogo

- [x] 1.1 Criar diretório `app/data/`
- [x] 1.2 Criar `app/data/suggestionCatalog.ts` com as 15 categorias e 10 produtos cada na ordem definida (Hortifruti → Açougue → Peixaria → Frios e Laticínios → Padaria e Confeitaria → Mercearia → Bebidas → Produtos de Limpeza → Higiene Pessoal → Pet Shop → Utilidades Domésticas → Temperos Óleos e Condimentos → Massas Farinhas e Grãos → Cereais Café e Chás)
- [x] 1.3 Exportar o catálogo com `as const` para tipagem inferida

## 2. Atualizar Header.tsx

- [x] 2.1 Remover o `SUGGESTION_CATALOG` inline do `Header.tsx`
- [x] 2.2 Importar o catálogo de `app/data/suggestionCatalog.ts`
- [x] 2.3 Atualizar o tipo `SuggestionCategoryName` para ser derivado do novo catálogo importado
- [x] 2.4 Envolver a lista de categorias em `ScrollView` com altura máxima para permitir scroll vertical
- [x] 2.5 Envolver a lista de produtos da categoria selecionada em `ScrollView` para acomodar 10 produtos com wrap

## 3. Validar e testar

- [x] 3.1 Executar `npx expo start` e verificar que o app compila sem erros
- [x] 3.2 Verificar que o dialog abre com todas as 15 categorias visíveis e roláveis
- [x] 3.3 Verificar que cada categoria mostra seus 10 produtos corretamente
- [x] 3.4 Verificar que a seleção multi-produto e adição em lote funcionam como antes
- [x] 3.5 Verificar que o fluxo manual (digitar nome e adicionar) continua funcionando
