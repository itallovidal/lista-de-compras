## ADDED Requirements

### Requirement: Parse de input monetário brasileiro
O sistema SHALL converter input de preço com vírgula como separador decimal em um número válido, substituindo vírgula por ponto e removendo caracteres não numéricos.

#### Scenario: Input com vírgula como separador decimal
- **WHEN** o usuário digita "20,50"
- **THEN** o valor parseado é 20.5

#### Scenario: Input com ponto como separador decimal
- **WHEN** o usuário digita "20.50"
- **THEN** o valor parseado é 20.5

#### Scenario: Input sem separador decimal
- **WHEN** o usuário digita "20"
- **THEN** o valor parseado é 20

#### Scenario: Input vazio
- **WHEN** o input é string vazia
- **THEN** o valor parseado é 0

#### Scenario: Input com caracteres inválidos
- **WHEN** o usuário digita "abc"
- **THEN** o valor parseado é 0

#### Scenario: Input com mais de 2 casas decimais
- **WHEN** o usuário digita "20,509"
- **THEN** o valor parseado é 20.50 (truncado para 2 casas decimais)

### Requirement: Formatação de preço para exibição no input
O sistema SHALL formatar o valor numérico para exibição no input usando vírgula como separador decimal e exatamente 2 casas decimais.

#### Scenario: Preço com centavos
- **WHEN** o preço armazenado é 20.5
- **THEN** o valor exibido no input é "20,50"

#### Scenario: Preço inteiro
- **WHEN** o preço armazenado é 20
- **THEN** o valor exibido no input é "20,00"

#### Scenario: Preço zero
- **WHEN** o preço armazenado é 0
- **THEN** o campo de input exibe string vazia (campo vazio para facilitar digitação)

#### Scenario: Preço com mais de 2 casas decimais
- **WHEN** o preço armazenado é 20.509
- **THEN** o valor exibido no input é "20,51" (arredondado para 2 casas decimais)
