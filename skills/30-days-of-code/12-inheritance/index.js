class Student extends Person {
  constructor(firstName, lastName, id, scores) {
    super(firstName, lastName, id);
    this.scores = scores;
  }

  calculate() {
    const average = this.scores.reduce((a, c) => a + c) / this.scores.length;
    if (average < 40) return 'T';
    if (average < 55) return 'D';
    if (average < 70) return 'P';
    if (average < 80) return 'A';
    if (average < 90) return 'E';
    return 'O';
  }
}
