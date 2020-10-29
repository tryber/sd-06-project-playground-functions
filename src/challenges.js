// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  let arrFirst = arr[0];
  let arrLast = arr[arr.length - 1];
  return arrLast.concat(', ', arrFirst);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + ties;
}

// Desafio 6
function highestCount(arr) {
  let count = 0;
  let highestNumber = arr[0];

  for (let index = 0; index < arr.length; index += 1) {
    if (highestNumber < arr[index]) {
      highestNumber = arr[index];
      count = 1;
    } else if (highestNumber === arr[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1m = (cat1 - mouse) < 0 ? (mouse - cat1) : (cat1 - mouse);
  let dist2m = (cat2 - mouse) < 0 ? (mouse - cat2) : (cat2 - mouse);

  if (dist1m > dist2m) {
    return 'cat2';
  }
  if (dist1m < dist2m) {
    return 'cat1';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    switch (true) {
      case (arr[i] % 3 === 0 && arr[i] % 5 === 0):
        arr[i] = 'fizzBuzz';
        break;
      case (arr[i] % 3 === 0):
        arr[i] = 'fizz';
        break;
      case (arr[i] % 5 === 0):
        arr[i] = 'buzz';
        break;
      default:
        arr[i] = 'bug!';
        break;
    }
  }

  return arr;
}

// Desafio 9
function encode(str) {
  let lettersStr = str.split('');
  for (let i = 0; i < lettersStr.length; i += 1) {
    switch (lettersStr[i]) {
      case ('a'):
        lettersStr[i] = '1';
        break;
      case ('e'):
        lettersStr[i] = '2';
        break;
      case ('i'):
        lettersStr[i] = '3';
        break;
      case ('o'):
        lettersStr[i] = '4';
        break;
      case ('u'):
        lettersStr[i] = '5';
        break;
      default:
        break;
    }
  }
  return lettersStr.join('');
}

function compareNumbers(arr, num, letter) {
  if (arr === num) {
    return letter;
  }
  return arr;
}

function decode(str) {
  let lettersDecode = str.split('');
  for (let index = 0; index < lettersDecode.length; index += 1) {
    lettersDecode[index] = compareNumbers(lettersDecode[index], '1', 'a');
    lettersDecode[index] = compareNumbers(lettersDecode[index], '2', 'e');
    lettersDecode[index] = compareNumbers(lettersDecode[index], '3', 'i');
    lettersDecode[index] = compareNumbers(lettersDecode[index], '4', 'o');
    lettersDecode[index] = compareNumbers(lettersDecode[index], '5', 'u');
  }
  return lettersDecode.join('');
}

// let str = 'hi there!';
// str = encode(str);
// console.log(str);
// str = decode(str);
// console.log(str);

// Desafio 10
function techList(arr, name) {
  if (arr.length === 0) {
    return 'Vazio!';
  }

  let techArr = [];

  arr = arr.sort();

  for (let i = 0; i < arr.length; i += 1) {
    techArr.push({ tech: arr[i], name });
  }
  return techArr;
}

// Desafio 11
function checkConditions(arr) {
  let count = 0;
  let arrCount = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0]];


  for (let index = 0; index < arr.length; index += 1) {
    if (!arrCount[arr[index]]) {
      return false;
    }
    count = arrCount[arr[index]][1];
    arrCount[arr[index]][1] = count + 1;

    if (arrCount[arr[index]][1] >= 3) {
      return false;
    }
  }
  return true;
}

function generatePhoneNumber(arr) {
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  if (!checkConditions(arr)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${arr.slice(0, 2).join('')}) ${arr.slice(2, 7).join('')}-${arr.slice(7, 11).join('')}`;
}

console.log(generatePhoneNumber([1, 1, 3, 2, 2, 9, 3, 9, 6, 8, 7]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let diffAB = Math.abs(lineA - lineB);
  let diffAC = Math.abs(lineA - lineC);
  let diffBC = Math.abs(lineB - lineC);
  let check = 0;

  if (diffAB < lineA && lineA < lineB + lineC) {
    check += 1;
  }
  if (diffAC < lineB && lineB < lineA + lineC) {
    check += 1;
  }
  if (diffBC < lineC && lineC < lineB + lineA) {
    check += 1;
  }

  return check === 3;
}

// Desafio 13
function hydrate(str) {
  let numbers = str.match(/\d+/g).map(Number);

  let sum = numbers.reduce((accumulator, element) => (accumulator + element));

  return sum > 1 ? `${sum} copos de água` : `${sum} copo de água`;
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
};
