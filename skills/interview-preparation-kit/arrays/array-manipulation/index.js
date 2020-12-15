function main() {
  const [n, m] = readLine()
    .split(' ')
    .map(a => +a);
  const res = new Array(n).fill(0);
  let sum = 0;
  let max = 0;

  for (let _ = 0; _ < m; _++) {
    const [a, b, k] = readLine()
      .split(' ')
      .map(a => +a);
    res[a - 1] += k;
    if (b < n) res[b] -= k;
  }

  for (let i = 0; i < n; i++) {
    sum += res[i];
    if (max < sum) max = sum;
  }

  console.log(max);
}
