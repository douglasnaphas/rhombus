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

module.exports = { maxSideLenN };
