export function formatPriceInput(value: number): string {
  if (value === 0) {
    return '';
  }

  return value.toFixed(2).replace('.', ',');
}
