// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(input) {
  let wordsArray = [];
  let newWord = '';

  for (let i = 0; i <= input.length; i += 1) {
    if (input[i] === ' ' || i === input.length) {
      wordsArray.push(newWord);
      newWord = '';
    } else {
      newWord += input[i];
    }
  }

  return wordsArray;
}

// Desafio 4
function concatName(arrayInput) {
  let newString = arrayInput[arrayInput.length - 1] + ', ' + arrayInput[0];

  return newString;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let highestNumber = arrayOfNumbers[0];
  let highestNumberCount = 0;

  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
    if (arrayOfNumbers[i] > highestNumber) {
      highestNumber = arrayOfNumbers[i];
    }
  }

  for (let i = 0; i < arrayOfNumbers.length; i+= 1) {
    if (arrayOfNumbers[i] === highestNumber) {
      highestNumberCount += 1;
    }
  }

  return highestNumberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positiveArray = [cat1, cat2, mouse];

  for (let i in positiveArray) {
    if (positiveArray[i] < 0) {
      positiveArray[i] *= -1;
    }
  }

  function closerToMouse(predator, prey) {
    if (predator > prey) {
      return predator - prey;
    } else if (prey > predator) {
      return prey - predator;
    }

    return 0;
  }

  if (closerToMouse(cat1, mouse) === closerToMouse(cat2, mouse)) {
    return 'os gatos trombam e o rato foge';
  } else if (closerToMouse(cat1, mouse) < closerToMouse(cat2, mouse)) {
    return 'cat1';
  } 

  return 'cat2';
}

// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  let arrayReturn = [];

  for (let i = 0; i < arrayFizzBuzz.length; i += 1) {
    if (arrayFizzBuzz[i] % 5 === 0 && arrayFizzBuzz[i] % 3 === 0) {
      arrayReturn.push('fizzBuzz');
    } else if (arrayFizzBuzz[i] % 3 === 0) {
      arrayReturn.push('fizz');
    } else if (arrayFizzBuzz[i] % 5 === 0) {
      arrayReturn.push('buzz');
    } else {
      arrayReturn.push('bug!');
    }
  }

  return arrayReturn;
}

// Desafio 9
function encode(string) {
let newString = '';

  for (let char in string) {
    if (string[char] === 'a') {
      newString += '1';
    } else if (string[char] === 'e') {
      newString += '2';
    } else if (string[char] === 'i') {
      newString += '3';
    } else if (string[char] === 'o') {
      newString += '4';
    } else if (string[char] === 'u') {
      newString += '5';
    } else {
      newString += string[char];
    }
  }

  return newString;
}

function decode(string) {
  let newString = '';

  for (let char in string) {
    if (string[char] === '1') {
      newString += 'a';
    } else if (string[char] === '2') {
      newString += 'e';
    } else if (string[char] === '3') {
      newString += 'i';
    } else if (string[char] === '4') {
      newString += 'o';
    } else if (string[char] === '5') {
      newString += 'u';
    } else {
      newString += string[char];
    }
  }

  return newString;
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
