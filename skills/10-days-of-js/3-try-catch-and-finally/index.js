const reverseString = s => {
  try {
    s = s.split('').reverse().join('');
  } catch (error) {
    console.log(error);
  }
  console.log(s);
};

module.exports = reverseString;
