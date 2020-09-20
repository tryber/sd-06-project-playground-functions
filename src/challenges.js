// Desafio 1
function compareTrue(boolean1, boolean2) {
  return boolean1 && boolean2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let wordsSentence = sentence.split(' ');
  return wordsSentence;
}

// Desafio 4
function concatName(arrayString) {
  let newString = '';
  let comma = ', ';

  newString += arrayString[arrayString.length - 1];
  newString += comma;
  newString += arrayString[0];

  return newString;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let highNumber = numbers[0];
  let countHighNumber = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === highNumber) {
      countHighNumber += 1;
    }
    if (highNumber < numbers[i]) {
      highNumber = numbers[i];
      countHighNumber = 1;
    }
  }

  return countHighNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = mouse - cat1;
  let distCat2 = mouse - cat2;
  let answer = '';

  if (distCat1 ** 2 === distCat2 ** 2) {
    answer = 'os gatos trombam e o rato foge';
  } else if ((distCat1 ** 2) > (distCat2 ** 2)) {
    answer = 'cat2';
  } else {
    answer = 'cat1';
  }

  return answer;
}

// Desafio 8
function analyzeNumber(number) {
  if (number % 5 === 0 && number % 3 === 0) {
    return 'fizzBuzz';
  } else if (number % 3 === 0) {
    return 'fizz';
  } else if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray.push(analyzeNumber(array[i]));
  }
  return newArray;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(techArray, userName) {
  if (techArray.length === 0) {
    return 'Vazio!';
  }

  let techInfo = [];

  techArray.sort().forEach((technology) => {
    techInfo.push({ tech: technology, name: userName });
  });

  return techInfo;
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto';
  }

  let count = {};

  for (let i = 0; i < array.length; i += 1) {
    count[array[i]] = (count[array[i]] || 0) + 1;

    if (count[array[i]] > 2 || array[i] < 0 || array[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  const phone = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;

  return phone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const sumABC = [lineA + lineB, lineA + lineC, lineB + lineC];

  if (lineA < sumABC[2] && lineB < sumABC[1] && lineC < sumABC[0]) {
    return true;
  }

  return false;
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
};
