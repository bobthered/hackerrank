const n = +readLine();
// If n is odd, print Weird
if (n % 2 === 1) return console.log('Weird');
// If n is even and in the inclusive range of 2 to 5, print Not Weird
if (n >= 2 && n <= 5) return console.log('Not Weird');
// If n is even and in the inclusive range of 6 to 20, print Weird
if (n >= 6 && n <= 20) return console.log('Weird');
// If n is even and greater than 20, print Not Weird
if (n > 20) return console.log('Not Weird');
