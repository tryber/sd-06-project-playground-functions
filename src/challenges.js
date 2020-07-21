// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  }
  return false;
}
// console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}
// console.log(calcArea(10,50));

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let arrayString = string.split(' ');
  return arrayString;
}
// console.log(splitSentence("go Trybe"))

// Desafio 4
function concatName(string) {
  // seu código aqui
  let palavras = '';
  palavras += string[string.length - 1];
  palavras += ', ';
  palavras += string[0];
  return palavras;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let somaPontos = (wins * 3) + ties;
  return somaPontos;
}
// console.log(footballPoints(1, 3));

// Desafio 6
function highestCount(array) {
  let qtdDeVezes = 0;
  let maiorNumero = array[0];

  for (let index in array) {
    if (maiorNumero < array[index]) {
      maiorNumero = array[index];
    }
  }

  for (let index in array) {
    if (array[index] === maiorNumero) {
      qtdDeVezes += 1;
    }
  }

  return qtdDeVezes;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

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
};
