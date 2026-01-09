function climbStairs(n: number): number {
  const memo = {};

  const st = (i) => {
    if (i > n) return 0;
    if (i === n) return 1;

    if (memo[i] !== undefined) {
      return memo[i];
    }

    memo[i] = st(i + 1) + st(i + 2);
    return memo[i];
  };

  return st(0);
}
