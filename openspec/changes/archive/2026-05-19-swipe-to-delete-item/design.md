## Context

O app já possui um `ItemCard` com nome, stepper, input e ação de delete. A implementação atual usa apenas `TouchableOpacity`, então não há suporte nativo a swipe com feedback visual. O projeto Expo 54 ainda não depende de `react-native-gesture-handler` nem de `react-native-reanimated`.

## Goals / Non-Goals

**Goals:**
- Permitir swipe da direita para a esquerda para deletar item.
- Reaproveitar a remoção existente sem mudar a regra de negócio.
- Adicionar feedback visual simples durante o gesto.

**Non-Goals:**
- Implementar múltiplas ações por swipe.
- Alterar o modelo de dados ou o fluxo de persistência.
- Substituir toda a interação do item por uma nova biblioteca de componentes.

## Decisions

- Usar `react-native-gesture-handler` para detectar o swipe horizontal no card.
  - Alternativa considerada: usar apenas `PanResponder` do React Native.
  - Motivo: a biblioteca especializada oferece comportamento mais consistente e é o caminho padrão para gestos em React Native.

- Usar `react-native-reanimated` para animar a tradução do card e o reveal da área de delete.
  - Alternativa considerada: `Animated` da core API.
  - Motivo: `reanimated` é mais adequado para gestos responsivos e integração com o gesture handler.

- Manter o botão de lixeira visível como fallback.
  - Alternativa considerada: remover o botão e depender só do swipe.
  - Motivo: melhora acessibilidade e reduz risco de descoberta ruim do gesto.

- Limitar a ativação do delete a um swipe significativo da direita para a esquerda.
  - Alternativa considerada: deletar no menor movimento.
  - Motivo: evita remoções acidentais.

## Risks / Trade-offs

- [Novo setup de dependência pode quebrar a inicialização] -> validar configuração do app e importação correta do gesture handler/reanimated antes de finalizar.
- [Swipe acidental em scroll] -> usar threshold de ativação suficiente e manter o item com altura estável.
- [Feedback visual insuficiente] -> mostrar a ação de delete progressivamente conforme o card desliza.
