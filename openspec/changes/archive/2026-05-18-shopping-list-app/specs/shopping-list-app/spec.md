## ADDED Requirements

### Requirement: Adicionar item à lista
O sistema SHALL permitir que o usuário adicione um item digitando o nome no campo de input e pressionando o botão adicionar.

#### Scenario: Adicionar item com sucesso
- **WHEN** usuário digita nome do item no input e clica no botão "Adicionar"
- **THEN** o item é adicionado à lista de compras

#### Scenario: Adicionar item com nome vazio
- **WHEN** usuário clica no botão "Adicionar" sem digitar nada no input
- **THEN** o item NÃO é adicionado e uma mensagem de erro é exibida

### Requirement: Editar preço do item
O sistema SHALL permitir que o usuário informe o preço de cada item adicionado.

#### Scenario: Informar preço do item
- **WHEN** usuário toca no campo de preço de um item e insere um valor numérico
- **THEN** o preço é salvo e exibido formatado em reais

### Requirement: Editar quantidade do item
O sistema SHALL permitir que o usuário informe a quantidade de cada item.

#### Scenario: Informar quantidade do item
- **WHEN** usuário toca no campo de quantidade de um item e insere um valor numérico
- **THEN** a quantidade é salva e exibida

### Requirement: Visualizar total da compra
O sistema SHALL calcular e exibir o total da compra no cabeçalho do app em reais.

#### Scenario: Total calculado corretamente
- **WHEN** itens possuem preço e quantidade definidos
- **THEN** o total exibido é a soma de (preço × quantidade) de todos os itens

#### Scenario: Total com itens sem preço
- **WHEN** algum item não tem preço definido
- **THEN** o item não é incluído no cálculo do total

### Requirement: Remover item da lista
O sistema SHALL permitir que o usuário remova um item da lista.

#### Scenario: Remover item
- **WHEN** usuário toca no botão de remover de um item
- **THEN** o item é removido da lista e o total é recalculado