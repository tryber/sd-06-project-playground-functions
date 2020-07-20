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
function findBiggestNumber(numbers) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

function highestCount(numbers) {
  let occurrences = 0;
  let max = findBiggestNumber(numbers);

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
function isDivisibleByThree(number) {
  return number % 3 === 0;
}

function isDivisibleByFive(number) {
  return number % 5 === 0;
}

function fizzBuzzEvaluator(number) {
  if (isDivisibleByThree(number) && isDivisibleByFive(number)) {
    return 'fizzBuzz';
  } else if (isDivisibleByFive(number) && !isDivisibleByThree(number)) {
    return 'buzz';
  } else if (isDivisibleByThree(number) && !isDivisibleByFive(number)) {
    return 'fizz';
  }

  return 'bug!';
}

function fizzBuzz(numbers) {
  const fizzBuzzArray = [];

  for (let i = 0; i < numbers.length; i += 1) {
    fizzBuzzArray.push(fizzBuzzEvaluator(numbers[i]));
  }

  return fizzBuzzArray;
}

// Desafio 9
function encodeDecodeCore(string) {
  let processedString = '';

  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
      case 'a': processedString += '1'; break;
      case 'e': processedString += '2'; break;
      case 'i': processedString += '3'; break;
      case 'o': processedString += '4'; break;
      case 'u': processedString += '5'; break;
      case '1': processedString += 'a'; break;
      case '2': processedString += 'e'; break;
      case '3': processedString += 'i'; break;
      case '4': processedString += 'o'; break;
      case '5': processedString += 'u'; break;
      default: processedString += string[i];
    }
  }

  return processedString;
}

function encode(decodedString) {
  return encodeDecodeCore(decodedString);
}

function decode(encodedString) {
  return encodeDecodeCore(encodedString);
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
  });

  return counter;
}

function isNumberInRange(number) {
  return number < 0 || number > 9;
}

function buildPhoneNumber(possibleNumber) {
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

function generatePhoneNumber(possibleNumber) {
  if (possibleNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i = 0; i < possibleNumber.length; i += 1) {
    if (isNumberInRange(possibleNumber[i])
          || mostOccurrences(possibleNumber[i], possibleNumber) >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  return buildPhoneNumber(possibleNumber);
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
};
