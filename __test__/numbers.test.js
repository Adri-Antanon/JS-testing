import { numbers } from "../numbers";

describe("Numbers compare", () => {
  test("should be greater tham", () => {
    expect(numbers(2, 2)).toBeGreaterThan(3);
  });

  test("should be greater than or equal", () => {
    expect(numbers(2, 2)).toBeGreaterThanOrEqual(4);
  });

  test("should be lower than", () => {
    expect(numbers(1, 2)).toBeLessThan(5);
  });

  test("should be lower than or equal", () => {
    expect(numbers(3, 2)).toBeLessThanOrEqual(5);
  });

  test("should be floating number", () => {
    expect(numbers(0.2, 0.2)).toBeCloseTo(0.4);
  });
});
