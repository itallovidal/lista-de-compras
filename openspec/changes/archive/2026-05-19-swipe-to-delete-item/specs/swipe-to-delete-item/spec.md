## ADDED Requirements

### Requirement: Swipe para remover item
O sistema SHALL permitir remover um item ao deslizar o card da direita para a esquerda.

#### Scenario: Swipe suficiente para remover
- **WHEN** o usuário desliza o item da direita para a esquerda além do limite de ativação
- **THEN** o item é removido da lista

#### Scenario: Swipe insuficiente não remove
- **WHEN** o usuário desliza o item parcialmente e solta antes do limite de ativação
- **THEN** o item retorna à posição original sem ser removido

### Requirement: Delete com confirmação visual
O card do item SHALL exibir uma área de delete durante o swipe para indicar a ação de remoção.

#### Scenario: Ação revelada durante swipe
- **WHEN** o usuário arrasta o card para a esquerda
- **THEN** a interface exibe feedback visual de delete associado ao gesto

### Requirement: Remoção alternativa preservada
O sistema SHALL manter a ação de delete por toque como forma alternativa de remover o item.

#### Scenario: Delete por toque continua funcionando
- **WHEN** o usuário toca no ícone de lixeira
- **THEN** o item é removido da lista
