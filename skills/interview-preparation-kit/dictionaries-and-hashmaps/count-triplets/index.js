const countTriplets = (arr, r) => {
  let count = 0;
  const hashJ = {};
  const hashK = {};
  for (let n of arr) {
    if (hashK[n]) count += hashK[n];
    if (hashJ[n])
      hashK[n * r] = hashK[n * r] ? hashK[n * r] + hashJ[n] : hashJ[n];
    hashJ[n * r] = hashJ[n * r] ? hashJ[n * r] + 1 : 1;
  }
  return count;
};
