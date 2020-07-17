// Desafio 1
function compareTrue(boo1, boo2) {
  // seu código aqui
  let teste = false;
  if (typeof boo1 === 'boolean' && typeof boo2 === 'boolean') {
    if (boo1 === true && boo2 === true) {
      teste = true;
      return teste;
    }
    else {
      teste = false;
      return teste;
    }
  }
  else {
    return 'erro: parâmetros devem ser true ou false.';
  }
}

// Desafio 2
function calcArea(base, alt) {
  // seu código aqui
  let areaDoTriangulo = 0;
  if (typeof base === 'number' && typeof alt === 'number' && base > 0 && alt > 0) {
    areaDoTriangulo = (base * alt) / 2;
    return areaDoTriangulo;
  }
  else {
    return 'erro: insira dois números positivos.';
  }
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let sentenceArray = [];
  if (typeof string === 'string') {
    sentenceArray = string.split(" ");
    return sentenceArray;
  }
  else {
    return 'erro: parâmetro deve ser um texto.';
  }
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let arrayStrings = [];
  arrayStrings.push(array[array.length - 1]);
  arrayStrings.push(array[0]);
  return arrayStrings;
}

// Desafio 5
function footballPoints(win, ties) {
  // seu código aqui
  let points = 0;
  if (Number.isInteger(win) && Number.isInteger(ties) && win >= 0 && ties >= 0) {
    points += (win * 3);
    points += (ties); 
    return points; 
  }
  else {
    return 'only positive integers allowed.';
  }
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
