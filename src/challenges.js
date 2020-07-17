// Aloizio Borges Santos Coelho
// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true
  } return false;
  // seu código aqui
}

console.log(compareTrue(true, false))

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area
  // seu código aqui
}

console.log(calcArea(3, 4))

// Desafio 3
function splitSentence(string) {
  let palavraSeparada = string.split(' ');
  return palavraSeparada
  // seu código aqui
}

console.log(splitSentence('go Trybe'))

// Desafio 4
let arr = ['Lucas','Cassiano','Ferraz','Paolillo'];
function concatName(arr) {
  let PrimeiroeUltimo =  [arr[arr.length - 1], arr[0]];
  return PrimeiroeUltimo
  // seu código aqui
}

console.log(concatName(arr))

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
