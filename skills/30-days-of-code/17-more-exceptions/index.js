class Calculator {
  constructor() {}

  power(n, p) {
    try {
      return n < 0 || p < 0
        ? (() => {
            throw Error;
          })()
        : n ** p;
    } catch {
      return 'n and p should be non-negative';
    }
  }
}
