// Desafio 1
function compareTrue(number1,number2) {
  let oddNumbers = 0;
  if (number1%2 != 0 && number2%2 != 0) {
    oddNumbers = true;
  } else {
    oddNumbers = false;
  }
  return oddNumbers;
}
console.log(compareTrue(2,3));

// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2;
  return area;
}
console.log(calcArea(4,8));

// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}
string = "be trybe";
console.log(splitSentence(string));

// Desafio 4
function concatName(arrayString) {
  let concatenate = arraySring.toString();
  for (let index in arrayString) {
    concatenate = arrayString[index] + " , " + arrayString[0];
  }
  return concatenate;
}
arraySring = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(arraySring));

// Desafio 5
function footballPoints(wins,ties) {
  let pointWins = 3*wins;
  let pointTies = ties;

  let totalPoints = pointWins + pointTies;
  return totalPoints;
}
console.log(footballPoints(1,4));

// Desafio 6
function highestCount() {
  // seu código aqui
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
