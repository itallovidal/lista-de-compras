export const parseImportedItems = (value: string): string[] => {
  return value
    .split(/\r?\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
};

export const hasValidMultilineFormat = (value: string): boolean => {
  const trimmed = value.trim();
  if (!trimmed) return false;
  if (!/\r?\n/.test(trimmed)) return false;
  return parseImportedItems(trimmed).length > 0;
};
