import { getCharacters } from "../snapshot";
import rick from "../rick.json";

describe("It's time for the snapshots", () => {
  test("Snapshot ", () => {
    expect(getCharacters(rick)).toMatchSnapshot();
  });
});
