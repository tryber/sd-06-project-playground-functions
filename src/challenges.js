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
function encode(sentence) {
  // seu código aqui
  let newSentence = sentence;
  for (let index = 0; index < sentence.length; index++) {
    switch(sentence[index]) {
      case 'a':
        newSentence = newSentence.replace('a', '1');
        break;
      case 'e':
        newSentence = newSentence.replace('e', '2');
        break;
      case 'i':
        newSentence = newSentence.replace('i', '3');
        break;
      case 'o':
        newSentence = newSentence.replace('o', '4');
        break;
      case 'u':
        newSentence = newSentence.replace('u', '5');
        break;
    }
  }
  return newSentence;
}
function decode(sentence) {
  // seu código aqui
  let newSentence = sentence;
  for (let index = 0; index < sentence.length; index++) {
    switch(sentence[index]) {
      case '1':
        newSentence = newSentence.replace('1', 'a');
        break;
      case '2':
        newSentence = newSentence.replace('2', 'e');
        break;
      case '3':
        newSentence = newSentence.replace('3', '3');
        break;
      case '4':
        newSentence = newSentence.replace('4', 'o');
        break;
      case '5':
        newSentence = newSentence.replace('5', 'u');
        break;
    }
  }
  return newSentence;
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
