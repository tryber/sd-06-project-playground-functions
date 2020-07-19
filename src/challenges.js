// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let wordsSentence = sentence.split(' ');
  return wordsSentence;
}

// Desafio 4
function concatName(arrayString) {
  // seu código aqui
  let first = arrayString[arrayString.length - 1];
  let last = arrayString[0];
  let comma = ', ';
  let word = first + comma + last;
  return word;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  let highest = Math.max.apply(null, arrayNumbers);
  let count = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === highest) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  }
  return 'cat1';
}

// Desafio 8
function fizz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
  } else if (number % 3 === 0) {
    return 'fizz';
  } else if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}
function fizzBuzz(arrayNumbers) {
  // seu código aqui
  let fb = [];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    fb.push(fizz(arrayNumbers[index]));
  }
  return fb;
}

// Desafio 9
function encDec(phrase) {
  let newPhrase = '';
  for (let index = 0; index < phrase.length; index += 1) {
    switch (phrase[index]) {
      case 'a': newPhrase += '1'; break;
      case 'e': newPhrase += '2'; break;
      case 'i': newPhrase += '3'; break;
      case 'o': newPhrase += '4'; break;
      case 'u': newPhrase += '5'; break;
      case '1': newPhrase += 'a'; break;
      case '2': newPhrase += 'e'; break;
      case '3': newPhrase += 'i'; break;
      case '4': newPhrase += 'o'; break;
      case '5': newPhrase += 'u'; break;
      default: newPhrase += phrase[index];
    }
  }
  return newPhrase;
}
function encode(sentence) {
  // seu código aqui
  let newSentence = encDec(sentence);
  return newSentence;
}
function decode(expression) {
  // seu código aqui de novo
  return encDec(expression);
}

// Desafio 10
function techList(arrayTech) {
  // seu código aqui
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  arrayTech.sort();
  let objectTech = [];
  for (let index = 0; index < arrayTech.length; index += 1) {
    objectTech.push({
      tech: arrayTech[index],
      name: 'Lucas',
    });
  }
  return objectTech;
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
