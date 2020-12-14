const repeatedString = (s, n) => {
  if (!/a/g.test(s)) return 0;
  let aCount = s.match(/a/g).length;
  aCount *= Math.floor(n / s.length);
  if (n % s.length !== 0) {
    const partialString = s.substring(
      0,
      n - Math.floor(n / s.length) * s.length,
    );
    if (/a/g.test(partialString)) aCount += partialString.match(/a/g).length;
  }
  return aCount;
};
