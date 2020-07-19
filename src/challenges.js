// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2) {
    return true;
  }
  return false;
}


// Desafio 2
function calcArea(base, height) {
  return (base*height) / 2;
  // seu código aqui
}

// Desafio 3
function splitSentence(param1) {
  let resultado = param1.split(' ');
  return resultado;
}
console.log(splitSentence('go trybe'));


// Desafio 4
function concatName(param1) {
  let primeiraPosicao = param1;
  let ultimaPosicao = param1[param1.length - 1];
  return `${ultimaPosicao}, ${primeiraPosicao[0]}`
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let empate = ties * 1;
  let somaPontos = vitoria + empate;
  return somaPontos;
}
console.log(footballPoints(1, 5));

// Desafio 6
function highestCount(param1) {
  let somaNumero = 0;
  let maiorNumero = 0;
  for (let index = 0; index < param1.length; index++) {
    if (param1[index] > maiorNumero) {
      maiorNumero = param1[index];
      somaNumero = 0;
    }
    if (param1[index] === maiorNumero) {
      somaNumero += 1;
    }
  }
  return somaNumero;
  }
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));


// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  if (cat1 === cat2){
    return 'os gatos trombam e o rato foge';
  } else if (cat1 === mouse || cat1 <= mouse) {
    return cat1 + 'Gato 01 ganha';
  } else if (cat2 === mouse || cat2 <= mouse) {
    return cat2 + 'Gato 02 ganha';
  }
}
console.log(catAndMouse(5, 3, 2))


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
