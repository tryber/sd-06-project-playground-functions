// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  let resultado;
  if (a === true && b === true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(nome) {
  // seu código aqui
  let resultado = nome.split(' ');
  return resultado;
}

// Desafio 4
function concatName(arr) {
  // seu código aqui
  let primeiro = arr[0];
  let ultimo = arr[arr.length - 1];
  let str = ultimo + ',' + primeiro;
  return str;
}

// Desafio 5
function footballPoints(vitoria, empate) {
  // seu código aqui
  vitoria *= 3;
  empate *= 1;
  return vitoria + empate;
}

// Desafio 6
function highestCount(inteiros) {
  // seu código aqui
  let indiceMaior = 0;
  let contador = 0;

  for (let indice in inteiros) {
    if (inteiros [indiceMaior] < inteiros [indice]){
      indiceMaior = indice;
    }
  }
  for (let i in inteiros) {
    if (inteiros [indiceMaior] === inteiros [i]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse() {
}

// Desafio 8
function fizzBuzz() {
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
