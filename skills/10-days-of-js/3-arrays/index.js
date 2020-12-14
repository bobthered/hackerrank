const getSecondLargest = arr => {
  // sort array from highest to lowest
  arr = arr.sort((a, b) => (a < b ? 1 : -1));

  // loop through array looking for next smallest value
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[0]) return arr[i];
  }
};

module.exports = getSecondLargest;
