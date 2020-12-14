const countingValleys = path =>
  path.split('').reduce(
    (a, c) => {
      if (c === 'D') a.altitude--;
      if (c === 'U') {
        a.altitude++;
        if (a.altitude === 0) a.valleys++;
      }
      return a;
    },
    { valleys: 0, altitude: 0 },
  ).valleys;
