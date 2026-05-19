## Requirements

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

### Requirement: Adição guiada com input vazio
O fluxo de adição de itens SHALL abrir um dialog de sugestões quando a ação de adicionar for acionada com o campo de texto vazio.

#### Scenario: Ação de adicionar com campo vazio
- **WHEN** o usuário toca em adicionar com o campo vazio
- **THEN** o sistema abre o dialog de sugestões
- **AND THEN** nenhum item é adicionado diretamente

### Requirement: Categorias iniciais em botões com scroll
O dialog SHALL exibir as categorias iniciais como botões organizados em uma lista com scroll vertical para acomodar o número expandido de categorias (15 categorias).

#### Scenario: Lista de categorias com scroll
- **WHEN** o dialog de sugestões abre
- **THEN** o usuário vê todas as 15 categorias em formato de botões
- **AND THEN** a lista de categorias é rolável verticalmente

### Requirement: Produtos por categoria
Ao selecionar uma categoria, o dialog SHALL substituir a lista de categorias pelos produtos daquela categoria.

#### Scenario: Categoria selecionada
- **WHEN** o usuário toca em Bebidas
- **THEN** o dialog mostra botões de produtos daquela categoria
- **AND THEN** a lista de categorias deixa de ser exibida naquele estado

### Requirement: Seleção de produto adiciona item padrão
O dialog SHALL permitir selecionar múltiplos produtos antes da confirmação final.

#### Scenario: Múltiplos produtos selecionados
- **WHEN** o usuário toca em mais de um produto dentro da mesma categoria ou em categorias diferentes
- **THEN** todas as seleções permanecem marcadas até a confirmação

### Requirement: Confirmação adiciona itens em lote
Ao confirmar a seleção no dialog, o sistema SHALL adicionar todos os produtos escolhidos com quantidade `1` e preço `0`.

#### Scenario: Seleção confirmada
- **WHEN** o usuário confirma a seleção do dialog
- **THEN** cada produto selecionado é adicionado à lista com quantidade 1
- **AND THEN** o preço inicial de cada item é 0

### Requirement: Fluxo manual preservado
Quando o campo de texto contiver valor, a ação de adicionar SHALL continuar criando o item digitado diretamente.

#### Scenario: Adição por texto livre
- **WHEN** o usuário digita um nome e toca em adicionar
- **THEN** o item é adicionado diretamente
- **AND THEN** o campo é limpo após a ação

### Requirement: Catálogo completo de produtos
O conjunto de categorias e produtos SHALL ser completo, cobrindo 15 setores de supermercado com 10 produtos cada, definido em arquivo de dados dedicado.

#### Scenario: Catálogo completo disponível
- **WHEN** o dialog é aberto pela primeira vez
- **THEN** o usuário vê todas as 15 categorias do catálogo expandido
- **AND THEN** cada categoria contém 10 produtos específicos do setor
