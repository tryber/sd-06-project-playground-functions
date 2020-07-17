// Desafio 1
function compareTrue(b1, b2) {
  let result = false; 
  if (b1 === true && b2 === true){
  }else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  string = string.split(' ');

  return string;
}

// Desafio 4
function concatName(array) {
  array = array[array.length-1] + ", " + array[0];
  return array;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points; 
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
