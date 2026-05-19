import { DEFAULT_MARKET_NAME, resolveMarketName } from './marketName';

declare const describe: (name: string, fn: () => void) => void;
declare const it: (name: string, fn: () => void) => void;
declare const expect: (value: unknown) => { toBe: (expected: unknown) => void };

describe('marketName', () => {
  it('uses the default label when the input is empty', () => {
    expect(resolveMarketName('')).toBe(DEFAULT_MARKET_NAME);
  });

  it('trims and preserves a provided market name', () => {
    expect(resolveMarketName('  Mercado Central  ')).toBe('Mercado Central');
  });
});
