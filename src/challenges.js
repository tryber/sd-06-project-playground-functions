// Desafio 1
function compareTrue(a,b) {
  if (a === true && b === true){
    return true
  }else{
    return false
  }
}

// Desafio 2
function calcArea(base,height) {
  var area = (base * height)/2
  return area
}

// Desafio 3
function splitSentence(frase) {
  var strSplit = frase.split(" ")
  return strSplit
}

// Desafio 4
function concatName(array){
  primeiroUltimo= array[array.length-1] + ', ' + array[0];
  return primeiroUltimo
}

// Desafio 5
function footballPoints(a, b) {
  wins = a * 3
  ties = b
  score = wins + ties
  return score
}

// Desafio 6
function highestCount(array) {
  maior = Math.max.apply(null, array);
  count = 0
  for (i in array) {
      if (array[i] === maior){
          count += 1
      }
  }
  return count
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
