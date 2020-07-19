// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let wordsSentence = sentence.split(' ');
  return wordsSentence;
}

// Desafio 4
function concatName(arrayString) {
  // seu código aqui
  let first = arrayString[arrayString.length - 1];
  let last = arrayString[0];
  let comma = ', ';
  let word = first + comma + last;
  return word;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  let highest = Math.max.apply(null, arrayNumbers);
  let count = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === highest) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  }
  return 'cat1';
}

// Desafio 8
function fizz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
  } else if (number % 3 === 0) {
    return 'fizz';
  } else if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}
function fizzBuzz(arrayNumbers) {
  // seu código aqui
  let fb = [];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    fb.push(fizz(arrayNumbers[index]));
  }
  return fb;
}

// Desafio 9
function encDec(phrase) {
  let newPhrase = '';
  for (let index = 0; index < phrase.length; index += 1) {
    switch (phrase[index]) {
      case 'a': newPhrase += '1'; break;
      case 'e': newPhrase += '2'; break;
      case 'i': newPhrase += '3'; break;
      case 'o': newPhrase += '4'; break;
      case 'u': newPhrase += '5'; break;
      case '1': newPhrase += 'a'; break;
      case '2': newPhrase += 'e'; break;
      case '3': newPhrase += 'i'; break;
      case '4': newPhrase += 'o'; break;
      case '5': newPhrase += 'u'; break;
      default: newPhrase += phrase[index];
    }
  }
  return newPhrase;
}
function encode(sentence) {
  // seu código aqui
  let newSentence = encDec(sentence);
  return newSentence;
}
function decode(expression) {
  // seu código aqui de novo
  return encDec(expression);
}

// Desafio 10
function techList(arrayTech) {
  // seu código aqui
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  arrayTech.sort();
  let objectTech = [];
  for (let index = 0; index < arrayTech.length; index += 1) {
    objectTech.push({
      tech: arrayTech[index],
      name: 'Lucas',
    });
  }
  return objectTech;
}

// Desafio 11
// console.log(generatePhoneNumber([0, 2, 4, 3, 5, 5, 6, 8, 9, 2, 1]))
function checkRepeatedNumber(arrayPhone) {
  let nRepeat;
  for (let index = 0; index < arrayPhone.length; index += 1) {
    nRepeat = 0;
    for (let index2 = 0; index2 < arrayPhone.length; index2 += 1) {
      if (arrayPhone[index] === arrayPhone[index2]) {
        nRepeat += 1;
      } else if (nRepeat >= 3) {
        return nRepeat;
      }
    }
  }
  return nRepeat;
}
function generate(arrayPhone) {
  let numberPhone = '(';
  for (let index = 0; index < arrayPhone.length; index += 1) {
    if (index === 2) {
      numberPhone += ') ';
    } else if (index === 7) {
      numberPhone += '-';
    }
    numberPhone += arrayPhone[index];
  }
  return numberPhone;
}
function generatePhoneNumber(arrayPhone) {
  // seu código aqui
  if (arrayPhone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let nRepeat = checkRepeatedNumber(arrayPhone);
  for (let index = 0; index < arrayPhone.length; index += 1) {
    if (arrayPhone[index] < 0 || arrayPhone[index] > 9 || nRepeat >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return generate(arrayPhone);
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
