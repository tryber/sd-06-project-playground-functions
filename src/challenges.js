// Desafio 1
function compareTrue(valor1, valor2) {
  let result = false;
  if (valor1 === true && valor2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
console.log(compareTrue(false, false));


// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2
  return area
}
console.log(calcArea(10, 20))


// Desafio 3
function splitSentence(string) {
  let result = string.split(' ')
  return result
}
console.log(splitSentence('Eu sou Júlia'))


// Desafio 4
function concatName(array) {
  let result;
  let primeiro = array[array.length - 1]
  let segundo = array[0]

  result = primeiro + ', ' + segundo;
  return result
}
console.log(concatName(['Júlia', 'Pôrto', 'Trybe', 'Course']))


// Desafio 5
function footballPoints(wins, ties) {
  let result = (wins * 3) + ties;
  return result
}
console.log(footballPoints(3, 2))


// Desafio 6
function highestCount(arrayNumeros) {
  let n = 0;
  let vezesQueRepete = 0;
  for (let i in arrayNumeros) {
    if (arrayNumeros[i] > n) {
      n = arrayNumeros[i];
    }
  }
  for (let i in arrayNumeros) {
    if (arrayNumeros[i] === n) {
      vezesQueRepete += 1
    }
  }
  return vezesQueRepete
}
console.log(highestCount([1, 5, 5, 7, 8, 9, 9, 18, 18, 18, 18]))


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultCat1 = Math.abs(cat1 - mouse);
  let resultCat2 = Math.abs(cat2 - mouse);
  let result = '';

  if (resultCat1 === resultCat2) {
    result = 'os gatos trombam e o rato foge';
  } else if (resultCat1 > resultCat2) {
    result = 'cat2';
  } else {
    result = 'cat1';
  }
  return result;
}
console.log(catAndMouse(25, 8, 8))


// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      result.push('fizz');
    } else if (array[i] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}
console.log(fizzBuzz([10, 15, 3, 5, 8, 16]))


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
