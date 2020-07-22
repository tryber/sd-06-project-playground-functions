// Desafio 1
function compareTrue(value1 , value2) {
  return value1 && value2
}
console.log(compareTrue(true, true))

//Desafio 2
function calcArea( base, heigth ) {
  let area = (base * heigth) / 2
  return area;
}
console.log(calcArea( 5, 10 ));
 
// Desafio 3
function splitSentence( prhase ) {
  let splitPhrase = prhase.split(" ");
  return splitPhrase;
}
console.log(splitSentence("Aurelio Scarante Taborda"));

//Desafio 4
function concatName([listaNomes]) {
  return listaNomes[listaNomes.lenght - 1] + ", " + listaNomes[0];
}
console.log(concatName["Aurelio, Lorenzo, Millena"]);

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins  * 3) + ties;
  return totalPoints
}

console.log(footballPoints(5, 5));

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
