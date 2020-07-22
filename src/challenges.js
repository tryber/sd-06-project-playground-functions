// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2 ;
  
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2 ;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(array) {
  let result;
  let primeiroItem = array[0];
  let ultimoItem = array[array.length - 1];
  result = (ultimoItem + ", " +  primeiroItem);
  return result ;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = (wins * 3) + ties;
  return result; 
}

// Desafio 6
function highestCount(arrayNumeros) {
  let maiorValor = arrayNumeros[0];
  let ocorrencias = 0;

  for (let i = 0; i <= arrayNumeros.length; i += 1) {
    if (arrayNumeros[i] > maiorValor) {
      maiorValor = arrayNumeros[i];
    }
  }

  for (let i = 0; i <= arrayNumeros.length; i += 1) {
    if (arrayNumeros[i] === maiorValor) {
      ocorrencias += 1;
    }
  }
  return ocorrencias;
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
