## Context

Criar um aplicativo de lista de compras mobile utilizando React Native com Expo Managed Workflow. O app permitirá aos usuários adicionar itens, informar preço e quantidade, e visualizar o total em reais.

## Goals / Non-Goals

**Goals:**
- Criar UI com input de texto e botão para adicionar itens à lista
- Permitir editção de preço e quantidade de cada item
- Exibir total da compra em reais no cabeçalho
- Utilizar TypeScript, React Native Reusables e NativeWind

**Non-Goals:**
- Persistência de dados (futuro)
- Autenticação de usuário (futuro)
- Categorias de itens (futuro)

## Decisions

- **Expo Managed Workflow**: Simplifica o desenvolvimento e deployment
- **NativeWind + React Native Reusables**: Componentes styled com utilities do Tailwind
- **State Management**: React Context + useState para gerenciar lista de itens
- **Currency Format**: Format BRL com Intl.NumberFormat
- **Navegação**: React Navigation com Tab Navigator
- **Estrutura de Diretórios**:
  ```
  /app
  ├── components/
  │   ├── ui/              # React Reusables (Button, Input, etc.)
  │   └── ShoppingItem/    # Componente de item da lista
  ├── contexts/
  │   └── ShoppingContext  # Estado global da lista
  ├── hooks/
  │   └── useShopping      # Hook para usar o contexto
  ├── lib/
  │   └── formatCurrency   # Utilitário para formatar R$
  ├── navigation/
  │   └── TabNavigator     # Stack de tabs
  ├── pages/
  │   ├── HomeScreen       # Tab 1: Lista de compras
  │   ├── ImportScreen    # Tab 2: Importação (placeholder)
  │   └── HistoryScreen   # Tab 3: Histórico (placeholder)
  └── types/
      └── shopping.ts     # Interfaces: Item, List, etc.
  ```

## Navigation Structure

```
┌─────────────────────────────────────┐
│           Header + Total             │
├─────────────────────────────────────┤
│                                     │
│         Lista de Itens              │
│                                     │
├──────────┬──────────┬───────────────┤
│  🛒 Lista │ 📥 Importar │ 📜 Histórico │
└──────────┴──────────┴───────────────┘
```

- **Tab 1 - Lista**: HomeScreen com input, botão adicionar, lista de itens e total
- **Tab 2 - Importar**: Placeholder "Em breve" (futuro)
- **Tab 3 - Histórico**: Placeholder "Em breve" (futuro)

## Risks / Trade-offs

- Sem persistência → dados perdidos ao fechar app (aceitável para MVP)
- Layout simples → pode evoluir com mais funcionalidades depois