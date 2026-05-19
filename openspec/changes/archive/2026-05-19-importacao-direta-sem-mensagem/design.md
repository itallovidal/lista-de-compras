## Context

O fluxo atual de importação em `ImportScreen` valida o texto, abre um dialog de confirmação e, só depois, adiciona os itens. Depois disso, o usuário continua na aba de importação. A mudança pede um fluxo mais direto: importar com um toque e voltar para a lista.

## Goals / Non-Goals

**Goals:**
- Remover a confirmação intermediária da importação.
- Importar itens imediatamente ao acionar o botão.
- Levar o usuário de volta para a aba da lista após sucesso.

**Non-Goals:**
- Alterar o parser de importação.
- Mudar a regra de formato multiline válido.
- Rever o layout geral da tela de importação.

## Decisions

- Usar a própria navegação de tabs para voltar à aba `Lista` após importar.
  - Alternativa considerada: manter o usuário na aba atual e mostrar só feedback visual. Rejeitada porque a solicitação pede redirecionamento explícito.
- Manter a validação atual antes de importar.
  - Alternativa considerada: aceitar qualquer texto e filtrar depois. Rejeitada porque mudaria a experiência e o contrato atual de formato.
- Remover o `Alert` de sucesso do fluxo.
  - Alternativa considerada: trocar o alert por um toast. Rejeitada por adicionar UI desnecessária ao pedido.

## Risks / Trade-offs

- [O usuário perde confirmação explícita] -> Mitigar mantendo a validação de formato e o redirecionamento claro para a lista.
- [Pode parecer que nada aconteceu se a lista já estiver vazia] -> Mitigar garantindo que a navegação retorne à aba principal onde os itens importados aparecem.
