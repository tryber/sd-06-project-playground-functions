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

  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
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
function techList(arrayOfTechs, name) {
  let sortedTechsArray = arrayOfTechs;
  let arrayOfObjects = [];

  for (let rightIndex = 1; rightIndex < sortedTechsArray.length; rightIndex += 1) {
    for (let leftIndex = 0; leftIndex < rightIndex; leftIndex += 1) {
      if (sortedTechsArray[leftIndex] > sortedTechsArray[rightIndex]) {
        let aux = sortedTechsArray[leftIndex];

        sortedTechsArray[leftIndex] = sortedTechsArray[rightIndex];
        sortedTechsArray[rightIndex] = aux;
      }
    }
  }

  for (let tech in arrayOfTechs) {
    let person = {};

    person.tech = arrayOfTechs[tech];
    person.name = name;

    arrayOfObjects.push(person);
  }

  if (arrayOfObjects.length === 0) {
    return 'Vazio!';
  }

  return arrayOfObjects;
}

// Desafio 11
function generatePhoneNumber(phoneArray) {
  if (phoneArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  function repeatThreeOrMore(arrayOfNumbers) {
    let counter = 0;

    for (let i = 0; i < arrayOfNumbers.length; i += 1) {
      for (let j = 0; j < arrayOfNumbers.length; j += 1) {
        if (arrayOfNumbers[i] === arrayOfNumbers[j]) {
          counter += 1;
        }
      }

      if (counter >= 3) {
        return true;
      } else {
        counter = 0;
      }
    }

    return false;
  }

  for (let number in phoneArray) {
    if (phoneArray[number] < 0 || phoneArray[number] > 9 || repeatThreeOrMore(phoneArray)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let ddd = '';
  let firstFive = '';
  let lastFive = '';

  for (let i = 0; i < phoneArray.length; i += 1) {
    if (i < 2) {
      ddd += phoneArray[i];
    } else if (i < 7) {
      firstFive += phoneArray[i];
    } else {
      lastFive += phoneArray[i];
    }
  }

  return '(' + ddd + ') ' + firstFive + '-' + lastFive;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  
  function compareLines(l1, l2, l3) {
    if (l1 < (l2 + l3) && l1 > Math.abs(l2 - l3)) {
      return true;
    }
  }

  if (compareLines(lineA, lineB, lineC) && compareLines(lineB, lineA, lineC) && compareLines(lineC, lineA, lineB)) {
    return true;
  }

  return false;
}

// Desafio
function hydrate(stringInput) {
  let stringCopy = stringInput;
  let numberInString = /\d+/g;
  let matches = stringCopy.match(numberInString);
  let numberOfGlasses = 0;

  for (let index in matches) {
    numberOfGlasses += Number(matches[index]);
  }

  if (numberOfGlasses === 1) {
    return numberOfGlasses + ' copo de água';
  } 

  return numberOfGlasses + ' copos de água'; 
}

console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));

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
