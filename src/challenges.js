// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 && boolean2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let newString = '';
  newString += array[array.length - 1];
  newString += ', ';
  newString += array[0];
  return newString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiePoints = ties * 1;
  return winPoints + tiePoints;
}

// Desafio 6
function highestCount(array) {
  let biggestNumber = 0;
  let highestNumberCount = 0;

  for (let number in array) {
    if (array[number] > biggestNumber) {
      biggestNumber = array[number];
      highestNumberCount = 1;
    } else if (array[number] === biggestNumber) {
      highestNumberCount += 1;
    }
  }
  return highestNumberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);

  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  return 'cat2';
}

function parseNumberToFizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
  } else if (number % 3 === 0) {
    return 'fizz';
  } else if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray[i] = parseNumberToFizzBuzz(array[i]);
  }
  return newArray;
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
};
