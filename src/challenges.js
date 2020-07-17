// Desafio 1
const firstBoolean = true;
const secondBoolean = false;

function compareTrue(firstBoolean, secondBoolean) {
  return firstBoolean && secondBoolean;
}

// console.log(compareTrue(firstBoolean, secondBoolean));

// Desafio 2
const base = 2;
const height = 7;

function calcArea(base, height) {
  return (base * height) / 2;
}

// console.log(calcArea(base, height));

// Desafio 3
const string = 'go Trybe melhor curso';

function splitSentence(string) {
  let splitSentence = [];
  let splitWord = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      splitSentence.push(splitWord);
      splitWord = '';
    } else {
      splitWord += string[i];
    }
  }

  splitSentence.push(splitWord);

  return splitSentence;
}

// console.log(splitSentence(string));

// Desafio 4
const strings = ['we\'re the best', 'Course', 'JavaScript', 'HTML', 'CSS', 'Trybe'];

function concatName() {
  return `${strings[strings.length - 1]}, ${strings[0]}`;
}

// console.log(concatName(strings));

// Desafio 5
function footballPoints() {
  // seu código aqui
}

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
