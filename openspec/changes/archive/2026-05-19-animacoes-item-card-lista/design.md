## Context

`ItemCard` already concentra a interação do item: gesto de swipe, update de quantidade e remoção. A lista é renderizada em um `ScrollView` simples, e a remoção acontece via `ShoppingContext`, que atualiza o estado imediatamente. Hoje a transição visual entre estados é abrupta.

## Goals / Non-Goals

**Goals:**
- Animar a entrada dos cards de baixo para cima em cerca de 200 ms.
- Reduzir a opacidade do card conforme o swipe de exclusão avança.
- Suavizar o reflow dos itens remanescentes quando um item é excluído.
- Reaproveitar a stack atual de `react-native-reanimated`.

**Non-Goals:**
- Não mudar o modelo de dados da lista.
- Não trocar `ScrollView` por uma lista virtualizada nesta mudança.
- Não redesenhar o card ou alterar regras de negócio de remoção.

## Decisions

- Usar `entering`, `exiting` e `layout` do `react-native-reanimated` no wrapper do card. Isso cobre entrada, saída e reposicionamento com a menor alteração estrutural. Alternativa considerada: `LayoutAnimation`, mas ela exigiria mais coordenação de plataforma e não aproveita o componente já animado.
- Usar `FadeInUp.duration(200)` no wrapper do card para a entrada. Alternativa considerada: `SlideInUp` com fade manual, mas `FadeInUp` já comunica o movimento e a opacidade em uma única primitive.
- Manter a opacidade do swipe no `actionStyle` e fazer com que o cartão caminhe até quase zero no limiar de exclusão. Alternativa considerada: animar a saída via `exiting`, mas isso compete com o gesto e não corresponde ao comportamento desejado.
- Aplicar `layout` animation no wrapper do card para o reflow da lista. Isso preserva a sensação de continuidade quando o item de baixo sobe para ocupar o espaço vazio. Alternativa considerada: mexer no `ScrollView`, mas isso não resolve a transição entre cards.

## Risks / Trade-offs

- [Risco] `translateX` do swipe pode competir com a animação de entrada. -> Mitigação: separar a animação inicial do wrapper da interação do gesto no card interno.
- [Risco] O `ScrollView` não virtualiza e pode amplificar custo visual em listas longas. -> Mitigação: aceitar o limite atual da tela e manter a mudança somente no comportamento visual.
- [Risco] Animações podem parecer excessivas em remoções rápidas sucessivas. -> Mitigação: usar curvas curtas e não introduzir delays adicionais.

## Migration Plan

1. Atualizar o wrapper do `ItemCard` para incluir animação de entrada, saída e layout.
2. Confirmar que a exclusão continua acionando a remoção pelo contexto como hoje.
3. Validar no fluxo de adicionar e excluir itens que a lista permanece responsiva.
4. Rollback: remover os props de animação e retornar ao render atual sem impacto em dados.

## Open Questions

- Nenhuma por enquanto. Se for necessário no futuro, podemos adicionar suporte a reduced motion sem alterar o contrato desta mudança.
