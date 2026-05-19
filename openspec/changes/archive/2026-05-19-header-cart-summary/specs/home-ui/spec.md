## MODIFIED Requirements

### Requirement: Total em destaque
O total da compra SHALL ser exibido em posição central e proeminente no header, com fonte grande e legível.

#### Scenario: Total destacado
- **WHEN** o usuário visualiza o header
- **THEN** o valor total aparece em tamanho de fonte grande (text-3xl ou maior), centralizado, com label "Total" acima

### Requirement: Header reorganizado para resumo e ações
O header da HomeScreen SHALL organizar o resumo da compra, as ações rápidas e a entrada de itens em blocos visuais separados para melhorar a leitura.

#### Scenario: Resumo no topo e entrada abaixo
- **WHEN** o usuário visualiza a HomeScreen
- **THEN** o header mostra primeiro o resumo do carrinho com quantidade de produtos distintos e quantidade total de itens
- **AND THEN** o bloco de entrada com input e botão de adicionar aparece em uma linha própria

### Requirement: Resumo do carrinho no header
O header da HomeScreen SHALL exibir duas métricas distintas do carrinho: quantidade de produtos distintos e quantidade total de itens.

#### Scenario: Carrinho com múltiplas unidades
- **WHEN** o carrinho contém 2 ovos e 4 leites
- **THEN** o header mostra 2 produtos distintos
- **AND THEN** o header mostra 6 itens totais no carrinho

#### Scenario: Quantidade muda
- **WHEN** o usuário aumenta ou reduz a quantidade de um item
- **THEN** as métricas de produtos distintos e itens totais são atualizadas imediatamente
