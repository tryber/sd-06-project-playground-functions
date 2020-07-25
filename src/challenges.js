// Desafio 1
function compareTrue(value1, value2) {
  let booleanResult;
  if (value1 && value2) {
    booleanResult = true;
  } else {
    booleanResult = false;
  }
  return booleanResult;
}

// Desafio 2
function calcArea(base, heigth) {
  let result;
  result = (base * heigth) / 2;
  return result;
}

// Desafio 3
function splitSentence(phrase) {
  let splitPhrase;
  splitPhrase = phrase.split(' ');
  return splitPhrase;
}

// Desafio 4
function concatName(stringArray) {
  let stringResult;
  let first = stringArray[0];
  let last = stringArray[stringArray.length - 1].concat(', ');
  stringResult = last.concat(first);
  return stringResult;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointScore = 0;
  pointScore = wins * 3 + ties * 1;
  return pointScore;
}

// Desafio 6
function highestCount(numberList) {
  let higherNumber = Math.max(numberList);
  let higherNumberCounter = 0;
  for (let i = 0; i < numberList.length; i += 1) {
    if (higherNumber === numberList[i]) {
      higherNumberCounter += 1;
    }
  }
  return higherNumberCounter;
}

/// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  let msg = 'os gatos trombam e o rato foge';
  if (dist1 < dist2) {
    msg = 'cat1';
  } else if (dist2 < dist1) {
    msg = 'cat2';
  }
  return msg;
}

// Desafio 8
function fizzBuzz(numberList) {
  let result = [];
  for (let i = 0; i < numberList.length; i += 1) {
    let n = numberList[i];
    if (n % 3 === 0 && n % 5 === 0) {
      result.push('fizzbuzz');
    } else if (n % 3 === 0) {
      result.push('fizz');
    } else if (n % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(word) {
  let vowels = { 'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5 };
  let code = [];
  for (let i = 0; i < word.length; i += 1) {
    let letter = '';
    if (string[i] in vowels) {
      letter = vowels[string[i]];
    } else
      letter = word[i];
    code.push(word);
  }
  return code.join('');
}

function decode(word) {
  let vowels = { '1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u' };
  let code = [];
  for (let i = 0; i < word.length; i += 1) {
    let letter = '';
    if (word[i] in vowels) {
      letter = vowels[word[i]];
    } else
      letter = word[i];
    code.push(letter);
  }
  return code.join('');
}

// Desafio 10
function techList(tech, name) {
  let objectList = [];
  for (let i = 0; i < tech.length; i += 1) {
    let technology = { tech: tech[i], nome: name };
    objectList.push(technology);
  }
  return objectList;
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