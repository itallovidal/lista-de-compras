## ADDED Requirements

### Requirement: Layout de linha única
O `ItemCard` SHALL exibir nome, stepper de quantidade, input de preço formatado como moeda brasileira e ícone de delete em uma única linha horizontal.

#### Scenario: Card renderizado com item
- **WHEN** um item é exibido na lista
- **THEN** todos os elementos (nome, stepper, input preço, lixeira) aparecem na mesma linha

#### Scenario: Input de preço exibe valor formatado
- **WHEN** o item possui preço 20.5
- **THEN** o input de preço exibe "20,50" com vírgula como separador decimal

### Requirement: Stepper de quantidade em bloco unificado
O stepper SHALL ser um bloco visual único contendo botão ▲, valor numérico e botão ▼, usando `CaretUpIcon` e `CaretDownIcon` do `phosphor-react-native` com weight `regular`.

#### Scenario: Incrementar quantidade
- **WHEN** o usuário toca o botão ▲
- **THEN** a quantidade aumenta em 1

#### Scenario: Decrementar quantidade acima de 1
- **WHEN** a quantidade é maior que 1 e o usuário toca ▼
- **THEN** a quantidade diminui em 1

#### Scenario: Quantidade mínima bloqueada
- **WHEN** a quantidade é 1
- **THEN** o botão ▼ fica com opacidade reduzida e não responde ao toque

### Requirement: Ícone de delete com Phosphor
O botão de remover item SHALL usar o `TrashIcon` do `phosphor-react-native` com weight `regular`.

#### Scenario: Delete com ícone Phosphor
- **WHEN** o usuário visualiza um card
- **THEN** o botão de remover exibe o ícone `TrashIcon` em vez de texto "✕"

#### Scenario: Remover item
- **WHEN** o usuário toca o ícone de lixeira
- **THEN** o item é removido da lista

### Requirement: Nome truncado em overflow
Nomes longos SHALL ser truncados com reticências para não quebrar o layout de linha única.

#### Scenario: Nome longo
- **WHEN** o nome do item excede o espaço disponível
- **THEN** o texto é truncado com `ellipsizeMode="tail"` e `numberOfLines={1}`

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
