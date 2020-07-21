// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  let areaTriangulo = (base * altura) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let arrayDeStrings = string.split(' ');
  return arrayDeStrings;
}


// Desafio 4
function concatName(array) {
  let ultimo = array[array.length - 1];
  let primeiro = array[0];
  let ultimoPrimeiro = `${ultimo}, ${primeiro}`;
  return ultimoPrimeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosTotais = (wins * 3) + ties;
  return pontosTotais;
}

// Desafio 6
function highestCount(array) {
  let result = 0;
  let count = 0;
  for (let i = 0; i <= array.length; i += 1) {
    if (array[i] > result) {
      result = array[i];
      count = 0;
    }
    if (array[i] === result) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(rato, gato1, gato2) {
  let distanciaGato1 = Math.abs(rato - gato1);
  let distanciaGato2 = Math.abs(rato - gato2);
  if (distanciaGato1 > distanciaGato2) {
    return 'cat2';
  } else if (distanciaGato1 === distanciaGato2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat1';
}

// Desafio 8
function fizzBuzz(arrayNumber) {
let arrayString = [];
  for (i = 0; i < arrayNumber.length; i += 1) {
    if ((arrayNumber[i] % 3 === 0) && (arrayNumber[i] % 5 === 0)) {
      arrayString[i] = ('fizzBuzz');
    } else if ((arrayNumber[i] % 5 === 0) && (arrayNumber[i] % 3 !== 0)) {
      arrayString[i] = ('buzz');
    } else if ((arrayNumber[i] % 5 !== 0) && (arrayNumber[i] % 3 === 0)) {
      arrayString[i] = ('fizz');
    } else {
    arrayString[i] = ('bug!');
    }
  }
  return arrayString;
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
