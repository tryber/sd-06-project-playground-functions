// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 === true) && (value2 === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado
}

// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}

// Desafio 4
function concatName(array) {
  let resultado = array[array.length - 1] + ', ' + array[0];
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = 3;
  let tiesPoints = 1;
  let points = (wins * winsPoints) + (ties * tiesPoints);
  return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let repeat = 0;
  let highestNumber = 0;
  for (let i = 0; i <= arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] > highestNumber) {
      highestNumber = arrayNumbers[i];
    }
  }
  for (let i = 0; i <= arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] === highestNumber) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let pos1 = mouse - cat1;
  let pos2 = mouse - cat2;
  if (pos1 < 0) {
    pos1 = pos1 * -1;
  }
  if (pos2 < 0) {
    pos2 = pos2 * -1;
  }
  if (pos1 === pos2) {
    return 'os gatos trombam e o rato foge';
  } else if (pos2 < pos1) {
    return 'cat2';
  }
    return 'cat1';
  
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayFizzBuzz = [];
  for (let i = 0; i <= arrayNumbers.length; i += 1) {
    if (((arrayNumbers[i] % 3) === 0) && ((arrayNumbers[i] % 5) === 0)) {
      arrayFizzBuzz[i] = 'fizzBuzz';
    } else if ((arrayNumbers[i] % 3) === 0) {
      arrayFizzBuzz[i] = 'fizz';
    } else if ((arrayNumbers[i] % 5) === 0) {
      arrayFizzBuzz[i] = 'buzz';
    } else {
      arrayFizzBuzz[i] = 'bug!';
    }
  }
  return arrayFizzBuzz;
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
