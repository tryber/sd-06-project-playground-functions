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
  a: '1',
  e: '2',
  i: '3',
  o: '4',
  u: '5',
}

function encode(string) {
  let answer = '';
  let check = false;

  for (let i = 0; i < string.length; i += 1) {
    for (let key in code) {
      if (string[i] === key) {
        answer += code[key];
        check = true;
        break;
      }
    }
    if (check === false) {
      answer += string[i];
    }
    check = false;
  }
  return answer;
}

function decode(string) {
  let answer = '';
  let check = false;

  for (let i = 0; i < string.length; i += 1) {
    for (let key in code) {
      if (string[i] === code[key]) {
        answer += key;
        check = true;
        break;
      }
    }
    if (check === false) {
      answer += string[i];
    }
    check = false;
  }
  return answer;
}

// Desafio 10
function techList(array, nome) {
  let answer = [];

  array = array.sort();

  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < array.length; i += 1) {
    answer.push({ name: nome, tech: array[i], });
  }
  return answer;
}

// Desafio 11
function condicional(array) {
  let count = 0;
  let check = false;

  for (let i in array) {
    for (let j in array) {
      if (array[i] === array[j]) {
        count += 1;
      }
      if (array[i] < 0 || array[i] > 9) {
        check = true;
      }
    }
    if (count >= 3) {
      check = true;
    } else {
      count = 0;
    }
  }
  return check;
}

function generatePhoneNumber(array) {
  let phoneNumber = "";

    if (array.length !== 11) {
      return 'Array com tamanho incorreto.';
    } else if (condicional(array) === true) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let i = 0; i < array.length; i += 1) {
      phoneNumber += array[i];
    }

  let newPhoneNumber = '(' + phoneNumber.substring(0, 2) + ') ' + phoneNumber.substring(2, 7) + '-' + phoneNumber.substr(7, 11);

  return newPhoneNumber;
}

// Desafio 12
function triangleCheck() {
  if (lineA > Math.abs(lineB - lineC) && lineA > lineB + lineC || lineB > Math.abs(lineA - lineC) && lineB > lineA + lineC || lineC > Math.abs(lineB - lineA) && lineC > lineB + lineA) {
    return false;
  }
  return true;
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
