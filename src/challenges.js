// Desafio 1 o
function compareTrue(a, b) {
  if (a === true && b === true) {
    return (true);
  }
  return (false);
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  return (sentence.split(' '));
}

// Desafio 4
function concatName(arr) {
  return `${arr[(arr.length - 1)]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, tries) {
  return ((wins * 3) + tries)
}

// Desafio 6
function highestCount(nbrs) {
  let max = nbrs[0];
  let count = 0;
  for (let index = 0; index < nbrs.length; index += 1) {
    if (nbrs[index] > max) {
      max = nbrs[index];
      count = 1;
    } else if (nbrs[index] === max) {
      count += 1;
    }
  }
  return (count)
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mC2 = Math.abs(mouse - cat2);
  let mC1 = Math.abs(mouse - cat1);

  if (mC1 > mC2) {
    return 'cat2';
  } else if (mC2 > mC1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge'
}

function moduloResults(mod) {
  if (mod[0] === 0 && mod[1] === 0) {
    return 'fizzBuzz';
  } else if (mod[1] === 0) {
    return 'fizz';
  } else if (mod[0] === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function calcModulo(nbr) {
  let fiveModulo = nbr % 5;
  let threeModulo = nbr % 3;
  return [fiveModulo, threeModulo];
}

// Desafio 8
function fizzBuzz(arr) {
  let result = [];
  function checkNumber(n) {
    let modulos = calcModulo(n);
    result.push(moduloResults(modulos));
  }
  arr.forEach(checkNumber);
  return result;
}

// Desafio 9
function encode(toEncode) {
  let encoded = [];
  for (let index = 0; index < toEncode.length; index += 1) {
    switch (toEncode[index]) {
      case 'a':
        encoded += '1';
        break;
      case 'e':
        encoded += '2';
        break;
      case 'i':
        encoded += '3';
        break;
      case 'o':
        encoded += '4';
        break;
      case 'u':
        encoded += '5';
        break;
      default:
        encoded += toEncode[index];
    }
  }
  return encoded;
}
function decode(s) {
  s = (s.replace(/1/gi, 'a'));
  s = (s.replace(/2/gi, 'e'));
  s = (s.replace(/3/gi, 'i'));
  s = (s.replace(/4/gi, 'o'));
  s = (s.replace(/5/gi, 'u'));
  return s;
}

// Desafio 10
function techList(tec, namePassed) {
  if (tec.length === 0) {
    return 'Vazio!';
  }
  let result = [];
  let index = 0;
  tec.sort();
  function organize(tecnology) {
    result[index] = {
      tech: tecnology,
      name: namePassed,
    };
    index += 1;
  }
  tec.forEach(organize)
  return result;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let countRepeated = 0;
  let arraySize = numbers.length;
  let result = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 12)}`;
  if (arraySize !== 11) {
    return 'Array com tamanho incorreto.';
  }
  numbers.sort();
  let nextIndex = 1;
  let invalidNumbers = false;
  for (let index = 0; index < arraySize - 1; index += 1) {
    if (countRepeated > 2 || numbers[index] > 9 || numbers[index] < 0) {
      invalidNumbers = true;
      break;
    }
    if (numbers[index] === numbers[nextIndex]) {
      countRepeated += 1;
    } else {
      countRepeated = 1;
    }
    nextIndex += 1;
  }
  return invalidNumbers === true ? 'não é possível gerar um número de telefone com esses valores' : `${result.replace(/,/g, '')}`;
}

// Desafio 12
function triangleCheck(a, b, c) {
  let sides = [a, b, c];
  sides.sort((x, y) => x - y);
  if (sides[0] + sides[1] > sides[2]) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(str) {
  let count = 0;
  let regex = /\d+/;
  for (let s in str) {
    if (regex.test(str[s])) {
      count += parseInt(str[s], 10);
    }
  }
  if (count > 1) {
    return `${count} copos de água`
  }
  return `${count} copo de água`
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
