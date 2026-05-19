## ADDED Requirements

### Requirement: Adição guiada com input vazio
O fluxo de adição de itens SHALL abrir um dialog de sugestões quando a ação de adicionar for acionada com o campo de texto vazio.

#### Scenario: Ação de adicionar com campo vazio
- **WHEN** o usuário toca em adicionar com o campo vazio
- **THEN** o sistema abre o dialog de sugestões
- **AND THEN** nenhum item é adicionado diretamente

### Requirement: Categorias iniciais em botões
O dialog SHALL exibir categorias iniciais como botões organizados em múltiplas linhas para permitir navegação rápida.

#### Scenario: Lista inicial de categorias
- **WHEN** o dialog de sugestões abre
- **THEN** o usuário vê categorias como Limpeza, Higiene e Bebidas em formato de botões
- **AND THEN** os botões aparecem quebrando linha conforme o espaço disponível

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

### Requirement: Catálogo inicial enxuto
O conjunto inicial de categorias e produtos SHALL ser pequeno e fixo para validar a experiência antes de ampliar o catálogo.

#### Scenario: Primeira validação
- **WHEN** o dialog é aberto pela primeira vez
- **THEN** o usuário vê apenas um conjunto limitado de categorias e produtos
