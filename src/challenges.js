// Desafio 1
function compareTrue(a,b) {
  // seu código aqui
  if(a === true && b === true) {
    return true;
  } 
    return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2;
}
console.log(calcArea(15,28))

// Desafio 3

function splitSentence(string) {
  // seu código aqui
  return string.split(' ')
}
console.log(splitSentence('go Trybe'))

// Desafio 4
function concatName(array) {
  // seu código aqui
  let last = array.length-1;
  return  array[last]+', '+array[0];
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let vit = 3 * wins;
  let emp = ties;
  return vit + emp;
}
console.log(footballPoints(5,3))
// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maiorNum = 0;
  let time = 0;
  for (let i in array) {
    if (array[maiorNum] < array[i]) {
      maiorNum = indice;
    }
  };
  for (let c in array) {
    if(array[c] === array[maiorNum]){
      time++;
    }
  }
  return time;
} 
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

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
