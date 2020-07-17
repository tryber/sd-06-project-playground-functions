// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  let compare = true;
  if (a === true && b === true) {
    compare = true;
  } else {
    compare = false;
  }
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let calculo = 0;
  calculo = (base * height) / 2;
  return calculo;
}

// Desafio 3
function splitSentence(palavra) {
  // seu código aqui
  let word = palavra.split(' ');
  return word;
}

// Desafio 4
function concatName(arrayDeNomes) {
  // seu código aqui
  let primeiroItem = arrayDeNomes[0];
  let ultimoItem = arrayDeNomes[arrayDeNomes.length - 1];
  return (ultimoItem + ", " + primeiroItem);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pVitorias = wins * 3;
  let pEmpates = ties * 1;
  let pontuacao = pVitorias + pEmpates;
  return pontuacao;
}

// Desafio 6
function highestCount(inteiros) {
  // seu código aqui
  let numMaior = 0;
  let iMaior = 0;
  for (let i in inteiros) {
    if (inteiros[iMaior] < inteiros[i]) {
      iMaior = i;
    }
    numMaior = inteiros[iMaior];
  }
  let repetido = 0;
  let numero = 0;
  let iNumero = 0;
  for (let i in inteiros) {
    if (numMaior === inteiros[i]) {
        numero++;
      }
    if (numero > repetido) {
      repetido = numero;
      iNumero = i;
    }
  }
  return inteiros[iNumeros];
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
