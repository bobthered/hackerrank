const processData = words => {
  // split input
  words = words.split('\n');

  // get number of words
  let n = words.shift();

  // loop through words
  words.forEach(word => {
    // init string halfs
    let s1 = '',
      s2 = '';

    // loop through letters
    word.split('').forEach((a, i) => {
      // check if index is even
      if (i % 2 === 0) return (s1 += a);

      // otherwise, it must be odd
      return (s2 += a);
    });

    console.log(`${s1} ${s2}`);
  });
};
