// Desafio 1

function compareTrue(booleano01, booleano02) {

if (booleano01 === true && booleano02 === true) {
  return true;
}
else {
  return false;
}
}

// Desafio 2

var base = 12;
var height = 4
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2;
}
console.log(calcArea(base, height));

// Desafio 3
let lucas = "Lucas Miranda"
function splitSentence(lucas) {
  // seu código aqui
  lucas = lucas.split(" ");
  return lucas;
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
return (wins * 3) + (ties * 1);
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
