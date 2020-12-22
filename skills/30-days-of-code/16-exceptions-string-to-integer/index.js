const main = () => {
  let S = readLine();
  try {
    S != Number(S) && err();
    console.log(Number(S));
  } catch (err) {
    console.log('Bad String');
  }
};
