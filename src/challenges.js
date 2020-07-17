// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(word) {
  let array = [];
  let phrase = '';
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] !== ' ') {
      phrase += word[i];
    }
    if (word[i] === ' ' || i === word.length - 1) {
      array.push(phrase);
      phrase = '';
    }
  }
  return array;
}

// Desafio 4
function concatName(array) {
  let last = array[array.length - 1];
  let first = array[0];
  let lastFirst = last + ', ' + first;
  return lastFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 3 * wins + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let counterMax = 0;
  for (let i = 0; i < array.length; i += 1) {
    let counter = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        counter += 1;
      }
    }
    if (counter > counterMax) {
      counterMax = counter;
    }
  }
  return counterMax - 1;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = cat1 - mouse;
  let distance2 = cat2 - mouse;
  if (distance1 === distance2) {
    return "os gatos trombam e o rato foge"
  } else if (distance1 < distance2) {
    return 'cat1';
  }
  return 'cat2';
}
console.log(catAndMouse(10, 35, 35));

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

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
