afterEach(() => console.log("After each test"));
afterAll(() => console.log("After all tests"));

beforeEach(() => console.log("before each test"));
beforeAll(() => console.log("before all tests"));

describe("Prepare after exec", () => {
  test("should be true", () => {
    expect(true).toBeTruthy();
  });
});
