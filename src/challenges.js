// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 31
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(name) {
  return `${name[name.length - 1]}, ${name[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numberArray) {
  let maior = numberArray[0];
  let count = 0;

  for (let i = 0; i < numberArray.length; i += 1) {
    if (numberArray[i] === maior) {
      count += 1;
    }

    if (numberArray[i] > maior) {
      maior = numberArray[i];
      count = 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance = [Math.abs(cat1 - mouse), Math.abs(cat2 - mouse)];

  if (distance[0] > distance[1]) {
    return 'cat2';
  } else if (distance[1] > distance[0]) {
    return 'cat1';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let string = [];
  const fizz = {
    1: 'bug!',
    0: 'fizzBuzz',
    6: 'fizz',
    10: 'buzz',
  };

  array.forEach((element) => {
    let n = (element ** 4) % 15;
    string.push(fizz[n]);
  });

  return string;
}

function encodeAndDecode(encodeDecode, change) {
  const vowels = { a: 1, e: 2, i: 3, o: 4, u: 5 };

  for (const [key, value] of Object.entries(vowels)) {
    if (change) {
      encodeDecode = encodeDecode.split(key).join(value);
    } else {
      encodeDecode = encodeDecode.split(value).join(key);
    }
  }

  return encodeDecode;
}

// Desafio 9
function encode(phraseToEncode) {
  return encodeAndDecode(phraseToEncode, true);
}

function decode(phraseToDecode) {
  return encodeAndDecode(phraseToDecode, false);
}

// Desafio 10
function techList(techName, pirataName) {
  if (techName.length === 0) {
    return 'Vazio!';
  }

  let technology = [];

  techName.sort().forEach((element) => {
    technology.push({ tech: element, name: pirataName });
  });

  return technology;
}

function insertChars(phoneNumber) {
  phoneNumber.splice(0, 0, '(');
  phoneNumber.splice(3, 0, ')');
  phoneNumber.splice(9, 0, '-');
  phoneNumber.splice(4, 0, ' ');

  return phoneNumber;
}

// Desafio 11
function generatePhoneNumber(phone) {
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  let count = {};

  for (let i = 0; i < phone.length; i += 1) {
    count[phone[i]] = (count[phone[i]] || 0) + 1;

    if (count[phone[i]] > 2 || phone[i] < 0 || phone[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  return insertChars(phone).join('');
}

// Desafio 12
function triangleCheck(sideA, sideB, sideC) {
  let sumABC = [sideA + sideB, sideA + sideC, sideB + sideC];

  if (sideA < sumABC[2] && sideB < sumABC[1] && sideC < sumABC[0]) {
    return true;
  }

  return false;
}

// Desafio 13
function hydrate(happyHour) {
  let number = 0;

  for (let i = 0; i < happyHour.length; i += 1) {
    if (!isNaN(parseInt(happyHour[i], 10))) {
      number += Number(happyHour[i]);
    }
  }

  return number === 1 ? `${number} copo de água` :
    `${number} copos de água`;
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
