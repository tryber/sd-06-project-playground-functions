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
function concatName(array1) {
  return `${array1[array1.length - 1]}, ${array1[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array2) {
  let maior = array2[0];
  let count = 0;

  for (let i = 0; i < array2.length; i += 1) {
    if (array2[i] === maior) {
      count += 1;
    }

    if (array2[i] > maior) {
      maior = array2[i];
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

  array.forEach(function (element) {
    string.push(fizz[(element ** 4) % 15]);
  });

  return string;
}

function replaceString(string, change) {
  const vowels = { a: 1, e: 2, i: 3, o: 4, u: 5 };

  for (const [key, value] of Object.entries(vowels)) {
    if (change) {
      string = string.split(key).join(value);
    } else {
      string = string.split(value).join(key);
    }
  }

  return string;
}

// Desafio 9
function encode(phrase) {
  return replaceString(phrase, true);
}

function decode(phrase) {
  return replaceString(phrase, false);
}

// Desafio 10
function techList(array, string) {
  if (array.length === 0) {
    return 'Vazio!';
  }

  let technology = [];

  array.sort().forEach((item) => {
    technology.push({ tech: item, name: string });
  });

  return technology;
}

// Desafio 11
function generatePhoneNumber(number) {
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  let count = {};

  for (let i = 0; i < number.length; i += 1) {
    count[number[i]] = (count[number[i]] || 0) + 1;

    if (count[number[i]] > 2 || number[i] < 0 || number[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  number.splice(0, 0, '(');
  number.splice(3, 0, ')');
  number.splice(9, 0, '-');
  number.splice(4, 0, ' ');

  return number.join('');
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
function hydrate(string) {
  let number = (string.match(/\d+/g) || []).map(n => parseInt(n, 10));
  number = number.reduce((a, b) => a + b, 0);

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
