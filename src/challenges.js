// Desafio 1
function compareTrue(v1, v2) {
  // seu código aqui
  if (v1 == true && v2 == true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea() {
  // seu código aqui
}

// Desafio 3
function splitSentence() {
  // seu código aqui
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
function fizzBuzz(array) {
  // seu código aqui
  let arrayResultado = [];
  for (let i = 0; i < array.length; i++) {
    if ((array[i] % 3 == 0) && (array[i] % 5 == 0)) {
    arrayResultado.push("fizzBuzz");
    } else if (array[i] % 3 == 0) {
    arrayResultado.push("fizz");
    } else if (array[i] % 5 == 0) {
    arrayResultado.push("buzz");
    } else {
    arrayResultado.push("bug!");   
    }
  }
  return(arrayResultado);
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


