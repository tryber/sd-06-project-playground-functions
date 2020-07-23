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
  let winMatch = 3, tieMatch = 1;

  return (winMatch * wins) + (tieMatch * ties);
}

// Desafio 6
function highestCount(array) {
  let highestValue = 0, count = 0;

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
  let cat1Dist = mouse - cat1, cat2Dist = mouse - cat2;

  if (cat1Dist < cat2Dist) {
    return 'cat1';
  } else if (cat2Dist < cat1Dist) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  };
}

console.log(catAndMouse(10, 8, 3))

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
  // seu código aqui
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
