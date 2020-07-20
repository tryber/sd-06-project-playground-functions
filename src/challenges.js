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
function encode(string) {
  let encodedString = '';
  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
      case 'a':
        encodedString += '1';
        break;
      case 'e':
        encodedString += '2';
        break;
      case 'i':
        encodedString += '3';
        break;
      case 'o':
        encodedString += '4';
        break;
      case 'u':
        encodedString += '5';
        break;
      default:
        encodedString += string[i];
    }
  }
  return encodedString;
}

function iHateCodeClimate(encodedString) {
  let decodedWord = '';
  switch (encodedString) {
    case '1':
      decodedWord = 'a';
      break;
    case '2':
      decodedWord = 'e';
      break;
    case '3':
      decodedWord = 'i';
      break;
    case '4':
      decodedWord = 'o';
      break;
    case '5':
      decodedWord = 'u';
      break;
    default:
      decodedWord = encodedString;
  }
  return decodedWord;
}

function decode(string) {
  let newString = '';
  for (let i = 0; i < string.length; i += 1) {
    newString += iHateCodeClimate(string[i]);
  }
  return newString;
}

// Desafio 10
function techList(techArray, nameUser) {
  if (techArray.length === 0) {
    return 'Vazio!';
  }

  techArray.sort();
  let newTechArray = [];

  for (let i = 0; i < techArray.length; i += 1) {
    let object = {
      tech: techArray[i],
      name: nameUser,
    };
    newTechArray.push(object);
  }
  return newTechArray;
}

// Desafio 11
function verifyNumber(number, numberArray) {
  let numberRepeat = 0;
  for (let index = 0; index < numberArray.length; index += 1) {
    if (numberArray[index] === number) {
      numberRepeat += 1;
    }
  }
  return numberRepeat;
}

function checkRepeatedNumber(numberArray) {
  let numberRepeat = 0;
  for (let index = 0; index < numberArray.length; index += 1) {
    numberRepeat = verifyNumber(numberArray[index], numberArray);
    if (numberRepeat >= 3) {
      return numberRepeat;
    }
  }
  return numberRepeat;
}

function generate(numberArray) {
  let phoneNumber = '(';
  for (let index = 0; index < numberArray.length; index += 1) {
    if (index === 2) {
      phoneNumber += ') ';
    } else if (index === 7) {
      phoneNumber += '-';
    }
    phoneNumber += numberArray[index];
  }
  return phoneNumber;
}

function generatePhoneNumber(numberArray) {
  if (numberArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let numberRepeat = checkRepeatedNumber(numberArray);
  for (let index = 0; index < numberArray.length; index += 1) {
    if (numberArray[index] < 0 || numberArray[index] > 9 || numberRepeat >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return generate(numberArray);
}

// Desafio 12
function triangleCheck(side1, side2, side3) {
  if (side1 < side2 + side3 && side1 > Math.abs(side2 - side3)) {
    return true;
  } else if (side2 < side1 + side3 && side2 > Math.abs(side1 - side3)) {
    return true;
  } else if (side3 < side1 + side2 && side3 > Math.abs(side1 - side2)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(alcoholicBeverages) {
  let stringNumber = alcoholicBeverages.replace(/[^0-9]/g, '');
  let sumOfWaterGlasses = 0;
  for (let index in stringNumber) {
    if (sumOfWaterGlasses >= 0) {
      sumOfWaterGlasses += parseInt(stringNumber[index], 10);
      // text = (sumOfWaterGlasses === 1 ? ' copo de água' : ' copos de água');
    }
  }
  return sumOfWaterGlasses + (sumOfWaterGlasses === 1 ? ' copo de água' : ' copos de água');
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
