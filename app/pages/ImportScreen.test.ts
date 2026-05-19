import { importItemsAndGoToList } from './ImportScreen';

declare const describe: (name: string, fn: () => void) => void;
declare const it: (name: string, fn: () => void) => void;
declare const expect: (value: unknown) => { toBe: (expected: unknown) => void };

describe('ImportScreen import flow', () => {
  it('adds imported items and navigates', () => {
    const added: string[][] = [];
    let navigated = false;

    const result = importItemsAndGoToList(
      'arroz\nfeijao',
      (items) => {
        added.push(items);
      },
      () => {
        navigated = true;
      },
    );

    expect(result).toBe(true);
    expect(added.length).toBe(1);
    expect(navigated).toBe(true);
  });

  it('blocks invalid input without importing or navigating', () => {
    let imported = false;
    let navigated = false;

    const result = importItemsAndGoToList(
      'arroz, feijao',
      () => {
        imported = true;
      },
      () => {
        navigated = true;
      },
    );

    expect(result).toBe(false);
    expect(imported).toBe(false);
    expect(navigated).toBe(false);
  });
});
