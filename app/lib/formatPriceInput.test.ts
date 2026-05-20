import { formatPriceInput } from './formatPriceInput';

declare const describe: (name: string, fn: () => void) => void;
declare const it: (name: string, fn: () => void) => void;
declare const expect: (value: unknown) => { toBe: (expected: unknown) => void };

describe('formatPriceInput', () => {
  it('formats price with cents', () => {
    expect(formatPriceInput(20.5)).toBe('20,50');
  });

  it('formats integer price with two decimals', () => {
    expect(formatPriceInput(20)).toBe('20,00');
  });

  it('returns empty string for zero', () => {
    expect(formatPriceInput(0)).toBe('');
  });

  it('rounds to 2 decimal places', () => {
    expect(formatPriceInput(20.509)).toBe('20,51');
  });

  it('formats small cents', () => {
    expect(formatPriceInput(0.05)).toBe('0,05');
  });

  it('formats large values', () => {
    expect(formatPriceInput(1234.56)).toBe('1234,56');
  });
});
