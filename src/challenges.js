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
  for (let index = 0; index < array.length; index += 1) {
    return newArray = (array[array.length - 1] + ', ' + array[0]);
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  return totalPoints = ((wins*3) + (ties * 1));
}

// Desafio 6
function highestCount(array) {
  let highestNumber = array[0];
  let highestNumberCount = 0;
  for (let index in array) {
    if (highestNumber < array[index]) {
      highestNumber = array[index];
    }
  }
  for (let index in array) {
    if (highestNumber === array[index]) {
      highestNumberCount += 1;
    }
  }
  return highestNumberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat1 < distanceCat2) {
    return "cat1";
  }
  else if (distanceCat2 < distanceCat1) {
    return "cat2";
  }
  else if (distanceCat1 === distanceCat2) {
    return ("os gatos trombam e o rato foge");
  }
}

// Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:

// Para cada número da Array que seja divisível por 3, apresente uma string "fizz";
// Para cada número da Array que seja divisível por 5, apresente uma string "buzz";
// Caso o número seja divisível por 3 ou 5, retorne a string "fizzBuzz";
// Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
// Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzzArray = [];
  for (let index in array) {
    if (array[index] % 3 === 0) {
      fizzBuzzArray.push ("fizz")
    }
    else if (array[index] % 5 === 0) {
      fizzBuzzArray.push ("buzz")
    }
    else if ((array[index] % 3 && array[index] % 5) === 0) {
      fizzBuzzArray.push ("fizzbuzz")
    }
    else {
      fizzBuzzArray.push ("bug!")
    }
  }
  return fizzBuzzArray;
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
