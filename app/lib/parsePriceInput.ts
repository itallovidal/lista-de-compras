export function parsePriceInput(text: string): number {
  if (!text || text.trim() === '') {
    return 0;
  }

  let cleaned = text.trim();

  cleaned = cleaned.replace(',', '.');

  cleaned = cleaned.replace(/[^0-9.]/g, '');

  const parts = cleaned.split('.');
  if (parts.length > 2) {
    cleaned = parts[0] + '.' + parts.slice(1).join('');
  }

  if (parts.length === 2 && parts[1].length > 2) {
    cleaned = parts[0] + '.' + parts[1].slice(0, 2);
  }

  const parsed = parseFloat(cleaned);

  if (isNaN(parsed)) {
    return 0;
  }

  return Math.round(parsed * 100) / 100;
}
