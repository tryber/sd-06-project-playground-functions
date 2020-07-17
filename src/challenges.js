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
let position = 0,
    cont = 0;

function highestCount(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[position] <= array[i]) {
      position = i;
      cont += 1;
    }
  }
/*
  for (let newArray in array) {
    if (array[position] <= array[newArray]) {
      position = newArray;
      cont += 1;
    }
  }
*/
  return cont;
}
// let sum = [0, 4, 4, 4, 9, 2, 1];
// console.log(highestCount(sum));


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
