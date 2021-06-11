import { getDataFromApi } from "../promise";

describe("Promise testing", () => {
  test("get data from API", (done) => {
    const apiUrl = "https://rickandmortyapi.com/api/character/?page=2";
    getDataFromApi(apiUrl).then((data) => {
      expect(data.results.length).toBeGreaterThanOrEqual(1);
      done();
    });
  });
});
