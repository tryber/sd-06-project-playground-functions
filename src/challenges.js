// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  let arrFirst = arr[0];
  let arrLast = arr[arr.length - 1];
  return arrLast.concat(', ', arrFirst);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + ties;
}

// Desafio 6
function highestCount(arr) {
  let countNumber = 0;
  let countRepeated = 0;

  for (let index = 0; index < arr.length; index += 1) {
    let number = arr[index];
    for (let compareIndex = 0; compareIndex < arr.length; compareIndex += 1) {
      if (number === arr[compareIndex]) {
        countNumber += 1;
      }
    }
    if (countNumber > countRepeated) {
      countRepeated = countNumber;
    }
    countNumber = 0;
  }

  return countRepeated;
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
