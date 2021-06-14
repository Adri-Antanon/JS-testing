import { getCharacters } from "../snapshot";
import rick from "../rick.json";

describe("It's time for the snapshots", () => {
  test("Snapshot ", () => {
    expect(getCharacters(rick)).toMatchSnapshot();
  });

  test("should fail the snapshot", () => {
    const user = {
      createAt: new Date(),
      id: Math.floor(Math.random() * 20),
    };

    expect(user).toMatchSnapshot();
  });

  test("should have an exception", () => {
    const user = {
      name: "Adri",
      id: Math.floor(Math.random() * 20),
    };

    expect(user).toMatchSnapshot({
      id: expect.any(Number),
    });
  });
});
