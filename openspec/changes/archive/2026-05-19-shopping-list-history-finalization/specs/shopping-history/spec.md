## ADDED Requirements

### Requirement: Histórico de compras finalizadas
O sistema SHALL persistir listas de compras finalizadas em armazenamento local para exibição posterior na aba de histórico.

#### Scenario: Compra finalizada é salva no histórico
- **WHEN** o usuário escolhe salvar a lista finalizada
- **THEN** o sistema grava a lista com mercado, itens, quantidade total e valor total no histórico local

#### Scenario: Histórico mantém apenas quatro listas
- **WHEN** uma quinta lista é salva no histórico
- **THEN** o sistema remove automaticamente a lista mais antiga e mantém apenas as 4 mais recentes

### Requirement: Finalização com confirmação
O sistema SHALL exibir um diálogo de finalização ao acionar o botão principal do header.

#### Scenario: Diálogo apresenta resumo da compra
- **WHEN** o usuário toca no botão de finalização
- **THEN** o sistema abre um diálogo com campo para informar o mercado e um resumo com quantidade de itens e total

#### Scenario: Finalizar sem salvar
- **WHEN** o usuário escolhe não salvar a compra
- **THEN** o sistema limpa a lista atual sem gravar um novo registro no histórico

### Requirement: Visualização do histórico
O sistema SHALL exibir compras passadas em cards de preview na aba de histórico.

#### Scenario: Lista de histórico com preview
- **WHEN** o usuário acessa a aba de histórico
- **THEN** o sistema mostra cards com mercado, total e quantidade de itens de cada compra salva

#### Scenario: Detalhe da compra salva
- **WHEN** o usuário toca em um card de histórico
- **THEN** o sistema exibe todos os itens comprados naquela lista
