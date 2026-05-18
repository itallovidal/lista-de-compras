## Why

O card de item atual usa dois inputs largos numa segunda linha (preço e quantidade), ocupando espaço excessivo e sendo pouco ergonômico no touch. O revamp reorganiza o card em uma única linha compacta com stepper de quantidade (▲/▼) e ícone de lixeira do Phosphor Icons.

## What Changes

- Instalar `phosphor-react-native` e `react-native-svg`
- Reorganizar layout do `ItemCard` para uma linha única: nome | stepper qtd | input preço | ícone lixeira
- Substituir input de quantidade por stepper com botões ▲ e ▼ (bloco unificado)
- Substituir o botão "✕" pelo ícone `TrashIcon` do Phosphor (weight `regular`)
- Quantidade mínima 1 — botão ▼ desabilitado/opaco quando qty = 1

## Capabilities

### New Capabilities

- `item-card-ui`: Layout compacto de uma linha com stepper de quantidade e ícone Phosphor

### Modified Capabilities

- Nenhum

## Impact

- Arquivos alterados: `ItemCard.tsx`
- Novas dependências: `phosphor-react-native`, `react-native-svg`
- Sem alterações em lógica de estado, hooks ou outros componentes
