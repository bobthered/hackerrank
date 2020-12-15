const freqQuery = queries => {
  const hash = {};
  const freq = [];
  const output = [];
  for (let query of queries) {
    const [operation, key] = query;
    const initValue = hash[key] || 0;
    if (operation === 1) {
      hash[key] = initValue + 1;

      freq[initValue] = (freq[initValue] || 0) - 1;
      freq[initValue + 1] = (freq[initValue + 1] || 0) + 1;
    }
    if (operation === 2 && hash[key] && hash[key] > 0) {
      hash[key] = initValue - 1;

      freq[initValue - 1] += 1;
      freq[initValue] -= 1;
    }
    if (operation === 3) output.push(freq[key] > 0 ? 1 : 0);
  }
  return output;
};
