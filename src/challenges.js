// Desafio 1
function compareTrue(number1,number2) {
  // seu código aqui
  return number1 && number2
}

// Desafio 2
function calcArea(altura,base) {
  // seu código aqui
  return (base*altura)/2
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split()
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  primeiroItem=array[0]
  ultimoItem=array[array.lengh-1]
  return ultimoItem.concat(',',primeiroItem)
}

// Desafio 5
function footballPoints(times,vitorias) {
  // seu código aqui
  return (vitorias*3)+times
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
