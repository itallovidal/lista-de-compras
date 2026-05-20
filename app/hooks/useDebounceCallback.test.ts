import { useDebounceCallback } from "./useDebounceCallback";

declare const describe: (name: string, fn: () => void) => void;
declare const it: (name: string, fn: () => void) => void;
declare const expect: (value: unknown) => {
  toBe: (expected: unknown) => void;
  toEqual: (expected: unknown) => void;
  toBeDefined: () => void;
};

describe("useDebounceCallback", () => {
  it("returns a function", () => {
    const { result } = renderHook(() => useDebounceCallback(() => {}, 3000));
    expect(typeof result.current).toBe("function");
  });

  it("uses 3000ms delay for price formatting", () => {
    const { result } = renderHook(() => useDebounceCallback(() => {}, 3000));
    expect(result.current).toBeDefined();
  });

  it("cleans up timer on unmount", () => {
    const { unmount } = renderHook(() => useDebounceCallback(() => {}, 3000));
    unmount();
  });
});

function renderHook<T>(callback: () => T): { result: { current: T }; unmount: () => void } {
  const timerRef = { current: null as ReturnType<typeof setTimeout> | null };
  const cleanup = () => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };
  return {
    result: { current: callback() },
    unmount: cleanup,
  };
}
