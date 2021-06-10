describe("Common matchers", () => {
  const user = {
    name: "Adri",
    lastName: "Antanon",
  };
  const user2 = {
    name: "Adri",
    lastName: "Antanon",
  };
  const user3 = {
    name: "Adria",
    lastName: "Antanon",
  };

  test("should be equal each other", () => {
    expect(user).toEqual(user2);
  });

  test("shouldn't be equal each other", () => {
    expect(user).not.toEqual(user3);
  });
});
