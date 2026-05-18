## Context

O app usa React Native + Expo com NativeWind (Tailwind CSS). A home atual tem fundo cinza plano (`gray-700`), header sem gradiente, e cards simples sem elevação. O objetivo é aplicar um redesign visual moderno sem alterar nenhuma lógica de negócio.

## Goals / Non-Goals

**Goals:**
- Gradiente de cor no header (azul → roxo/índigo)
- Total da compra mais prominente e legível
- Cards de itens com visual elevado (sombra, bordas, separação)
- Empty state mais expressivo e convidativo
- Botão de adicionar com ícone e tamanho adequado
- Fundo com leve distinção do header

**Non-Goals:**
- Alterar lógica de estado ou hooks
- Mudar navegação entre tabs
- Adicionar animações complexas (reservado para versão futura)
- Trocar biblioteca de componentes

## Decisions

- **`expo-linear-gradient` para o header**: Expo já inclui essa lib no managed workflow. Permite gradiente nativo sem overhead. Alternativa (gradiente via NativeWind) não tem suporte nativo confiável.
- **Paleta azul-índigo**: `#3B82F6` (blue-500) → `#6366F1` (indigo-500). Vibrante, moderno, legível no dark mode. Alternativa roxo-pink foi descartada por ser menos neutra para um app de compras.
- **Total em card próprio no centro do header**: Dá destaque à informação mais importante. Alternativa de manter no canto direito perde visibilidade.
- **Sombra nos cards via `elevation` (Android) + `shadowColor` (iOS)**: NativeWind não suporta sombra real; usar style prop inline para sombra.
- **Fundo `gray-900` + header com gradiente**: Cria contraste claro entre área de input e lista.

## Risks / Trade-offs

- `expo-linear-gradient` requer instalação → verificar se já está no projeto; se não, instalar
- Sombra inline quebra o padrão NativeWind-only → trade-off aceitável pois é localizado
- Gradiente pode ter aparência diferente em iOS vs Android → testar nas duas plataformas
