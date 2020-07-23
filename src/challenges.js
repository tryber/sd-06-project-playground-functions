// Desafio 1
function compareTrue(value1 , value2) {
  return value1 && value2
}

//Desafio 2
function calcArea( base, heigth ) {
  return (base * heigth) / 2
}
 
// Desafio 3
function splitSentence( prhase ) {
  let splitPhrase = prhase.split(" ");
  return splitPhrase;
}
//Desafio 4
function concatName(names) {
  let listNames = [names.lenght - 1] + ", " + names[0];
  return listNames
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints
}

// Desafio 6
function highestCount(numbers) {
  let numMaior = 0;
  let total = 0;
  for (index = 0; index <= numbers.lenght; index += 1){
    if (numbers[index] > numMaior){
      numMaior = numbers[index]
    } 
  }
  for (index2 = 0; index2 <= numbers.lenght; index2 += 1){
    if (numbers[index2] === numMaior) {
      total += 1;// seu código aqui
    }
  }
  return total
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
