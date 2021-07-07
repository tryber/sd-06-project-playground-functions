// Desafio 1
function compareTrue(boolean1, boolean2) {
  if ((boolean1) === (boolean2)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
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
function footballPoints(wins, teis) {
  return (wins * 3) + teis;
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
function fizzBuzz(args) {
  let vetor = [];
  for (let index = 0; index < args.length; index += 1) {
    if ((args[index] % 3 === 0) && (args[index] % 5 === 0)){ 
      vetor[index] = "fizzBuzz";
    } else if((args[index] % 3 !== 0) && (args[index] % 5 !== 0)){ 
      vetor[index] = "bug!";
    } else if (args[index] % 3 === 0){
      vetor[index] = "fizz";
    } else {
      vetor[index] = "buzz";
    } 
  }
  for (let index = 0; index < vetor.length; index += 1) {
    console.log(vetor[index]);
  }
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
