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
  return `${arr[0]}, ${arr[(arr.length - 1)]}`;
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

// Desafio 8
function fizzBuzz(arr) {
  let result = [];
  function checkNumber(n) {
    let fiveModulo = n % 5;
    let threeModulo = n % 3;
    if (threeModulo === 0 && fiveModulo === 0) {
      result.push('fizzBuzz');
    } else if (threeModulo === 0) {
      result.push('fizz');
    } else if (fiveModulo === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
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
function techList(tec, name) {
  result = [];
  let index = 0;
  function organize(tec) {
    result[index] = {tech: tec, name: name};
    index += 1;
  }
  tech.forEach(organize(tec))
  return result;
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
