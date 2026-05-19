## 1. Spec Alignment

- [x] 1.1 Atualizar o contrato do `home-ui` para exigir que o total do header mude imediatamente quando a quantidade ou o preço de um item for alterado.
- [x] 1.2 Revisar o fluxo de estado para garantir que `ShoppingContext.updateItem()` continue sendo a única fonte de recalculo do total.

## 2. Implementation Verification

- [x] 2.1 Confirmar que o `ItemCard` atualiza a quantidade via `onUpdateQuantity` ao tocar nos controles de incremento e decremento.
- [x] 2.2 Confirmar que `HomeScreen` consome o total derivado de `useShopping()` e passa esse valor ao `Header`.
- [x] 2.3 Validar manualmente que o valor no header muda ao aumentar e diminuir a quantidade de um item.

## 3. Regression Check

- [x] 3.1 Verificar que a finalização da lista continua exibindo o mesmo total atualizado no diálogo de confirmação.
- [x] 3.2 Verificar que não houve impacto no comportamento de salvar, limpar ou remover itens.
