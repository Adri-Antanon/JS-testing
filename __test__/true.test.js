import * as Booleans from "../true";

describe("Test null values", () => {
  test("should be null", () => {
    expect(Booleans.isNull()).toBeNull();
  });
});

describe("Test truthy values", () => {
  test("should be true", () => {
    expect(Booleans.isTrue()).toBeTruthy();
  });
});

describe("Test falsy values", () => {
  test("should be false", () => {
    expect(Booleans.isFalse()).toBeFalsy();
  });
});

describe("Test undefined values", () => {
  test("should be undefined", () => {
    expect(Booleans.isUndefined()).toBeUndefined();
  });
});

describe("Test not true results", () => {
  test("should true or false ", () => {
    expect(Booleans.isFalse()).not.toBeTruthy();
  });
});
