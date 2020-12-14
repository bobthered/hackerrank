const getLetter = s => {
  if (/[a|e|i|o|u]/.test(s[0])) return 'A';
  if (/[b|c|d|f|g]/.test(s[0])) return 'B';
  if (/[h|j|k|l|m]/.test(s[0])) return 'C';
  if (/[n|p|q|r|s|t|v|w|x|y|z|]/.test(s[0])) return 'D';
};
