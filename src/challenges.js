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
  let winsScore = wins * 3;
  let tiesScore = ties * 1;
  return winsScore + tiesScore;
}

// Desafio 6
function highestCount(numberList) {
  let higherNumber = Math.max(...numberList);
  let higherNumberCounter = 0;
  for (let i = 0; i < numberList.length; i += 1) {
    if (higherNumber === numberList[i]) {
      higherNumberCounter += 1;
    }
  }
  return higherNumberCounter;
}

// Desafio 7
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
  let messages = [];
  let result = '';
  for (let i = 0; i < numberList.length; i += 1) {
    switch (true) {
      case numberList[i] % 15 === 0:
        result = 'fizzBuzz';
        break;
      case numberList[i] % 3 === 0:
        result = 'fizz';
        break;
      case numberList[i] % 5 === 0:
        result = 'buzz';
        break;
      default:
        result = 'bug!';
        break;
    }
    messages.push(result);
  }
  return messages;
}

function convert(encodes, decodes, word) {
  let newWord = [];
  for (let i = 0; i < word.length; i += 1) {
    if (decodes.includes(word[i])) {
      let postion = decodes.indexOf(word[i]);
      newWord.push(encodes[postion]);
    } else {
      newWord.push(word[i]);
    }
  }
  return newWord.join('');
}

// Desafio 9
function encode(word) {
  return convert(['1', '2', '3', '4', '5'], ['a', 'e', 'i', 'o', 'u'], word);
}

function decode(word) {
  return convert(['a', 'e', 'i', 'o', 'u'], ['1', '2', '3', '4', '5'], word);
}

function comparador(first, last) {
  if (first.tech < last.tech) {
    return -1;
  }
  if (first.tech > last.tech) {
    return 1;
  }
  return 0;
}

// Desafio 10
function techList(tech, nameTech) {
  let objectList = [];
  for (let i = 0; i < tech.length; i += 1) {
    let technology = {
      tech: tech[i],
      name: nameTech,
    };
    objectList.push(technology);
  }
  return objectList.sort(comparador);
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

// Modulos
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
