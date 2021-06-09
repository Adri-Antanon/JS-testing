import * as Maths from "../maths";

describe("Math calcs", () => {
  test("should plus a + b", () => {
    expect(Maths.sum(1, 1)).toBe(2);
  });
  test("should substract a - b", () => {
    expect(Maths.substract(10, 1)).toBe(9);
  });
  test("should multiply a * b", () => {
    expect(Maths.multi(1, 5)).toBe(5);
  });
  test("should divide a / b", () => {
    expect(Maths.divide(6, 2)).toBe(3);
  });
});
