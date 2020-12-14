const sides = (literals, ...expressions) => {
  const [area, perimeter] = expressions;
  const side1 = (perimeter - Math.sqrt(Math.pow(perimeter, 2) - 16 * area)) / 4;
  const side2 = (perimeter + Math.sqrt(Math.pow(perimeter, 2) - 16 * area)) / 4;
  return [Math.min(...[side1, side2]), Math.max(...[side1, side2])];
};
