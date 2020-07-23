// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  }
  return false;
}
// console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}
// console.log(calcArea(10,50));

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let arrayString = string.split(' ');
  return arrayString;
}
// console.log(splitSentence("go Trybe"))

// Desafio 4
function concatName(string) {
  // seu código aqui
  let palavras = '';
  palavras += string[string.length - 1];
  palavras += ', ';
  palavras += string[0];
  return palavras;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let somaPontos = (wins * 3) + ties;
  return somaPontos;
}
// console.log(footballPoints(1, 3));

// Desafio 6
function highestCount(array) {
  let qtdDeVezes = 0;
  let maiorNumero = array[0];

  for (let index in array) {
    if (maiorNumero < array[index]) {
      maiorNumero = array[index];
    }
  }

  for (let index in array) {
    if (array[index] === maiorNumero) {
      qtdDeVezes += 1;
    }
  }
  return qtdDeVezes;
}
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((cat1 - mouse) < (cat2 - mouse)) {
    return 'cat1';
  } if ((cat1 - mouse) > (cat2 - mouse)) {
    return 'cat2';
  } if ((cat1 - mouse) === (cat2 - mouse)) {
    return 'os gatos se trombam e o rato foge';
  }
}
// console.log(catAndMouse(2, 5, 5));

// Desafio 8
function fizzBuzz(arrayNumeros) {
  for (let index in arrayNumeros) {
    if (((arrayNumeros[index] % 3) === 0) && ((arrayNumeros[index] % 5) !== 0)) {
      arrayNumeros[index] = 'fizz';
    } else if (((arrayNumeros[index] % 5) === 0) && ((arrayNumeros[index] % 3) !== 0)) {
      arrayNumeros[index] = 'buzz';
    } else if (((arrayNumeros[index] % 5) === 0) || ((arrayNumeros[index] % 3) === 0)) {
      arrayNumeros[index] = 'fizzBuzz';
    } else {
      arrayNumeros[index] = 'bug!';
    }
  }
  return arrayNumeros;
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
};
