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
    if ((numbers[index] % 3 === 0) && (numbers[index] % 5 === 0)) {
      numbers[index] = 'fizzBuzz';
    } else if (numbers[index] % 3 === 0) {
      numbers[index] = 'fizz';
    } else if (numbers[index] % 5 === 0) {
      numbers[index] = 'buzz';
    } else {
      numbers[index] = 'bug!'
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
