// Desafio 1
function compareTrue(value1, value2) {
  let result = Boolean;
  if (value1 === true && value2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(arrayOfStrings) {
  let newString = `${arrayOfStrings[arrayOfStrings.length - 1]}, ${arrayOfStrings[0]}`;
  return newString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalOfPoints = (wins * 3) + ties;
  return totalOfPoints;
}

// Desafio 6
function highestCount(numberArray) {
  let highestNumber = numberArray[0];
  for (let i = 1; i < numberArray.length; i+=1) {
    if (numberArray[i] > highestNumber) {
      highestNumber = numberArray[i];
    }
  }
  let counter = 0;
  for (let j = 0; j < numberArray.length; j+=1) {
    if (highestNumber === numberArray[j]) {
      counter+=1;
    }
  }
  return counter;
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
