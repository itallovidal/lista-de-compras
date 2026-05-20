## MODIFIED Requirements

### Requirement: Layout de linha única
O `ItemCard` SHALL exibir nome, stepper de quantidade, input de preço formatado como moeda brasileira e ícone de delete em uma única linha horizontal.

#### Scenario: Card renderizado com item
- **WHEN** um item é exibido na lista
- **THEN** todos os elementos (nome, stepper, input preço, lixeira) aparecem na mesma linha

#### Scenario: Input de preço exibe valor formatado
- **WHEN** o item possui preço 20.5
- **THEN** o input de preço exibe "20,50" com vírgula como separador decimal

## ADDED Requirements

### Requirement: Input de preço aceita vírgula como separador decimal
O input de preço SHALL aceitar vírgula (`,`) como separador decimal e converter automaticamente para ponto internamente.

#### Scenario: Usuário digita vírgula
- **WHEN** o usuário digita "20,50" no campo de preço
- **THEN** o valor armazenado é 20.5

#### Scenario: Usuário digita ponto
- **WHEN** o usuário digita "20.50" no campo de preço
- **THEN** o valor armazenado é 20.5

### Requirement: Teclado decimal para input de preço
O input de preço SHALL usar `keyboardType="decimal-pad"` para exibir teclado com ponto e vírgula no dispositivo móvel.

#### Scenario: Foco no campo de preço
- **WHEN** o usuário toca no campo de preço
- **THEN** o teclado exibido inclui teclas numéricas e separador decimal
