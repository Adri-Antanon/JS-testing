import { callbackHell } from "../callback";

describe("callback testing", () => {
  test("Callback", (done) => {
    function anotherCB(data) {
      expect(data).toBe("Esto es un infierno");
      done();
    }
    callbackHell(anotherCB);
  });
});
