const modifyArray = nums => nums.map(num => (num *= num % 2 === 0 ? 2 : 3));
