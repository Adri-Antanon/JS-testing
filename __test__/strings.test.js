describe("Must describe strings", () => {
  const text = "a nice text";
  test("should contain he same text", () => {
    expect(text).toMatch(/nice/);
  });
  test("shouldn't contain the next text", () => {
    expect(text).not.toMatch(/jiji/);
  });

  test("check the string length", () => {
    expect(text).toHaveLength(11);
  });
});
