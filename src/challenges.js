// Desafio 1
function compareTrue(valueOne, valueTwo) {
  if (valueOne && valueTwo) {
    return true;
  } else {
    return false;
  };
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
    if (string[i] != ' ') {
      arrayValue = arrayValue + string[i];
    } else {
      newArray.push(arrayValue);
      arrayValue = '';
    };
  };
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
    };
  };

  for (index in array) {
    if (array[index] === highestValue) {
      count += 1;
    };
  };

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
  } else {
    return 'os gatos trombam e o rato foge';
  };
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
    };
  };
  return newArray
}

// Desafio 9
function encode(stringEncode) {
  let newString = '';

  for (index in stringEncode) {
    switch (stringEncode[index]) {
      case 'a':
        newString = newString + '1';
        break;
      case 'e':
        newString = newString + '2';
        break;
      case 'i':
        newString = newString + '3';
        break;
      case 'o':
        newString = newString + '4';
        break;
      case 'u':
        newString = newString + '5';
        break;
      default:
        newString = newString + stringEncode[index];
    };
  };
  return newString
}

function decode(stringDecode) {
  let newString = '';

  for (index in stringDecode) {
    switch (stringDecode[index]) {
      case '1':
        newString = newString + 'a';
        break;
      case '2':
        newString = newString + 'e';
        break;
      case '3':
        newString = newString + 'i';
        break;
      case '4':
        newString = newString + 'o';
        break;
      case '5':
        newString = newString + 'u';
        break;
      default:
        newString = newString + stringDecode[index];
    };
  };
  return newString
}

// Desafio 10
function techList(array, name) {
  let techList = [];
  let orderArray = array.sort()

  if (orderArray != "") {
    for (value in orderArray) {
      techList.push({
        tech: orderArray[value],
        nome: name
      });
    };
  } else {
    return "Vazio!";
  };

  return techList;
}

// Desafio 11
function generatePhoneNumber(arrayOfNumbers) {
  let telephoneNumber = '';
  let count = 0;

  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (arrayOfNumbers[i] === arrayOfNumbers[j])
        count += 1;
    }

    if (count >= 3 || arrayOfNumbers[i] < 0 || arrayOfNumbers[i] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    } else if (arrayOfNumbers.length != 11) {
      return "Array com tamanho incorreto.";
    } else {
      telephoneNumber = '(' + arrayOfNumbers[0] + arrayOfNumbers[1] + ')' + " " +
        arrayOfNumbers[2] + arrayOfNumbers[3] + arrayOfNumbers[4] + arrayOfNumbers[5]
        + arrayOfNumbers[6] + '-' + arrayOfNumbers[7] + arrayOfNumbers[8] +
        arrayOfNumbers[9] + arrayOfNumbers[10];
    }

  }

  return telephoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)
    || lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)
    || lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    return true;
  } else {
    return false;
  };
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
  } else {
    return `${sumNumbers} copos de água`;
  }

  return sumNumbers;
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
