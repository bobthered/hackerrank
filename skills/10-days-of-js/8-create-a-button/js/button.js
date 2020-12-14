const button = document.createElement('button');
button.id = 'btn';
button.innerHTML = '0';

button.addEventListener('click', () => {
  button.innerHTML++;
});

document.body.appendChild(button);
