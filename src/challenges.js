// Desafio 1
function compareTrue(param1, param2) {
  if(param1 === true && param2 === true){
    return true
  }
  return false
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura)/2
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ")
}

// Desafio 4
function concatName(itens) {
  return [itens[itens.length - 1],itens[0]]
}

// Desafio 5
function footballPoints(wins, ties) {
  let valorVitorias = wins * 3;
  let valorEmpates = ties;
  let pontos = valorVitorias + valorEmpates;
  return pontos
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
