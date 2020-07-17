// Desafio 1
function compareTrue(boolOne,boolTwo) {
  if (boolOne===true && boolTwo===true){
    return true;
  } else {
    return false;
  }
}
//console.log(compareTrue(false,true));

// Desafio 2
function calcArea(base , height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(palavras) {
  let novoArray = palavras.split(" ");
  return novoArray;
}
//console.log(splitSentence("teste trybe escola"));

// Desafio 4
function concatName(arrayPalavras) {
  let palavras = "";
    palavras += arrayPalavras[arrayPalavras.length-1];
    palavras += ", "
    palavras += arrayPalavras[0];
    return palavras;
  // seu código aqui
}
//console.log(concatName(['teste','trybe','escola']));

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
