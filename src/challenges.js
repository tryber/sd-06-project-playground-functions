// Desafio 1
function compareTrue(firstBoolean, secondBoolean) {
  return firstBoolean && secondBoolean;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsOfWins = wins * 3;
  return pointsOfWins + ties;
}

// Desafio 6
function foundBiggestNumber(numbers) {
  let biggerNumber = -Infinity;
  for(let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > biggerNumber) {
      biggerNumber = numbers[index];
    }
  }
  return biggerNumber;
}

function highestCount(numbers) {
  let count = 0;
  let biggerNumber = foundBiggestNumber(numbers);
  for (let i = 0; i < numbers.length; i += 1) {
    if (biggerNumber === numbers[i]) {
      count += 1;
    }    
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceOfCat1 = Math.abs(mouse - cat1);
  let distanceOfCat2 = Math.abs(mouse - cat2);
  if (distanceOfCat1 < distanceOfCat2) {
    return 'cat1';
  } else if (distanceOfCat2 < distanceOfCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function analyzeNumber(numbers) {
  if (numbers % 3 === 0 && numbers % 5 === 0) {
    return 'fizzBuzz';
  } else if (numbers % 3 === 0) {
    return 'fizz';
  } else if (numbers % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}
function fizzBuzz(numbers) {
  let word = [];
  for (let index = 0; index < numbers.length; index += 1) {
    word.push(analyzeNumber(numbers[index]));
  }
  return word;
}

// Desafio 9
function encodeDecode(word) {
  let newWord = '';
  for (let index = 0; index < word.length; index += 1) {
    switch (word[index]) {
      case 'a': newWord += '1'; break;
      case 'e': newWord += '2'; break;
      case 'i': newWord += '3'; break;
      case 'o': newWord += '4'; break;
      case 'u': newWord += '5'; break;
      case '1': newWord += 'a'; break;
      case '2': newWord += 'e'; break;
      case '3': newWord += 'i'; break;
      case '4': newWord += 'o'; break;
      case '5': newWord += 'u'; break;
      default: newWord += word[index];
    }
  }
  return newWord;
}

function encode(word) {
  let code = encodeDecode(word);
  return code;
}
function decode(word) {
  let code = encodeDecode(word);
  return code;
}

// Desafio 10
function techList(tech, name) {
  tech.sort();
  let techLearnsList = [];
  let techLearn = {};
  for (let index = 0; index < tech.length; index += 1) {
    techLearn = {
      tech: tech[index],
      name: name,
    };
    techLearnsList.push(techLearn);
  }
  if (tech.length === 0) {
    return 'Vazio!';
  }
  return techLearnsList;
}

// Desafio 11
function verifyCounterRepeatedNumber(numbers) {
  let object = {};
  let repeatedNumber = 0;
  numbers.forEach((element) => {
    if (!object[element]) {
      object[element] = 0;
    }
    object[element] += 1;
  })
  for (let count in object) {
    if (object[count] > 2) {
      repeatedNumber = object[count];
    }
  }
  return repeatedNumber;
}

function generateCompletePhoneNumber(numbers) {
  let phoneNumber = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    phoneNumber = `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
  }
  return phoneNumber;
}

function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let counterRepeatedNumber = verifyCounterRepeatedNumber(numbers);
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9 || counterRepeatedNumber > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return generateCompletePhoneNumber(numbers);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let testLineC = lineB + lineA;
  let testLineB = lineA + lineC;
  let testLineA = lineB + lineC;
  let differenceLineC = Math.abs(lineA - lineB);
  let differenceLineB = Math.abs(lineA - lineC);
  let differenceLineA = Math.abs(lineB - lineC);
  if (testLineC > lineC && testLineA > lineA && testLineB > lineB) {
    return true;
  }
  if (differenceLineC < lineC && differenceLineA < lineA && differenceLineB < lineB) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(alcoolDrink) {
  let resultNumbers = alcoolDrink.match(/\d/g);
  let sum = 0;
  for (let index = 0; index < resultNumbers.length; index += 1) {
    sum += Number(resultNumbers[index]);
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
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
