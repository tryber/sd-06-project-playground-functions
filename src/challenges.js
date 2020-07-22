// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2 ;
  
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2 ;
}

// Desafio 3
function splitSentence(phrase) {
  let accumulator = '';
  let newList = [];
  for (let i = 0; i < phrase.length; i += 1) {
    let element = phrase[i]
    if (element !== ' ') {
      accumulator += element;
    } else {
      newList.push(accumulator);
      accumulator = '';
    }
  }
  novaLista.push(accumulator)
  return novaLista;
}
}

// Desafio 4
function concatName() {
  // seu código aqui
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
