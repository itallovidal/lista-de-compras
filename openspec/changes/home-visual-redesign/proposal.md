## Why

A home screen atual do app de lista de compras tem uma aparência básica e monótona — cores planas, hierarquia visual fraca e ausência de elementos modernos. O redesign visa tornar a experiência visualmente mais agradável e expressiva, com estilo moderno (Opção B).

## What Changes

- Adicionar gradiente no header substituindo o fundo cinza plano
- Ampliar o destaque visual do total da compra
- Criar cards de itens com sombra/elevação e melhor separação visual
- Substituir o botão "+" inline por um visual mais expressivo
- Melhorar o empty state com visual mais convidativo
- Usar cores de acento mais vibrantes (ex: roxo/índigo ou gradiente azul-roxo)

## Capabilities

### New Capabilities

- `home-ui`: Visual redesenhado da HomeScreen com gradiente no header, cards elevados, total em destaque e empty state aprimorado

### Modified Capabilities

- Nenhum

## Impact

- Arquivos alterados: `HomeScreen.tsx`, `Header.tsx`, `ItemCard.tsx`, `ShoppingList.tsx`
- Sem mudanças em lógica de negócio ou estado
- Sem novas dependências (apenas uso de APIs nativas do React Native como `LinearGradient` do expo-linear-gradient)
