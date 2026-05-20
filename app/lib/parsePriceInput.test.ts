import { parsePriceInput } from './parsePriceInput';

declare const describe: (name: string, fn: () => void) => void;
declare const it: (name: string, fn: () => void) => void;
declare const expect: (value: unknown) => { toBe: (expected: unknown) => void };

describe('parsePriceInput', () => {
  it('parses comma as decimal separator', () => {
    expect(parsePriceInput('20,50')).toBe(20.5);
  });

  it('parses dot as decimal separator', () => {
    expect(parsePriceInput('20.50')).toBe(20.5);
  });

  it('parses integer without separator', () => {
    expect(parsePriceInput('20')).toBe(20);
  });

  it('returns 0 for empty string', () => {
    expect(parsePriceInput('')).toBe(0);
  });

  it('returns 0 for whitespace only', () => {
    expect(parsePriceInput('   ')).toBe(0);
  });

  it('returns 0 for invalid characters', () => {
    expect(parsePriceInput('abc')).toBe(0);
  });

  it('truncates to 2 decimal places', () => {
    expect(parsePriceInput('20,509')).toBe(20.5);
  });

  it('handles zero value', () => {
    expect(parsePriceInput('0')).toBe(0);
  });

  it('handles zero with cents', () => {
    expect(parsePriceInput('0,50')).toBe(0.5);
  });

  it('removes non-numeric characters', () => {
    expect(parsePriceInput('R$20,50')).toBe(20.5);
  });
});
