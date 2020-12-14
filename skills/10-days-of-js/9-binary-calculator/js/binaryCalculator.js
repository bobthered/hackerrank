// clear click handler
const clearClickHandler = () => (res.innerHTML = '');

// equal click handler
const equalClickHandler = () => {
  // get operand
  const operand = res.innerHTML.match(/[\+\-\/\*]/g)[0];
  // get two numbers
  const numbers = res.innerHTML.split(/[\+\-\/\*]/g).map(a => parseInt(a, 2));
  if (operand === '+') res.innerHTML = (numbers[0] + numbers[1]).toString(2);
  if (operand === '-') res.innerHTML = (numbers[0] - numbers[1]).toString(2);
  if (operand === '*') res.innerHTML = (numbers[0] * numbers[1]).toString(2);
  if (operand === '/') res.innerHTML = (numbers[0] / numbers[1]).toString(2);
};

// res append click handler
const resAppendClickHandler = e => {
  res.innerHTML += e.target.innerHTML;
};

// get query selectors
const res = document.querySelector('#res');
const btns = document.querySelector('#btns');
const btn0 = document.querySelector('#btn0');
const btn1 = document.querySelector('#btn1');
const btnClr = document.querySelector('#btnClr');
const btnEql = document.querySelector('#btnEql');
const btnSum = document.querySelector('#btnSum');
const btnSub = document.querySelector('#btnSub');
const btnMul = document.querySelector('#btnMul');
const btnDiv = document.querySelector('#btnDiv');

// res append click listeners
btn0.addEventListener('click', resAppendClickHandler);
btn1.addEventListener('click', resAppendClickHandler);
btnSum.addEventListener('click', resAppendClickHandler);
btnSub.addEventListener('click', resAppendClickHandler);
btnMul.addEventListener('click', resAppendClickHandler);
btnDiv.addEventListener('click', resAppendClickHandler);

// equal click listener
btnEql.addEventListener('click', equalClickHandler);

// clear click listener
btnClr.addEventListener('click', clearClickHandler);
