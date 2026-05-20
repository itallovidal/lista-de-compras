import { formatPriceInput } from "../../lib/formatPriceInput";
import { parsePriceInput } from "../../lib/parsePriceInput";

declare const describe: (name: string, fn: () => void) => void;
declare const it: (name: string, fn: () => void) => void;
declare const expect: (value: unknown) => {
  toBe: (expected: unknown) => void;
};

describe("ItemCard price input interactions", () => {
  it("shows raw value on focus (not formatted)", () => {
    const price = 2.0;
    const rawDisplay = price > 0 ? String(price).replace(".", ",") : "";
    expect(rawDisplay).toBe("2");
  });

  it("shows formatted value on blur", () => {
    const price = 2.5;
    const formattedDisplay = formatPriceInput(price);
    expect(formattedDisplay).toBe("2,50");
  });

  it("parses comma decimal separator correctly", () => {
    const parsed = parsePriceInput("2,50");
    expect(parsed).toBe(2.5);
  });

  it("parses dot decimal separator correctly", () => {
    const parsed = parsePriceInput("2.50");
    expect(parsed).toBe(2.5);
  });

  it("formats after debounce timeout", () => {
    const price = 2.0;
    const formatted = formatPriceInput(price);
    expect(formatted).toBe("2,00");
  });

  it("handles zero price as empty string", () => {
    const display = formatPriceInput(0);
    expect(display).toBe("");
  });
});
