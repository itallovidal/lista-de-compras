## ADDED Requirements

### Requirement: Importar itens em lote por texto multiline
O sistema MUST allow the user to paste a shopping list as multiline text and import each non-empty line as a separate item.

#### Scenario: Importação de lista válida
- **WHEN** the user pastes text with one item per line
- **THEN** the system MUST split the text into separate items and prepare them for import

#### Scenario: Formato obrigatório por quebra de linha
- **WHEN** the user pastes multiple items separated by characters other than line breaks
- **THEN** the system MUST reject the input as invalid or not ready for import

### Requirement: Entrada via textarea reutilizável
O sistema MUST present the import input as a reusable React textarea component.

#### Scenario: Campo de entrada exibido
- **WHEN** the import screen loads
- **THEN** the user MUST see a textarea-style input for pasting the list

### Requirement: Separação de itens por regex
O sistema MUST use a regex-based separator to parse the pasted content into items.

#### Scenario: Parsing com regex
- **WHEN** the user submits multiline text
- **THEN** the system MUST apply the separator rule to extract each item line
