// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2 ? true : false;
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayStrings) {
  return arrayStrings[arrayStrings.length - 1] + ', ' + arrayStrings[0];
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  arrayNumbers.sort();
  let count = 1;
  for (let i = arrayNumbers.length - 1; i > 0; i -= 1) {
    if (arrayNumbers[i] != arrayNumbers[i - 1]) {
      return count;
    } else {
      count += 1;
    }
  }
  return count;
}

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
