// import "babel-polyfill";
import { getDataFromApi } from "../promise";
describe("Async Await testing", () => {
  test("should be making a rick and morty api request ", async () => {
    const apiUrl = "https://rickandmortyapi.com/api/character/?page=2";
    const getRick = "https://rickandmortyapi.com/api/character/1";

    await getDataFromApi(apiUrl).then((data) => {
      expect(data.results.length).toBeGreaterThan(2);
    });

    await getDataFromApi(getRick).then((data) => {
      expect(data.name).toEqual("Rick Sanchez");
    });
  });
});
