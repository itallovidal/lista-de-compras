## Context

O modal de histórico já exibe uma lista de compras salvas, mas não há limite de altura explícito para o conteúdo. Em listas longas, isso pode fazer o modal ultrapassar a área útil da tela e dificultar a navegação em dispositivos menores.

## Goals / Non-Goals

**Goals:**
- Limitar o modal de histórico a no máximo 60% da altura da tela.
- Permitir scroll interno quando o conteúdo exceder a área visível.
- Preservar a experiência atual para listas curtas.

**Non-Goals:**
- Alterar o modelo de dados do histórico.
- Mudar a navegação ou o layout geral da tela além do modal.
- Adicionar paginação, filtro ou busca no histórico.

## Decisions

- Usar uma altura máxima calculada a partir da viewport/tela, com limite fixo de `3/5` da altura disponível.
  - Rationale: atende o requisito visual sem depender do tamanho do conteúdo.
  - Alternatives considered: altura fixa em pixels, rejeitada por quebrar em telas muito pequenas ou muito grandes.
- Tornar apenas o corpo da lista scrollável, mantendo o cabeçalho e ações do modal estáveis.
  - Rationale: o usuário continua vendo o contexto do modal enquanto navega pelos itens.
  - Alternatives considered: scroll no modal inteiro, rejeitado porque esconderia ações e título durante a rolagem.
- Manter o comportamento padrão quando houver poucos itens, sem forçar scroll desnecessário.
  - Rationale: evita regressão visual e mantém a simplicidade para casos comuns.

## Risks / Trade-offs

- [Risk] Em telas muito baixas, 60% pode ainda ser pouco para mostrar contexto suficiente -> Mitigation: permitir rolagem interna e garantir que o cabeçalho permaneça visível.
- [Risk] A mudança pode expor diferenças de comportamento entre iOS e Android -> Mitigation: validar os estilos de contenção e overflow nos dois ambientes.
- [Risk] Se o conteúdo interno não estiver corretamente encapsulado, o scroll pode não funcionar -> Mitigation: aplicar o scroll no container correto e testar com listas longas.

## Migration Plan

- Não há migração de dados.
- Atualizar o modal de histórico e validar manualmente com listas curtas e longas.
- Se houver regressão visual, reverter apenas o ajuste de altura/overflow do container do modal.

## Open Questions

- Nenhuma.
