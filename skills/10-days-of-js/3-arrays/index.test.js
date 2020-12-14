const getSecondLargest = require('.');

test('Second Largest of [2, 3, 6, 6, 5] should be 5', () => {
  expect(getSecondLargest([2, 3, 6, 6, 5])).toEqual(5);
});
