import { hasValidMultilineFormat, parseImportedItems } from './importItems';

declare const describe: (name: string, fn: () => void) => void;
declare const it: (name: string, fn: () => void) => void;
declare const expect: (value: unknown) => { toEqual: (expected: unknown) => void; toBe: (expected: unknown) => void };

describe('importItems', () => {
  it('parses multiline items', () => {
    expect(parseImportedItems('arroz\nfeijao\nmacarrao')).toEqual([
      'arroz',
      'feijao',
      'macarrao',
    ]);
  });

  it('ignores blank lines and trims entries', () => {
    expect(parseImportedItems('  arroz  \n\n feijao ')).toEqual([
      'arroz',
      'feijao',
    ]);
  });

  it('rejects single-line input', () => {
    expect(hasValidMultilineFormat('arroz, feijao, macarrao')).toBe(false);
  });
});
