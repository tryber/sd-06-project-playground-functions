// Desafio 1
function compareTrue(a = 1, b = 1) {
  if (a && b == 1){
    return true
  }
  else 
    return false
}

// Desafio 2
function calcArea(base = 10, height = 8) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(a = 'go Trybe') {
  a = a.split(' ');
  for ( x in a ){
    return a[x]
  }
}

// Desafio 4
function concatName( a = ['Lucas', 'Anderson', 'Maria', 'Paulo'] ) {
  last = a [a.length -1] 
  return (last + ', ' + a[0])
}

// Desafio 5
function footballPoints( wins = 3, ties = 1) {
  points = wins * 3 +  ties * 1
  return points
}

// Desafio 6
function highestCount() {
}

// Desafio 7
function catAndMouse() {
}

// Desafio 8
function fizzBuzz() {
}

// Desafio 9
function encode() {
}
function decode() {
}

// Desafio 10
function techList() {
}

// Desafio 11
function generatePhoneNumber() {
}

// Desafio 12
function triangleCheck() {
}

// Desafio 13
function hydrate() {
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
