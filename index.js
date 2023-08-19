const maxSideLenN = (m, n, r, c) => {
  // for len s, you need:

  // room to the left
  // c - (s - 1) >= 0
  // c - s + 1 >= 0
  // s <= c + 1

  // room to the right
  // c + (s - 1) <= n - 1
  // c + s <= n
  // s <= n - c

  // room below
  // r + 2 * (s - 1) <= m - 1
  // 2 * (s - 1) <= m - 1 - r
  // 2s - 2 <= m - 1 - r
  // 2s <= m + 1 - r
  // s <= ceil((m - r + 1) / 2)

  return Math.min(c + 1, n - c, Math.ceil((m - r + 1) / 2));
};

const sideSum = (grid, R, C, r, c) => {
  const sideSums = {};
  const sideSumWMemo = (R, C, r, c) => {
    if (sideSums[`${R}#${C}#${r}#${c}`]) {
      // console.log(`returning sideSums[${R}#${C}#${r}#${c}]`)
      return sideSums[`${R}#${C}#${r}#${c}`];
    }
    // base case
    if (R === r && C === c) {
      sideSums[`${R}#${C}#${r}#${c}`] = grid[R][C];
      return grid[R][C];
    }
    // recursive case
    const goWest = c > C;
    const goEast = !goWest;
    if (goWest) {
      sideSums[`${R}#${C}#${r}#${c}`] =
        grid[r][c] + sideSumWMemo(R, C, r - 1, c - 1);
      return sideSums[`${R}#${C}#${r}#${c}`];
    }
    if (goEast) {
      console.log("going east")
      sideSums[`${R}#${C}#${r}#${c}`] =
        grid[r][c] + sideSumWMemo(R, C, r - 1, c + 1);
      return sideSums[`${R}#${C}#${r}#${c}`];
    }
  };
  return sideSumWMemo(R, C, r, c);
};

module.exports = { maxSideLenN, sideSum };
