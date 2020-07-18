// Desafio 1
function compareTrue(termo1, termo2) {
  return termo1 && termo2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text) {
  return text.split(' ');
}

// Desafio 4
function concatName(stringArray) {
  let extractArray = (`${stringArray[stringArray.length - 1]}, ${stringArray[0]}`);
  arrayToStr = extractArray.toString();
  return arrayToStr;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(numbers) {
  let highestNumbers = numbers[0];
  let countHighestNumber = 0;

  for (let highIndex = 0; highIndex < arrayNumbers.length; highIndex += 1) {
    if (numbers[highIndex] > highestNumbers) {
      highestNumbers = numbers[highIndex]
    }
  }

  for (let countIndex = 0; countIndex < arrayNumbers.length; countIndex += 1) {
    if (highestNumbers === numbers[countIndex]) {
      countHighestNumber += 1
    }
  }

  return countHighestNumber;
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
