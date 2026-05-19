## ADDED Requirements

### Requirement: Importação direta sem confirmação
O sistema SHALL adicionar os itens colados à lista existente imediatamente quando o usuário tocar em `Importar`, sem exibir dialog de confirmação.

#### Scenario: Importação executada diretamente
- **WHEN** o usuário informa uma lista válida e toca em `Importar`
- **THEN** os itens são adicionados à lista existente sem abrir mensagem de confirmação

#### Scenario: Lista existente é preservada
- **WHEN** a lista já possui itens e o usuário toca em `Importar` com novos itens válidos
- **THEN** os itens existentes permanecem na lista
- **AND THEN** os novos itens são acrescentados ao final

### Requirement: Retorno para a lista após importar
Após importar com sucesso, o sistema SHALL redirecionar o usuário para a aba da lista.

#### Scenario: Redirecionamento após sucesso
- **WHEN** a importação termina com sucesso
- **THEN** a tela ativa passa para a aba `Lista`

### Requirement: Importação inválida bloqueada
O sistema SHALL bloquear a importação quando o conteúdo colado não seguir o formato multiline válido.

#### Scenario: Conteúdo inválido
- **WHEN** o usuário toca em `Importar` com conteúdo inválido
- **THEN** nenhum item é importado
- **AND THEN** o usuário permanece na tela de importação
