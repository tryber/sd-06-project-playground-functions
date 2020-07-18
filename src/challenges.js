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
/*
Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:
a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
Ou seja, caso o parâmetro de encode seja "hi there!", o retorno deverá ser "h3 th2r2!".
A segunda função deverá se chamar decode e faz o contrário de encode - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode seja "h3 th2r2!", o retorno deverá ser "hi there!").
*/
function encode(string) {
  let word = '';
  for (let i = 0; i < string.length; i += 1) {
      if (string[i] === 'a') {
        word[i] = '1';
      } else if (string[i] === 'e') {
        word[i] = '2';
      } else if (string[i] === 'i') {
        word[i] = '3';
      } else if (string[i] === 'o') {
        word[i] = '4';
      } else if (string[i] === 'u') {
        word[i] = '5';
      } else {
        word += string[i];
      }
  }
  return word;
}
// let phrase = 'hi there!';
// console.log(encode(phrase));

function decode(string) {
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '1') {
      word[i] = 'a';
    } else if (string[i] === '2') {
      word[i] = 'e';
    } else if (string[i] === '3') {
      word[i] = 'i';
    } else if (string[i] === '4') {
      word[i] = 'o';
    } else if (string[i] === '5') {
      word[i] = 'u';
    } else {
      word += string[i];
    }
  }
  return word;
}
// let phrase = 'h3 th2r2!';
// console.log(decode(phrase));


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
