const processData = input => {
  const inputArray = input.split('\n');
  const numberOfEntries = inputArray.splice(0, 1);
  const nameQueries = inputArray.splice(numberOfEntries);
  const phoneBook = new Map(inputArray.map(item => item.split(' ')));

  nameQueries.map(name => {
    if (phoneBook.has(name)) console.log(`${name}=${phoneBook.get(name)}`);
    if (!phoneBook.has(name)) console.log('Not found');
  });
};
