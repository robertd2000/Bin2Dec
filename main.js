const binaryInput = document.querySelector('#binary'),
  decimalInput = document.querySelector('#decimal'),
  button = document.querySelector('#btn');

const convert = () => {
  const binary = binaryInput.value;
  if (binary === '') return 'Empty input';

  binary.split('').map((i) => {
    if (i !== '0' && i !== '1') return 'Pls enter 0 or 1';
    decimalInput.value = parseInt(binary, 2);
  });
};

button.addEventListener('click', convert);
