const rotLeft = (a, d) => {
  const rotationsNeeded = d % a.length;
  return [
    ...[...a].slice(-(a.length - d)),
    ...[...a].slice(0, rotationsNeeded),
  ];
};
