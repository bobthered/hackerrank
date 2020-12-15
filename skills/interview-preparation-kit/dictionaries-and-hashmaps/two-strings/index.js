const twoStrings = (s1, s2) => {
  for (let i = 0; i < s1.length; i++) {
    if (new RegExp(s1[i], 'g').test(s2)) return 'YES';
  }
  return 'NO';
};

const main = () => {
  const q = +readLine();
  for (let i = 0; i < q; i++) {
    const s1 = readLine();
    const s2 = readLine();
    console.log(twoStrings(s1, s2));
  }
};
