## MODIFIED Requirements

### Requirement: Categorias iniciais em botões com scroll
O dialog SHALL exibir as categorias iniciais como botões organizados em uma lista com scroll vertical para acomodar o número expandido de categorias (15 categorias).

#### Scenario: Lista de categorias com scroll
- **WHEN** o dialog de sugestões abre
- **THEN** o usuário vê todas as 15 categorias em formato de botões
- **AND THEN** a lista de categorias é rolável verticalmente

### Requirement: Catálogo completo de produtos
O conjunto de categorias e produtos SHALL ser completo, cobrindo 15 setores de supermercado com 10 produtos cada, definido em arquivo de dados dedicado.

#### Scenario: Catálogo completo disponível
- **WHEN** o dialog é aberto pela primeira vez
- **THEN** o usuário vê todas as 15 categorias do catálogo expandido
- **AND THEN** cada categoria contém 10 produtos específicos do setor

## REMOVED Requirements

### Requirement: Catálogo inicial enxuto
**Reason**: Substituído pelo catálogo expandido com 15 categorias e ~150 produtos
**Migration**: O requirement foi substituído por "Catálogo completo de produtos" na spec `quick-clicks-catalog`
