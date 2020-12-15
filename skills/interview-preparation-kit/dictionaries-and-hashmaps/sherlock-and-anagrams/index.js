const sherlockAndAnagrams = s => {
  const dictionary = {};
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      const lookup = s.slice(i, j).trim().split('').sort().join('');
      if (dictionary[lookup]) {
        count += dictionary[lookup];
        dictionary[lookup]++;
      } else {
        dictionary[lookup] = 1;
      }
    }
  }
  return count;
};
