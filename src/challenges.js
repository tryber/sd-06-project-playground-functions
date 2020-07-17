// Desafio 1
function compareTrue(a, b){

  if (a===true && b===true) { return true; }

  return false;
}

// Desafio 2
function calcArea(base, height){

  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string){

  return string.split(" ");
}

// Desafio 4
function concatName(arrayOfStrings){

  const firstName = arrayOfStrings[0];
  const lastName = arrayOfStrings[arrayOfStrings.length-1];

  let result = lastName + ", " + firstName;

  return result;
}

// Desafio 5
function footballPoints(wins,ties){

  let points = (wins * 3) + ties;

  return points;
}

// Desafio 6
function highestCount(array) {

  let globalCounter = 0;
  let compare;
  let mostOccurring;

  for (let i = 0; i < array.length; i++) {
    let counter = 0;

    compare = array[i];

    for (let j = 0; j < array.length; j++) {
      if (compare === array[j]) {
        counter += 1;
      }

      if (counter > globalCounter) {
        globalCounter = counter;
        mostOccurring = array[j];
      }
    }
  }

  return globalCounter;
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
