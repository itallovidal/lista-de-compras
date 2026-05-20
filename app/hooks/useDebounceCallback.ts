import { useCallback, useEffect, useRef } from "react";

export function useDebounceCallback<T extends (...args: unknown[]) => void>(
  callback: T,
  delayMs: number,
): T {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cleanup = useCallback(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  return useCallback(
    ((...args: unknown[]) => {
      cleanup();
      timerRef.current = setTimeout(() => {
        callback(...args);
      }, delayMs);
    }) as T,
    [callback, delayMs, cleanup],
  );
}
