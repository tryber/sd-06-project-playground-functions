// Desafio 1
function compareTrue(bol1, bol2) {
  if (bol1 && bol2 === true) {
    return true;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let result = sentence.split(" ");
  return result;
}

// Desafio 4
function concatName(names) {
  let first = names[0];
  let last = names[names.length - 1];
  let concat = last + ', ' + first;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let win = wins * 3;
  let tie = ties * 1;
  let points = win + tie;
  return points;
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
