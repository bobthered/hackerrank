const vowelsAndConsonants = s => {
  console.log(
    s
      .replace(/[^a|e|i|o|u]/g, '')
      .split('')
      .join('\n'),
  );
  console.log(
    s
      .replace(/[a|e|i|o|u]/g, '')
      .split('')
      .join('\n'),
  );
};
