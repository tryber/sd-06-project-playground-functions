// Desafio 1
function compareTrue(valor1 , valor2){
  let resultado_boleano;
  if(valor1 && valor2){
    resultado_boleano = true;
  }
  else{
    resultado_boleano = false;
  }
  return resultado_boleano;
}

// Desafio 2
function calcArea(base, heigth) {
  let calculo_area;
  calculo_area = (base * heigth) / 2;
  return calculo_area;
}

// Desafio 3
function splitSentence(frase) {
  let resultado_split;
  resultado_split = frase.split(' ');
  return resultado_split;  
}

// Desafio 4
function concatName(arraystrings) {
  let resultado_strings;
  let primeiro = arraystrings[0];
  let ultimo = arraystrings[arraystrings.length-1].concat(", ");
  resultado_strings = ultimo.concat(primeiro);
  return resultado_strings;
}

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
