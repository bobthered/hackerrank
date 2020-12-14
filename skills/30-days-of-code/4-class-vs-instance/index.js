class Person {
  constructor(initialAge) {
    // if a negative argument is passed as initialAge, the constructor should set age to 0 and print Age is not valid, setting age to 0..
    if (initialAge < 0) {
      initialAge = 0;
      console.log('Age is not valid, setting age to 0.');
    }

    this.age = initialAge;
  }

  amIOld() {
    // If age < 13, print You are young..
    if (this.age < 13) return console.log('You are young.');

    // If age >= 13 and age < 18, print You are a teenager..
    if (this.age >= 13 && this.age < 18)
      return console.log('You are a teenager.');

    // Otherwise, print You are old..
    return console.log('You are old.');
  }

  yearPasses() {
    this.age++;
  }
}
