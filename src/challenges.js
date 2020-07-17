//Desafio 1
function compareTrue(param1, param2) {
  if (param1 == true && param2 == true) {
  return true;
} else {
  return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return areaDoTri
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(" ");
}

// Desafio 4
function concatName(array) {
    let string = [];
    for (let i = array.length - 1; i >= 0; i -= array.length - 1) {
      string.push(array[i]);
    }
    return string
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = wins - ties;
  return pontos
}

// Desafio 6
function highestCount() {
  
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(n) {
  // seu código aqui
  for(let i = 1 ; i <= numero ; i++)
  let numero = "";
  
  if(i % 3==0){
    numero = "fizz"
  } else if (i % 5==0) {
    numero = "buzz"
  } else if (i % 3==0 && i % 3==0) {
    numero = "fizzbuzz"
  } else {
    numero = i

  return numero
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
