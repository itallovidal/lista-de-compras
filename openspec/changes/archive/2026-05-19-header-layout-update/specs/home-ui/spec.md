## MODIFIED Requirements

### Requirement: Header com gradiente
O header da HomeScreen SHALL exibir um gradiente de cor azul para índigo (`#3B82F6` → `#6366F1`) substituindo o fundo cinza plano, usando `expo-linear-gradient`.

#### Scenario: Gradiente visível no header
- **WHEN** o usuário abre a HomeScreen
- **THEN** o header exibe um fundo com gradiente azul-índigo de cima para baixo

### Requirement: Total em destaque
O total da compra SHALL ser exibido em posição central e proeminente no header, com fonte grande e legível.

#### Scenario: Total destacado
- **WHEN** o usuário visualiza o header
- **THEN** o valor total aparece em tamanho de fonte grande (text-3xl ou maior), centralizado, com label "Total" acima

### Requirement: Header reorganizado para resumo e ações
O header da HomeScreen SHALL organizar o resumo da compra, as ações rápidas e a entrada de itens em blocos visuais separados para melhorar a leitura.

#### Scenario: Resumo no topo e entrada abaixo
- **WHEN** o usuário visualiza a HomeScreen
- **THEN** o header mostra primeiro o total e a contagem de itens, depois o bloco de entrada com input e botão de adicionar em uma linha própria

### Requirement: Cards de itens com elevação
Os cards de itens na lista SHALL ter aparência elevada com sombra e bordas levemente arredondadas, diferenciando-se visualmente do fundo.

#### Scenario: Card com sombra
- **WHEN** a lista tem itens
- **THEN** cada card exibe sombra visível (elevation no Android, shadow no iOS) sobre o fundo escuro

### Requirement: Fundo escuro contrastante
O fundo da tela SHALL usar `gray-900` (mais escuro que o header) para criar contraste claro entre header e lista.

#### Scenario: Contraste header/lista
- **WHEN** o usuário visualiza a HomeScreen com itens
- **THEN** o header (gradiente) e a área da lista (cinza-900) têm distinção visual clara

### Requirement: Empty state aprimorado
O estado vazio SHALL exibir um visual mais expressivo com ícone grande, texto motivacional e fundo com leve gradiente ou borda colorida.

#### Scenario: Empty state expressivo
- **WHEN** a lista está vazia
- **THEN** o empty state exibe o ícone do carrinho em tamanho grande, texto convidativo e visual alinhado com a paleta do redesign

### Requirement: Botão de adicionar expressivo
O botão de adicionar item SHALL ter tamanho adequado, ícone "+" bem dimensionado e cor vibrante alinhada ao gradiente do header.

#### Scenario: Botão visível e clicável
- **WHEN** o usuário visualiza o campo de input
- **THEN** o botão "+" tem tamanho mínimo de 48px, cor de destaque e ícone claramente legível
