## Context

O `ItemCard` atual tem 2 linhas: nome + subtotal na primeira, e dois inputs largos (preço, qtd) + botão delete na segunda. O novo layout coloca tudo em uma linha só, mais compacto e ergonômico para uso touch.

## Goals / Non-Goals

**Goals:**
- Layout de 1 linha: `[nome] [stepper] [input preço] [lixeira]`
- Stepper unificado em bloco: `[ ▲  2  ▼ ]` com `CaretUp` e `CaretDown` do Phosphor
- Quantidade mínima 1 — `CaretDown` fica opaco e não-clicável quando qty = 1
- Input de preço pequeno e compacto
- Ícone `TrashIcon` weight `regular` substituindo o "✕"

**Non-Goals:**
- Alterar lógica do contexto/hook
- Animações no stepper
- Suporte a quantidade fracionada

## Decisions

- **`phosphor-react-native` + `react-native-svg`**: instalação via `npx expo install` para garantir versão compatível com SDK 54
- **Stepper como bloco unificado**: `View` com `bg-gray-700` e `rounded-lg`, contendo `CaretUp` | número | `CaretDown` alinhados em row — mais coeso visualmente que botões soltos
- **Input de preço sem label "R$"**: placeholder `"0,00"` suficiente; economiza espaço na linha única. Alternativa com label descartada por quebrar o layout compacto
- **`CaretDown` opaco quando qty = 1**: `opacity: 0.3` + `pointerEvents: 'none'` — feedback visual claro sem remover o botão da tela

## Risks / Trade-offs

- `react-native-svg` requer rebuild nativo no bare workflow — no Expo Managed é transparente
- Linha única pode ficar apertada em nomes muito longos → usar `numberOfLines={1}` com `ellipsizeMode="tail"` no nome
