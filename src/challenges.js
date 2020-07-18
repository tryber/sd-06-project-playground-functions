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

  for (let i = 0; i < numbers.length; i++) {
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
function techList(techList, name) {
  if (techList.length === 0) {
    return 'Vazio!';
  }

  const objectList = [];
  techList.sort();

  for (let i = 0; i < techList.length; i += 1) {
    const tech = techList[i];
    objectList.push({ tech, name });
  }

  return objectList;
}

// Desafio 11
function generatePhoneNumber(possibleNumber) {
  if (possibleNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
    let invalidInput = false;

    for (let i = 0; i < possibleNumber.length; i++) {
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
  }

  let phoneNumber = `(${possibleNumber[0]}${possibleNumber[1]}) `;

  for (let i = 2; i < possibleNumber.length; i++) {
    if (i === 6) {
      phoneNumber += `${possibleNumber[i]}-`;
    } else {
      phoneNumber += possibleNumber[i];
    }
  }

  return phoneNumber;
}

function mostOccurrences(verifiedNumber, numbers) {
  let counter = 0;

  numbers.forEach((value) => (value === verifiedNumber && counter++));

  return counter;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  } else if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(order) {
  let glassesOfWater = 0;
  const glassesOfAlcoholicDrinks = order.match(/\d+/g);

  for (const glasses in glassesOfAlcoholicDrinks) {
    glassesOfWater += parseInt(glassesOfAlcoholicDrinks[glasses]);
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
