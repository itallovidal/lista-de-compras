## 1. Setup

- [x] 1.1 Instalar `phosphor-react-native` e `react-native-svg` com `npx expo install phosphor-react-native react-native-svg`

## 2. ItemCard Revamp

- [x] 2.1 Reorganizar layout para linha única: nome | stepper | input preço | lixeira
- [x] 2.2 Implementar stepper unificado com `CaretUpIcon` e `CaretDownIcon` (weight `regular`)
- [x] 2.3 Desabilitar botão ▼ (opacidade 0.3 + pointerEvents none) quando quantidade = 1
- [x] 2.4 Substituir botão "✕" pelo `TrashIcon` do Phosphor (weight `regular`, cor vermelha)
- [x] 2.5 Adicionar `numberOfLines={1}` e `ellipsizeMode="tail"` no texto do nome
