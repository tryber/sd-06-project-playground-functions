// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 === true) && (value2 === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado
}

// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}

// Desafio 4
function concatName(array) {
  let ultimoItem = array[array.length - 1];
  let primeiroItem = array[0];
  let resultado = [ultimoItem, primeiroItem];
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = 3;
  let tiesPoints = 1;
  let points = (wins * winsPoints) + (ties * tiesPoints);
  return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let repeat = 1;
  for (let i = 1; i < arrayNumbers.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (arrayNumbers[i] < arrayNumbers[j]) {
        let position = arrayNumbers[i];
        arrayNumbers[i] = arrayNumbers[j];
        arrayNumbers[j] = position;
      }
    }
  }
  for (let l = arrayNumbers[arrayNumbers.length - 2]; l >= 0; l -= 1) {
    if (arrayNumbers[l] === arrayNumbers[arrayNumbers.length - 1]) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
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
