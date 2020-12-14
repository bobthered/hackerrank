const main = () => {
  const n = +readLine();
  const arr = readLine()
    .split(' ')
    .map(a => +a);

  // initialize reversed array
  let reversedArr = [];

  // loop through arr;
  for (let i = 0; i < arr.length; i++) {
    reversedArr.unshift(arr[i]);
  }

  console.log(reversedArr.join(' '));
};
