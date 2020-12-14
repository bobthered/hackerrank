const sockMerchant = sockArray =>
  sockArray.reduce(
    (a, c) => {
      if (c in a.singleSocks) {
        a.pairs++;
        delete a.singleSocks[c];
      } else {
        a.singleSocks[c] = 1;
      }
      return a;
    },
    { pairs: 0, singleSocks: {} },
  ).pairs;
