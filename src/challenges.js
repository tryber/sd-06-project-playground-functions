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
// array = [0, 4, 4, 4, 9, 2, 1]


function highestCount(arrayPassado) {
  let numMaior = 0;
  let count = 0;
  for (index = 0; index < array.length; index += 1){
       if (array[index] >= numMaior) {
        numMaior = array[index]
      }
    }
  for (i = 0; i < arrayPassado.length; i += 1){
    if (arrayPassado[i] === numMaior) {
    count += 1;
    
   
    }
  } return count;
  
}


// highestCount(array)


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return "cat1"} 
    else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
      return "cat2"} else {
      return "os gatos trombam e o rato foge"
    }
}
catAndMouse(1,3,2)

// Desafio 8
let a = [2, 15, 7, 9, 45];
function fizzBuzz() {
  if () {
    console.log('fizz')
  } else if () {
    console.log ('buzz')
  } else if () {
    console.log ('fizzbuzz') else {
      console.log ('bug!')
    }
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
