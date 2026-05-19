## 1. Setup do Projeto

- [x] 1.1 Criar novo projeto Expo com TypeScript
- [x] 1.2 Instalar react-native-reusables e nativewind
- [x] 1.3 Configurar nativewind no projeto
- [x] 1.4 Criar estrutura de diretórios (components, contexts, hooks, lib, navigation, pages, types)
- [x] 1.5 Verificar se o projeto compila corretamente

## 2. Tipos e Utilitários

- [x] 2.1 Criar tipos em /app/types/shopping.ts (Item, ShoppingList)
- [x] 2.2 Criar utilitário de formatação de moeda em /app/lib/formatCurrency.ts

## 3. Estado Global (Context)

- [x] 3.1 Criar ShoppingContext em /app/contexts/ShoppingContext.tsx
- [x] 3.2 Criar hook useShopping em /app/hooks/useShopping.ts
- [x] 3.3 Implementar funções: addItem, updateItem, removeItem, getTotal

## 4. Componentes UI

- [x] 4.1 Criar componente de Header com input e botão adicionar (usando React Reusables)
- [x] 4.2 Criar componente de ItemCard com campos de nome, preço e quantidade
- [x] 4.3 Criar componente de Lista de compras
- [x] 4.4 Estilizar componentes com NativeWind

## 5. Navegação

- [x] 5.1 Instalar @react-navigation/native e @react-navigation/bottom-tabs
- [x] 5.2 Criar TabNavigator em /app/navigation/TabNavigator.tsx
- [x] 5.3 Configurar as 3 tabs: Lista, Importar, Histórico

## 6. Pages

- [x] 6.1 Criar HomeScreen em /app/pages/HomeScreen.tsx (lista de compras)
- [x] 6.2 Criar ImportScreen em /app/pages/ImportScreen.tsx (placeholder)
- [x] 6.3 Criar HistoryScreen em /app/pages/HistoryScreen.tsx (placeholder)

## 7. Integração e Testes

- [x] 7.1 Integrar navegação no App.tsx
- [ ] 7.2 Testar fluxo completo: adicionar item, editar preço/quantidade, remover
- [ ] 7.3 Verificar exibição correta do total em reais
- [ ] 7.4 Testar navegação entre tabs