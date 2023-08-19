// import { maxSideLenN } from ".";
const maxSideLenN = require(".").maxSideLenN;
describe("rhombus", () => {
  test("...", () => {});
  describe("maxSideLenN", () => {
    test.each([
      {
        m: 8,
        n: 8,
        r: 1,
        c: 3,
        expected: 4,
      },
      {
        m: 8,
        n: 8,
        r: 7,
        c: 7,
        expected: 1,
      },
      {
        m: 1,
        n: 1,
        r: 0,
        c: 0,
        expected: 1,
      },
      {
        m: 8,
        n: 8,
        r: 1,
        c: 5,
        expected: 3,
      },
    ])("$m, $n, $r, $c -> $expected", ({ m, n, r, c, expected }) => {
      expect(maxSideLenN(m, n, r, c)).toEqual(expected);
      expect(true).toBe(true);
    });
  });
});
