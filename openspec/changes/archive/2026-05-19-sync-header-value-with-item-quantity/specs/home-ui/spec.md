## MODIFIED Requirements

### Requirement: Total em destaque
O total da compra SHALL ser exibido em posição central e proeminente no header, com fonte grande e legível, e SHALL atualizar imediatamente quando a quantidade ou o preço de qualquer item mudar.

#### Scenario: Total destacado e sincronizado
- **WHEN** o usuário visualiza o header
- **THEN** o valor total aparece em tamanho de fonte grande (text-3xl ou maior), centralizado, com label "Total" acima
- **AND THEN** qualquer aumento ou redução de quantidade em um item atualiza o valor exibido no header sem ação adicional do usuário

### Requirement: Header reorganizado para resumo e ações
O header da HomeScreen SHALL organizar o resumo da compra, as ações rápidas e a entrada de itens em blocos visuais separados para melhorar a leitura.

#### Scenario: Resumo no topo e entrada abaixo
- **WHEN** o usuário visualiza a HomeScreen
- **THEN** o header mostra primeiro o total e a contagem de itens, depois o bloco de entrada com input e botão de adicionar em uma linha própria
