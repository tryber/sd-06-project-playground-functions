// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 && value2) === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let word = '';
  let splitedPhrase = [];
  for (let i in string) {
    if (string[i] !== ' ') {
      word += (string[i]);
    }
    else if (string[i] === ' ') {
      splitedPhrase.push(word);
      word = '';
    }
  }
  splitedPhrase.push(word);
  return splitedPhrase;
}

// Desafio 4
function concatName(array) {
  let newArray = 0;
  for (let index = 0; index < array.length; index += 1) {
    return newArray = (array[array.length - 1] + ', ' + array[0]);
    }
}

// Escreva uma função com o nome footballPoints que receba o número de vitórias 
// (esse parâmetro deverá se chamar wins) e o número de empates 
// (esse parâmetro deverá se chamar ties) e retorne a quantidade de pontos que o time 
// marcou em um campeonato.

// Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.

// Desafio 5
let wins = 5;
let ties = 2;

function footballPoints(wins,ties) {
  return totalPoints = ((wins*3) + (ties * 1));
}
footballPoints(wins,ties);
console.log(totalPoints);

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
