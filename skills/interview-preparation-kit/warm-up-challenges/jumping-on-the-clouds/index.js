const jumpingOnClouds = arr => {
  let i = 0;
  let jumps = 0;
  while (i < arr.length - 1) {
    if (arr[i + 2] === 0) {
      i += 2;
    } else {
      i++;
    }
    jumps++;
  }
  return jumps;
};
