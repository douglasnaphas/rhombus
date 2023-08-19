const maxSideLenN = require(".").maxSideLenN;
const sideSum = require(".").sideSum;
describe("rhombus", () => {
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
  describe("sideSum", () => {
    test.each([
      {
        description: "1 cell",
        grid: [[1]],
        R: 0,
        C: 0,
        r: 0,
        c: 0,
        expected: 1,
      },
      {
        description: "base case of 'side length 2'",
        grid: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
        R: 0,
        C: 1,
        r: 0,
        c: 1,
        expected: 2,
      },
      {
        description: "side length 2",
        grid: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
        R: 0,
        C: 1,
        r: 1,
        c: 0,
        expected: 6,
      },
      {
        description: "Longside 1",
        grid: [[3,4,5,1,3],[3,3,4,2,3],[20,30,200,40,10],[1,5,5,4,1],[4,3,2,2,5]],
        R: 0,
        C: 3,
        r: 3,
        c: 0,
        expected: 36,
      },
    ])("$description", ({ grid, R, C, r, c, expected }) => {
      expect(sideSum(grid, R, C, r, c)).toEqual(expected);
    });
  });
});
