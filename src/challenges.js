
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
function concatName() {
    let first = array[0];
    let last = array[array.length -1];

    return (last + ", " + first);
}

let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName.apply(null, array));

// Desafio 5
function footballPoints(wins, ties) {
  //quantos pontos no total?
  return (wins * 3) + ties;
}

console.log(footballPoints(2, 3));

// Desafio 6
function highestCount() {
  let maiorNum = 0;
  let result = 0;

  for (let i = 0; i < numbers.length; i++){
    if (maiorNum < numbers[i]){
      maiorNum = numbers[i];
    }

    if(maiorNum === numbers[i]) {
      result += 1;
    }
  }
  return result;
}

let numbers = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount.apply(numbers));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

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
