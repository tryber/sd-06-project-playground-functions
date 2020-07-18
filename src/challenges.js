// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  } else {
    return false;
  }
}
// console.log(compareTrue());

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
// console.log(calcArea(10, 20));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
// console.log(splitSentence('Hello world'));

// Desafio 4
function concatName(string) {
  let join = string[string.length -1] + ', ' + string[0];
  return join;
}

// Desafio 5
function footballPoints(wins, ties) {
  let sum = (wins * 3) + ties;
  return sum;
}

// Desafio 6

function highestCount(array) {
  let position = 0,
      cont = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[position] < array[i]) {
      position = i;
    }
  }

  for (let i = 0; i < array.length; i += 1) {
    if (array[position] == array[i]) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let position1 = cat1 - mouse,
      position2 = cat2 - mouse;
  if (position1 < 0) {
    position1 = -(position1);
  } 
  if (position2 < 0) {
    position2 = -(position2);
  }
  if (position1 < position2) {
    return 'cat1';
  } else if (position2 < position1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
// console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(array) {
  let teste = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 == 0 && array[i] % 5 !== 0) {
      teste[i] = 'fizz';
    } else if (array[i] % 5 == 0 && array[i] % 3 !== 0) {
      teste[i] = 'buzz';
    } else if (array[i] % 3 == 0 || array[i] % 5 == 0) {
      teste[i] = 'fizzBuzz';
    } else {
      teste[i] = 'bug!';
    }
  }
  return teste;
}
let numbers = [2, 15, 7, 9, 45];
console.log(fizzBuzz(numbers));


// Desafio 9
function encode(string) {
  let wordEnc = '';
  wordEnc = string.split('');
  for (let i = 0; i < string.length; i += 1) {
      if (string[i] === 'a') {
        wordEnc[i] = '1';
      } else if (string[i] === 'e') {
        wordEnc[i] = '2';
      } else if (string[i] === 'i') {
        wordEnc[i] = '3';
      } else if (string[i] === 'o') {
        wordEnc[i] = '4';
      } else if (string[i] === 'u') {
        wordEnc[i] = '5';
      } else {
        wordEnc[i] = string[i];
      }
  }
  return wordEnc.join('');
}
// let phraseDec = 'hi there!';
// console.log(encode(phraseDec));

function decode(string) {
  let wordDec = '';
  wordDec = string.split('');
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '1') {
      wordDec[i] = 'a';
    } else if (string[i] === '2') {
      wordDec[i] = 'e';
    } else if (string[i] === '3') {
      wordDec[i] = 'i';
    } else if (string[i] === '4') {
      wordDec[i] = 'o';
    } else if (string[i] === '5') {
      wordDec[i] = 'u';
    } else {
      wordDec[i] = string[i];
    }
  }
  return wordDec.join('');
}
// let phraseEnc = 'h3 th2r2!';
// console.log(decode(phraseEnc));


// Desafio 10
function techList() {
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
