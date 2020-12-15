function checkMagazine(magazine, note) {
  for (let i = 0; i < note.length; i++) {
    if (magazine.indexOf(note[i]) === -1) return 'No';
    magazine.splice(magazine.indexOf(note[i]), 1);
  }
  return 'Yes';
}
