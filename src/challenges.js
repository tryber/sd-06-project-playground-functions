
// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(10, 20));

// Desafio 3

function splitSentence(frase) {
  return frase.split(' ');
}
console.log(splitSentence('go trybe'));

// Desafio 4
function concatName(array) {
  let first = array[0];
  let last = array[array.length -1];

  return (last + ', ' + first);
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// console.log(footballPoints(2, 3));

// Desafio 6
function highestCount(numbers) {
  let maiorNum = 0;
  let result = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    if (maiorNum < numbers[i]) {
      maiorNum = numbers[i];
    }
  }
  for (let i = 0; i < numbers.length; i += 1) {
    if (maiorNum === numbers[i]) {
      result += 1;
    }
  }
  return result;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = Math.abs(mouse - cat1);
  let gato2 = Math.abs(mouse - cat2);

  if (gato1 < gato2) {
    return 'cat1';
  } else if (gato1 === mouse && gato2 === mouse) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(numbers) {

  let result = [];
  for (let i = 0; i < numbers.length; i++){
    
    if (numbers[i] % 5 === 0 && numbers[i] % 3 === 0){
      result[i] = "fizzBuzz"
    } else if (numbers[i] % 5 === 0){
      result[i] = "buzz"
    }  else if (numbers[i] % 3 === 0){
      result[i] = "fizz"
    } else {
      result[i] = "bug!"
    }
    // console.log(result[i])
  }
  return result;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
