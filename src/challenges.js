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
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if (distCat1 > distCat2) {
    return 'cat2';
  } else if (distCat1 < distCat2) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
// console.log(catAndMouse(1, 2, 3));

// Desafio 8
function fizzBuzz(valorFizzBuzz) {
  let novoFizzBuzz = [];
  let fizzBuzzStr = '';
  for (let indice = 0; indice < valorFizzBuzz.length; indice += 1) {
    switch (true) {
      case (valorFizzBuzz[indice] % 3 === 0 && valorFizzBuzz[indice] % 5 === 0):
        fizzBuzzStr = 'fizzBuzz';
        break;
      case (valorFizzBuzz[indice] % 3 === 0):
        fizzBuzzStr = 'fizz';
        break;
      case (valorFizzBuzz[indice] % 5 === 0):
        fizzBuzzStr = 'buzz';
        break;
      default:
        fizzBuzzStr = 'bug!';
        break;
    }
    novoFizzBuzz.push(fizzBuzzStr);
  }
  return novoFizzBuzz;
}

// console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(array) {
  let frase = '';
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === 'a') {
      frase += '1';
    } else if (array[index] === 'e') {
      frase += '2';
    } else if (array[index] === 'i') {
      frase += '3';
    } else if (array[index] === 'o') {
      frase += '4';
    } else if (array[index] === 'u') {
      frase += '5';
    } else {
      frase += array[index];
    }
  }
  return frase;
}
// console.log(encode('ola'));

function decode(array2) {
  let frase = '';
  for (let index = 0; index < array2.length; index += 1) {
    if (array2[index] === '1') {
      frase += 'a';
    } else if (array2[index] === '2') {
      frase += 'e';
    } else if (array2[index] === '3') {
      frase += 'i';
    } else if (array2[index] === '4') {
      frase += 'o';
    } else if (array2[index] === '5') {
      frase += 'u';
    } else {
      frase += array2[index];
    }
  }
  return frase;
}
// console.log(decode('h3 th2r2!'));

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
