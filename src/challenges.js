// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let value = (base * height) / 2;
  return value;
}

// Desafio 3
function splitSentence(phrase) {
  let newArray = phrase.split(' ');
  return newArray;
}

// Desafio 4
function concatName(list) {
  let string = list[list.length - 1] + ', ' + list[0];
  return string
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalScore;
  totalScore = (wins * 3) + ties;
  return totalScore;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber;
  let value1;
  for (let i=0; i<numbers.length;i++) {
    if (numbers[i] > highestNumber) {
        highestNumber = numbers[i];
    }
  }
  for (let index=0; index<numbers.length;index++) {
    if (highestNumber === numbers[index]) {
      value1 += 1;
    }
  } return value1
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position, cat2Position;
  let cat1Position = cat1 - mouse;
  let cat2Position = cat2 - mouse;
  if (cat1Position < 0) {
    cat1Position *= (-1);
  }
  if (cat2Position < 0){
    cat2Position *=(-1);
  }
  if (cat2Position === cat1Position){
    return "os gatos trombam e o rato foge"
  } else if (cat2Position < cat1Position) {
    return cat2
  } return cat1
}

// Desafio 8
// Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:

// Para cada número da Array que seja divisível por 3, apresente uma string "fizz";
// Para cada número da Array que seja divisível por 5, apresente uma string "buzz";
// Caso o número seja divisível por 3 ou 5, retorne a string "fizzBuzz";
// Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
// Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].
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
