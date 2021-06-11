// import "babel-polyfill";
import { async } from "regenerator-runtime";
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

  test("should be doing a request with an error", async () => {
    const apiError = "http://httpstat.us/404";
    const request = getDataFromApi(apiError);
    expect(request).rejects.toEqual(
      Error("Request failed with status code 404")
    );
  });

  test("should be resolve a hello", async () => {
    await expect(Promise.resolve("Hello!")).resolves.toBe("Hello!");
    await expect(Promise.reject("Error")).rejects.toBe("Error");
  });
});
