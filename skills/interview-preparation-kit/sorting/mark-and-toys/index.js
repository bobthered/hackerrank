const maximumToys = (prices, k) => {
  let count = 0;
  const sortedPrices = prices.sort((a, b) => (a < b ? -1 : 1));
  for (let i = 0; i < sortedPrices.length; i++) {
    const toyCost = sortedPrices[i];
    if (toyCost <= k) {
      count++;
      k -= toyCost;
    } else {
      break;
    }
  }
  return count;
};
