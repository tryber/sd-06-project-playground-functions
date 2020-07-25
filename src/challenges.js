// Desafio 1
function compareTrue(valueOne, valueTwo) {
  if (valueOne && valueTwo) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let newArray = [];
  let arrayValue = '';

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== ' ') {
      arrayValue += string[i];
    } else {
      newArray.push(arrayValue);
      arrayValue = '';
    }
  }
  newArray.push(arrayValue);
  return newArray;
}

// Desafio 4
function concatName(arrayValue) {
  return arrayValue[arrayValue.length - 1] + ', ' + arrayValue[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let winMatch = 3;
  let tieMatch = 1;

  return (winMatch * wins) + (tieMatch * ties);
}

// Desafio 6
function highestCount(array) {
  let highestValue = 0;
  let count = 0;

  for (value in array) {
    if (array[value] > highestValue) {
      highestValue = array[value];
    }
  }

  for (index in array) {
    if (array[index] === highestValue) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Dist = Math.abs(cat1 - mouse);
  let cat2Dist = Math.abs(cat2 - mouse);

  if (cat1Dist < cat2Dist) {
    return 'cat1';
  } else if (cat2Dist < cat1Dist) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 != 0) {
      newArray.push('fizz');
    } else if (array[i] % 3 != 0 && array[i] % 5 === 0) {
      newArray.push('buzz');
    } else if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(stringEncode) {
  let encodeString = '';

  for (let index = 0; index < stringEncode.length; index += 1) {
    switch (stringEncode[index]) {
      case 'a':
        encodeString += '1';
        break;
      case 'e':
        encodeString += '2';
        break;
      case 'i':
        encodeString += '3';
        break;
      case 'o':
        encodeString += '4';
        break;
      case 'u':
        encodeString += '5';
        break;
      default:
        encodeString += stringEncode[index];
    }
  }
  return encodeString;
}

function decode(stringDecode) {
  let decodeString = '';

  for (let index = 0; index < stringDecode.length; index += 1) {
    switch (stringDecode[index]) {
      case '1':
        decodeString += 'a';
        break;
      case '2':
        decodeString += 'e';
        break;
      case '3':
        decodeString += 'i';
        break;
      case '4':
        decodeString += 'o';
        break;
      case '5':
        decodeString += 'u';
        break;
      default:
        decodeString += stringDecode[index];
    }
  }
  return decodeString;
}

// Desafio 10
function techList(array, name) {
  let techList = [];
  let orderArray = array.sort();

  if (orderArray != '') {
    for (value in orderArray) {
      techList.push({
        'tech': orderArray[value],
        'name': name
      });
    }
  } else {
    return 'Vazio!';
  }

  return techList;
}

// Desafio 11
function generatePhoneNumber(arrayOfNumbers) {
  let telephoneNumber = '';
  let count = 0;

  if (arrayOfNumbers.length != 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (arrayOfNumbers[i] === arrayOfNumbers[j])
        count += 1;
    }

    if (count > 3 || arrayOfNumbers[i] < 0 || arrayOfNumbers[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else {
      telephoneNumber = '(' + arrayOfNumbers[0] + arrayOfNumbers[1] + ')' + ' ' +
        arrayOfNumbers[2] + arrayOfNumbers[3] + arrayOfNumbers[4] + arrayOfNumbers[5]
        + arrayOfNumbers[6] + '-' + arrayOfNumbers[7] + arrayOfNumbers[8] +
        arrayOfNumbers[9] + arrayOfNumbers[10];
    }
  }

  return telephoneNumber;
}

console.log(generatePhoneNumber([]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumAB = lineA + lineB;
  let sumAC = lineA + lineC;
  let sumBC = lineB + lineC;
  let distAB = Math.abs(lineA - lineB);
  let distAC = Math.abs(lineA - lineC);
  let distBC = Math.abs(lineB - lineC);

  if (lineA < sumBC && lineA > distBC
    || lineB < sumAC && lineB > distAC
    || lineC < sumAB && lineC > distAB) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let findInteger = /\d+/g;
  let arrayOfNumbers = string.match(findInteger);
  let sumNumbers = 0;

  for (value in arrayOfNumbers) {
    sumNumbers += parseInt(arrayOfNumbers[value]);
  }

  if (sumNumbers === 1) {
    return `${sumNumbers} copo de água`;
  }

  return `${sumNumbers} copos de água`;
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
