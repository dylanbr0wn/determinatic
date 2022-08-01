import { Determinatic } from "../src";

describe("getColor", () => {
  const determinatic = Determinatic();

  test("same string input should produce same output", () => {
    const a = determinatic.getColor("a");
    const b = determinatic.getColor("a");

    expect(a).toBe(b);
  });

  test("different string input should produce different output", () => {
    const a = determinatic.getColor("a");
    const b = determinatic.getColor("b");

    expect(a).not.toBe(b);
  });

  test("same number input should produce same output", () => {
    const a = determinatic.getColor(1);
    const b = determinatic.getColor(1);

    expect(a).toBe(b);
  });

  test("different number input should produce different output", () => {
    const a = determinatic.getColor(1);
    const b = determinatic.getColor(2);

    expect(a).not.toBe(b);
  });

  test("handles max int", () => {
    const a = determinatic.getColor(Number.MAX_SAFE_INTEGER);
    const b = determinatic.getColor(Number.MAX_SAFE_INTEGER);
    expect(a).not.toBe(undefined);
    expect(a).toBe(b);
  });

  test("handles 0", () => {
    const a = determinatic.getColor(0);
    const b = determinatic.getColor(0);
    expect(a).not.toBe(undefined);
    expect(a).toBe(b);
  });

  test("handles float", () => {
    const a = determinatic.getColor(3.14);
    const b = determinatic.getColor(3.14);
    expect(a).not.toBe(undefined);
    expect(a).toBe(b);
  });

  test("handles negative", () => {
    const a = determinatic.getColor(-Number.MAX_SAFE_INTEGER);
    const b = determinatic.getColor(-Number.MAX_SAFE_INTEGER);
    expect(a).not.toBe(undefined);
    expect(a).toBe(b);
  });

  test("throw error on undefined input", () => {
    // @ts-ignore
    expect(() => determinatic.getColor(undefined)).toThrow();
  });

  test("throw error on null input", () => {
    // @ts-ignore
    expect(() => determinatic.getColor(null)).toThrow();
  });

  test("throw error on object input", () => {
    // @ts-ignore
    expect(() => determinatic.getColor({ foo: "bar" })).toThrow();
  });
});
