// Desafio 1
function compareTrue(param1, param2) {
  if ( param1 && param2 ){
    return true;
  }
  return false;
}


// Desafio 2
function calcArea(base, height) {
  return ( base*height) / 2;
  // seu código aqui
}

// Desafio 3
function splitSentence(param1) {
  let resultado = param1.split(" ");
  return resultado;
}
console.log(splitSentence("go trybe"));


// Desafio 4
function concatName(param1) {
  let resultado = param1.split(" ");
  let primeiraPosicao = resultado;
  let ultimaPosicao = resultado[resultado.length - 1];
  return ultimaPosicao + " , " + primeiraPosicao[0];
  //return `${ultimaPosicao}, ${primeiraPosicao[0]}`
}
console.log(concatName("Aluno trybe junho 2020 turma 06"));

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
