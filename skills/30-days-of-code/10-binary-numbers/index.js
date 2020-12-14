const main = () => {
  const binary = (+readLine())
    .toString(2)
    .split('')
    .reduce(
      (a, c) => {
        if (c === '1') a.current++;
        if (c !== '1') a.current = 0;
        if (a.current > a.max) a.max = a.current;
        return a;
      },
      { max: 0, current: 0 },
    );
  console.log(binary.max);
};
