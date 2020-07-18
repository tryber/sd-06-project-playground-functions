// Desafio 1
function compareTrue(firstBoolean, secondBoolean) {
  return firstBoolean && secondBoolean;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let fractionedSentence = [];
  let splitWord = '';

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === ' ') {
      fractionedSentence.push(splitWord);
      splitWord = '';
    } else {
      splitWord += string[i];
    }
  }

  fractionedSentence.push(splitWord);

  return fractionedSentence;
}

// Desafio 4
function concatName(strings) {
  return `${strings[strings.length - 1]}, ${strings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let max = Number.MIN_SAFE_INTEGER;
  let occurrences = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  for (let i = 0; i < numbers.length; i += 1) {
    if (max === numbers[i]) {
      occurrences += 1;
    }
  }

  return occurrences;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }

  return 'cat2';
}

// Desafio 8
function fizzBuzz(fizzBuzzNumbers) {
  const fizzBuzzArray = [];

  for (let i = 0; i < fizzBuzzNumbers.length; i += 1) {
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

// Desafio 9
function encode(decodedString) {
  let encoded = '';

  for (let i = 0; i < decodedString.length; i += 1) {
    switch (decodedString[i]) {
      case 'a':
        encoded += '1';
        break;
      case 'e':
        encoded += '2';
        break;
      case 'i':
        encoded += '3';
        break;
      case 'o':
        encoded += '4';
        break;
      case 'u':
        encoded += '5';
        break;
      default:
        encoded += decodedString[i];
    }
  }

  return encoded;
}

function decode(encodedString) {
  let decoded = '';

  for (let i = 0; i < encodedString.length; i += 1) {
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
function techList(technologyList, name) {
  if (technologyList.length === 0) {
    return 'Vazio!';
  }

  const objectList = [];
  technologyList.sort();

  for (let i = 0; i < technologyList.length; i += 1) {
    const tech = technologyList[i];
    objectList.push({ tech, name });
  }

  return objectList;
}

// Desafio 11
function mostOccurrences(verifiedNumber, numbers) {
  let counter = 0;

  numbers.forEach((value) => {
    if (value === verifiedNumber) counter += 1;
  })

  return counter;
}

function generatePhoneNumber(possibleNumber) {
  if (possibleNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  let invalidInput = false;

  for (let i = 0; i < possibleNumber.length; i += 1) {
    if (possibleNumber[i] < 0 || possibleNumber[i] > 9) {
      invalidInput = true;
      break;
    }

    if (mostOccurrences(possibleNumber[i], possibleNumber) >= 3) {
      invalidInput = true;
      break;
    }
  }

  if (invalidInput) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  let phoneNumber = `(${possibleNumber[0]}${possibleNumber[1]}) `;

  for (let i = 2; i < possibleNumber.length; i += 1) {
    if (i === 6) {
      phoneNumber += `${possibleNumber[i]}-`;
    } else {
      phoneNumber += possibleNumber[i];
    }
  }

  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  } else if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    return true;
  }

  return false;
}

// Desafio 13
function hydrate(order) {
  let glassesOfWater = 0;
  const glassesOfAlcoholicDrinks = order.match(/\d+/g);

  for (const glasses in glassesOfAlcoholicDrinks) {
    if ({}.hasOwnProperty.call(glassesOfAlcoholicDrinks, glasses)) {
      glassesOfWater += parseInt(glassesOfAlcoholicDrinks[glasses], 10);
    }
  }

  return glassesOfWater <= 1 ? `${glassesOfWater} copo de água` : `${glassesOfWater} copos de água`;
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
