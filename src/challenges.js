// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2) {
    return true;
  }
  return false;
}


// Desafio 2
function calcArea(base, height) {
  return (base*height) / 2;
  // seu código aqui
}

// Desafio 3
function splitSentence(param1) {
  let resultado = param1.split(' ');
  return resultado;
}
console.log(splitSentence('go trybe'));


// Desafio 4
function concatName(param1) {
  let primeiraPosicao = param1;
  let ultimaPosicao = param1[param1.length - 1];
  return `${ultimaPosicao}, ${primeiraPosicao[0]}`
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let empate = ties * 1;
  let somaPontos = vitoria + empate;
  return somaPontos;
}
console.log(footballPoints(1, 5));

// Desafio 6
function highestCount(param1) {
  let somaNumero = 0;
  let maiorNumero = 0;
  for (let index = 0; index < param1.length; index++) {
    if (param1[index] > maiorNumero) {
      maiorNumero = param1[index];
      somaNumero = 0;
    }
    if (param1[index] === maiorNumero) {
      somaNumero += 1;
    }
  }
  return somaNumero;
  }
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = mouse - cat1;
  let distancia2 = mouse - cat2

  if (distancia1 < 0){
    distancia1 *= -1;
  } else if (distancia2 < 0){
    distancia2 *= -1;
  }
  if (distancia1 === distancia2){
    return 'os gatos trombam e o rato foge';
  } else if (distancia1 < distancia2) {
    return 'cat1';
  } else if (distancia2 < distancia1) {
    return 'cat2';
  }
}
console.log(catAndMouse(5, 3, 2))


// Desafio 8
function fizzBuzz(param1) {
  let array = [];
  for (let index = 0; index < param1.length; index++) {
    if (param1[index] % 3 === 0 && param1[index] % 5 === 0  || param1[index] % 3 === 5 && param1[index] % 5 === 3) {
      array.push('fizzBuzz');
    } else if (param1[index] % 5 === 0 ) {
      array.push('buzz');
    } else if (param1[index] % 3 === 0 ) {
      array.push('fizz');
    } else {
      array.push('bug!');
    }
  }
  return array;
  }
console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9
function encode(param1) {
  let expressao = '';
  if (param1) {
    expressao = param1.replace(/a/gi, '1');
  }
  if (expressao) {
    expressao = expressao.replace(/e/gi, '2');
  }
  if (expressao) {
    expressao = expressao.replace(/i/gi, '3');
  }
  if (expressao) {
    expressao = expressao.replace(/o/gi, '4');
  }
  if (expressao) {
    expressao = expressao.replace(/u/gi, '5');
  }
  return expressao;
}
console.log(encode('hi there!'))

function decode(param1) {
  if (param1) {
    expressao = param1.replace(/1/gi, 'a');
  }
  if (expressao) {
    expressao = expressao.replace(/2/gi, 'e');
  }
  if (expressao) {
    expressao = expressao.replace(/3/gi, 'i');
  }
  if (expressao) {
    expressao = expressao.replace(/4/gi, 'o');
  }
  if (expressao) {
    expressao = expressao.replace(/5/gi, 'u');
  }
  return expressao;
}
console.log(decode('h3 th2r2!'))



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
