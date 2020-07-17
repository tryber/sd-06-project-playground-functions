// Desafio 1
const firstBoolean = true;
const secondBoolean = false;

function compareTrue(firstBoolean, secondBoolean) {
  return firstBoolean && secondBoolean;
}

// console.log(compareTrue(firstBoolean, secondBoolean));

// Desafio 2
const base = 2;
const height = 7;

function calcArea(base, height) {
  return (base * height) / 2;
}

// console.log(calcArea(base, height));

// Desafio 3
const string = 'go Trybe melhor curso';

function splitSentence(string) {
  let splitSentence = [];
  let splitWord = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      splitSentence.push(splitWord);
      splitWord = '';
    } else {
      splitWord += string[i];
    }
  }

  splitSentence.push(splitWord);

  return splitSentence;
}

// console.log(splitSentence(string));

// Desafio 4
const strings = ['we are the best', 'Course', 'JavaScript', 'HTML', 'CSS', 'Trybe'];

function concatName() {
  return `${strings[strings.length - 1]}, ${strings[0]}`;
}

// console.log(concatName(strings));

// Desafio 5
const wins = 5;
const ties = 8;

function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// console.log(footballPoints(wins, ties));

// Desafio 6
const numbers = [9, 1, 2, 3, 9, 5, 7, 9, 9, 9];

function highestCount(numbers) {
  let max = Number.MIN_VALUE;
  let occurrences = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    if (max === numbers[i]) {
      occurrences += 1;
    }
  }
  
  return occurrences;
}

// console.log(highestCount(numbers));

// Desafio 7
const cat1 = 3;
const cat2 = 1;
const mouse = 6;

function catAndMouse(mouse, cat1, cat2) {
  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1 > cat2) {
    return 'cat1';
  }

  return 'cat2';
}

// console.log(catAndMouse(mouse, cat1, cat2));

// Desafio 8
let fizzBuzzNumbers = [2, 15, 7, 9, 45];

function fizzBuzz(fizzBuzzNumbers) {
  const fizzBuzzArray = [];

  for (let i = 0; i < fizzBuzzNumbers.length; i++) {
    if (fizzBuzzNumbers[i] % 3 === 0 && fizzBuzzNumbers[i] % 5 === 0) {
      fizzBuzzArray.push('fizzBuzz');
    } else if (fizzBuzzNumbers[i] % 5 === 0 && fizzBuzzNumbers[i] % 3 !== 0) {
      fizzBuzzArray.push('buzz');
    } else if (fizzBuzzNumbers[i] % 3 === 0 && fizzBuzzNumbers[i] % 5 !== 0) {
      fizzBuzzArray.push('fizz');
    } else {
      fizzBuzzArray.push('bug!');
    }
  }

  return fizzBuzzArray;
}

// console.log(fizzBuzz(fizzBuzzNumbers));

// Desafio 9
function encode(decodedString) {
  let encoded = '';

  for (let i = 0; i < decodedString.length; i++) {
    if (decodedString[i] === 'a') {
      encoded += '1';
    } else if (decodedString[i] === 'e') {
      encoded += '2';
    } else if (decodedString[i] === 'i') {
      encoded += '3';
    } else if (decodedString[i] === 'o') {
      encoded += '4';
    } else if (decodedString[i] === 'u') {
      encoded += '5';
    } else {
      encoded += decodedString[i];
    }
  }

  return encoded;
}

function decode(encodedString) {
  let decoded = '';

  for (let i = 0; i < encodedString.length; i++) {
    if (encodedString[i] === '1') {
      decoded += 'a';
    } else if (encodedString[i] === '2') {
      decoded += 'e';
    } else if (encodedString[i] === '3') {
      decoded += 'i';
    } else if (encodedString[i] === '4') {
      decoded += 'o';
    } else if (encodedString[i] === '5') {
      decoded += 'u';
    } else {
      decoded += encodedString[i];
    }
  }

  return decoded;
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
