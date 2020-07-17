// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
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
function splitSentence(phrase) {
  let newPhrase = phrase.split(' ');

  return newPhrase;
}

// Desafio 4
function concatName(array) {
  let newArray = array[array.length - 1].concat(', ', array[0]);

  return newArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (3 * wins) + ties;

  return points;
}

// Desafio 6
function highestCount(array) {
  let maior = 0;
  let counter = 0;

  for (let x = 0; x < array.length; x += 1) {
    if (array[x] > maior) {
      maior = array[x];
    }
  }

  for (let x = 0; x < array.length; x += 1) {
    if (array[x] === maior) {
      counter += 1;
    }
  }

  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = 0;
  let dist2 = 0;

  if (cat1 > mouse) {
    dist1 = cat1 - mouse;
  } else {
    dist1 = mouse - cat1;
  }

  if (cat2 > mouse) {
    dist2 = cat2 - mouse;
  } else {
    dist2 = mouse - cat2;
  }

  if (dist1 > dist2) {
    return 'cat2';
  } else if (dist1 < dist2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let answer = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      answer.push('fizz');
    } else if (array[i] % 3 !== 0 && array[i] % 5 === 0) {
      answer.push('buzz');
    } else if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      answer.push('fizzBuzz');
    } else {
      answer.push('bug!');
    }
  }
  return answer;
}

// Desafio 9

let code = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
}

function encode(string) {
  let answer = [];
  
  for (let i = 0; i < string.length; i += 1) {
    for (key in code) {
      if (string[i] === key) {
        answer.push(code[key]);
      } else {
        answer.push(string[i]);
      }
    }
  }
  return answer;
}

function decode(string) {
  let answer = [];
  
  for (let i = 0; i < string.length; i += 1) {
    for (key in code) {
      if (string[i] === code[key]) {
        answer.push(key);
      } else {
        answer.push(string[i]);
      }
    }
  }
  return answer;
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
