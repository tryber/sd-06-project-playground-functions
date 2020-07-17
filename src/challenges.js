
// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  }
  return false;
}
// console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// console.log(calcArea(10, 20));

// Desafio 3

function splitSentence(frase) {
  return frase.split(' ');
}
// console.log(splitSentence('go trybe'));

// Desafio 4
let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName() {
  let first = array[0];
  let last = array[ array.length -1 ];

  return ( last + ', ' + first );
}
// console.log(concatName(array));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// console.log(footballPoints(2, 3));

// Desafio 6
let numbers = [9, 1, 2, 3, 9, 5, 7];
// console.log(highestCount(numbers));

function highestCount() {
  let maiorNum = 0;
  let result = 0;
  

  for (let i = 0; i < numbers.length; i += 1) {
    if (maiorNum < numbers[i]) {
      maiorNum = numbers[i];
    }

    if (maiorNum === numbers[i]) {
      result += 1;
    }
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = (mouse - cat1);
  let gato2 = (mouse - cat2);

  if (gato1 < gato2){
    return "cat1";
  } else if (cat1 === mouse && cat2 === mouse){
    return "os gatos trombam e o rato foge";
  }

  return "cat2";
}
// console.log(catAndMouse(4, 4, 2));

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

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
