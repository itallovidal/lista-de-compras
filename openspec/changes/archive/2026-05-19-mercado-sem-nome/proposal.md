## Why

Salvar uma compra sem informar o nome do mercado hoje falha ou impede o registro correto no histórico. O nome do mercado deve ser opcional no fluxo de finalização para não bloquear o salvamento da lista.

## What Changes

- Permitir finalizar e salvar a lista mesmo com o nome do mercado em branco.
- Usar `Mercado não registrado.` como nome padrão quando o usuário não informar um valor.
- Manter o comportamento atual quando o usuário preencher o nome do mercado.

## Capabilities

### New Capabilities

- Nenhuma.

### Modified Capabilities

- `header-actions`: o fluxo de salvamento no header passa a aceitar nome de mercado vazio e a aplicar o rótulo padrão no histórico.

## Impact

- Fluxo de finalização no header.
- Persistência do histórico de compras.
- Exibição de entradas no histórico da aplicação.
