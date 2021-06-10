import * as arrays from "../array";

describe("Test if exist an element", () => {
  test("should contain banana", () => {
    expect(arrays.arrayFruits()).toContain("banana");
  });
  test("shouldn't contain platano", () => {
    expect(arrays.arrayFruits()).not.toContain("platano");
  });
  test("should test array length", () => {
    expect(arrays.arrayFruits()).toHaveLength(6);
  });
});
