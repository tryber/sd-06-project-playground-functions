// Desafio 1

function compareTrue(valor1, valor2) {
  let result = false;
  if (valor1 == true && valor2 == true) {
    result = true;
  } else {
    result;
  }
  return result;
}
console.log(compareTrue(false, false));


// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2
  return area
 }
 console.log(calcArea(10, 20))


// Desafio 3
function splitSentence(string) {
  let result = string.split(" ")
  return result
}
console.log(splitSentence("Eu sou Júlia"))


// Desafio 4
function concatName(array) {
  let result 
  let primeiro = array[array.length -1]
  let segundo = array[0]

  result = primeiro + ", " + segundo
  return result

}

console.log(concatName(['Júlia', 'Pôrto', 'Trybe', 'Course']))


// Desafio 5
function footballPoints(wins, ties) {
  let result = (wins * 3) + ties;
  return result
}

console.log(footballPoints(3, 2))


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
