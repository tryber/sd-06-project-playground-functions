// Desafio 1
function compareTrue() {
  // seu código aqui
  let res = false;
  if(a === true && b === true) {
    res = true;
  } else {
    res = false;
  }
  return res;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2;
}
console.log(calcArea(15,28))

// Desafio 3

function splitSentence(string) {
  // seu código aqui
  return string.split(' ')
}
console.log(splitSentence('go Trybe'))

// Desafio 4
function concatName(array) {
  // seu código aqui
  let last = array.length-1;
  return  array[last]+', '+array[0];
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

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
