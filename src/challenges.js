// Desafio 1
function compareTrue(bol1, bol2) {
  if (bol1 && bol2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2
  return resultado
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array
}

// Desafio 4

function concatName(array) {
  return (array[array.length -1] + ", " + array[0]);
}

// Desafio 5

function footballPoints(wins, ties) {
  wins = wins * 3;
  let totalDePontos = (wins + ties);
  return totalDePontos
}

// Desafio 6
array = [9, 1, 2, 3, 9, 5, 7, 12, 4, 9, 12]

let numMaior = 0;
for (index = 0; index < array.length; index += 1){
  console.log(array[index])
     if (array[index] >= numMaior) {
      numMaior = array[index]
    }
  }
  console.log('o maior numero é ' + numMaior)
  let count = 0;
function highestCount(arrayPassado) {
  for (i = 0; i < arrayPassado.length; i += 1){
    if (arrayPassado[i] === numMaior) {
    count += 1;
    return count;
    }
  }
}

highestCount(array)



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
