// Desafio 1
function compareTrue(termo1, termo2) {
  return termo1 && termo2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text) {
  return text.split(' ');
}

// Desafio 4
function concatName(stringArray) {
  let extractArray = (`${stringArray[stringArray.length - 1]}, ${stringArray[0]}`);
  let arrayToStr = extractArray.toString();
  return arrayToStr;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = numbers[0];
  let countHighestNumber = 0;

  for (let highIndex = 0; highIndex < numbers.length; highIndex += 1) {
    if (numbers[highIndex] > highestNumber) {
      countHighestNumber = 1;
      highestNumber = numbers[highIndex];
    } else if (numbers[highIndex] === highestNumber) {
      countHighestNumber += 1;
    }
  }
  return countHighestNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = mouse - cat1;
  let distCat2 = mouse - cat2;
  let reached = '';

  if (Math.abs(distCat1) < Math.abs(distCat2)) {
    reached = 'cat1';
  } else if (Math.abs(distCat2) < Math.abs(distCat1)) {
    reached = 'cat2';
  } else {
    reached = 'os gatos trombam e o rato foge';
  }
  return reached;
}

// Desafio 8
function fizzBuzz(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    // variables
    let isMultipleThree = (numbers[index] % 3 === 0);
    let isMultipleFive = (numbers[index] % 5 === 0);

    // verifying numbers conditions to be multiple or not and apply the correct term
    if (isMultipleThree && isMultipleFive) {
      numbers[index] = "fizzBuzz";
    } else if (isMultipleThree) {
      numbers[index] = "fizz";
    } else if (isMultipleFive) {
      numbers[index] = "buzz";
    } else {
      numbers[index] = "bug!"
    }
  }
  return numbers;
}

// Desafio 9
function encode(phraseToEncode) {
  let encodeArray = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let splitPhraseEncode = phraseToEncode.split('')

  for (let index = 0; index < splitPhraseEncode.length; index += 1) {
    for (let chave in encodeArray) {
      if (splitPhraseEncode[index] === chave) {
        splitPhraseEncode[index] = encodeArray[chave];
      }
    }
  }
  return splitPhraseEncode.join('');
}
function decode(phraseToDecode) {
  let decodeArray = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  let splitPhraseDecode = phraseToDecode.split('')

  for (let index = 0; index < splitPhraseDecode.length; index += 1) {
    for (let chave in decodeArray) {
      if (splitPhraseDecode[index] === decodeArray[chave]) {
        splitPhraseDecode[index] = chave;
      }
    }
  }
  return splitPhraseDecode.join('');
}

// Desafio 10
function techList(techNameArray, named) {
  // sort array alphabetically
  let arrayTechSort = techNameArray.sort();
  // create array
  let objectTechNameAndName = [];
  // Verifing array condition
  if (techNameArray.length === 0) {
    objectTechNameAndName = 'Vazio!';
  } else {
    // create objects and put in array
    for (let index = 0; index < arrayTechSort.length; index += 1) {
      objectTechNameAndName[index] = {
        tech: arrayTechSort[index],
        name: named,
      };
    }
  }
  return objectTechNameAndName;
}

// Desafio 11
function generatePhoneNumber(array) {
  // variables
  let formattedPhoneNumber = null;
  let ddd = `(${array[0]}${array[1]})`;
  let firstPartPhoneNumber = `${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}`;
  let secondPartPhoneNumber = `${array[7]}${array[8]}${array[9]}${array[10]}`;

  // verifying permitted length conditions to generate a phone number
  if (array.length !== 11) {
    formattedPhoneNumber = 'Array com tamanho incorreto.'
  } else {
    // compare repeated numbers within array
    for (let index = 0; index < array.length; index += 1) {
      // variable to count the number of repetitions
      let countRepeat = 0;

      for (let indexTwo = 0; indexTwo < array.length; indexTwo += 1) {
        if (array[index] === array[indexTwo]) {
          countRepeat += 1
        }
      }
      // Verifying impossible conditions to generate a phone number
      if (countRepeat >= 3 || array[index] < 0 || array[index] > 9) {
        formattedPhoneNumber = 'não é possível gerar um número de telefone com esses valores'
      }
    }
  }
  // check condition to apply phone number formatting
  if (formattedPhoneNumber === null) {
    formattedPhoneNumber = `${ddd} ${firstPartPhoneNumber}-${secondPartPhoneNumber}`;
  }

  return formattedPhoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // variable
  let comparedLines = false;

  // check conditions to form a triangle
  let compareLineA = lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC);
  let compareLineB = lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC);
  let compareLineC = lineC < (lineB + lineA) && lineC > Math.abs(lineB - lineA);

  // verifying conditions to build a triangle
  if (compareLineA && compareLineB && compareLineC) {
    comparedLines = true;
  }
  return comparedLines;
}

// Desafio 13
function hydrate(phrase) {
  // variables
  let highlightedNumbers = phrase.replace(/\D+/g, '');
  let result = 0;

  // convert numbers from string to interger in base 10. then add all numbers
  for (let index = 0; index < highlightedNumbers.length; index += 1) {
    result += parseInt(highlightedNumbers[index], 10);
  }
  // verifying conditions if they are just one or more glasses of water
  if (result === 1) {
    result += ' copo de água';
  } else {
    result += ' copos de água';
  }
  return result;
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
