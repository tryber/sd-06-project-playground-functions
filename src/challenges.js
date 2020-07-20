// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2 ? true : false;
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayStrings) {
  return arrayStrings[arrayStrings.length - 1] + ', ' + arrayStrings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let count = 1;
  if (arrayNumbers.length === 1) {
    return count;
  }
  arrayNumbers.sort();
  for (let i = arrayNumbers.length - 1; i > 0; i -= 1) {
    if (arrayNumbers[i] !== arrayNumbers[i - 1]) {
      return count;
    } else {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayResponse = [];
  for (let number of arrayNumbers) {
    if (number % 3 === 0 && number % 5 === 0) {
      arrayResponse.push('fizzBuzz');
    } else if (number % 3 === 0) {
      arrayResponse.push('fizz');
    } else if (number % 5 === 0) {
      arrayResponse.push('buzz');
    } else {
      arrayResponse.push('bug!');
    }
  }
  return arrayResponse;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(arrayTech, name) {
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  arrayTech.sort()
  let arrayResponse = [];
  for (let tech of arrayTech) {
    let objectResponse = {};
    objectResponse.tech = tech;
    objectResponse.name = name;
    arrayResponse.push(objectResponse)
  }
  return arrayResponse;
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
