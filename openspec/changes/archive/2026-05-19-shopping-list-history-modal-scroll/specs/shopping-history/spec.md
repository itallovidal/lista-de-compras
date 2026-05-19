## ADDED Requirements

### Requirement: Modal de histórico com altura máxima
O modal de histórico SHALL limitar sua altura máxima a 3/5 da altura da tela para evitar que o conteúdo ultrapasse a área visível.

#### Scenario: Modal aberto com lista longa
- **WHEN** o usuário abre o histórico e a lista de compras é maior que a área disponível
- **THEN** o modal não ultrapassa 60% da altura da tela
- **AND THEN** o restante do conteúdo permanece acessível por rolagem

### Requirement: Scroll interno no histórico
O conteúdo da lista no modal de histórico SHALL ser rolável internamente quando houver mais itens do que cabem na altura máxima.

#### Scenario: Navegação em lista extensa
- **WHEN** o histórico contém vários itens
- **THEN** o usuário consegue rolar o conteúdo dentro do modal
- **AND THEN** os itens fora da área visível podem ser acessados sem expandir o modal

### Requirement: Comportamento preservado para listas curtas
O modal de histórico SHALL manter seu tamanho natural quando o conteúdo couber dentro do limite máximo, sem exibir rolagem desnecessária.

#### Scenario: Modal com poucos itens
- **WHEN** o histórico contém poucos registros
- **THEN** o modal exibe todo o conteúdo sem precisar de rolagem interna
- **AND THEN** a aparência permanece equivalente ao comportamento atual
