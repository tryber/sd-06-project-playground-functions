// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 && value2) === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let word = '';
  let splitedPhrase = [];
  for (let i in string) {
    if (string[i] !== ' ') {
      word += (string[i]);
    }
    else if (string[i] === ' ') {
      splitedPhrase.push(word);
      word = '';
    }
  }
  splitedPhrase.push(word);
  return splitedPhrase;
}

// Desafio 4
function concatName(array) {
  for (let index = 0; index < array.length; index += 1) {
    return newArray = (array[array.length - 1] + ', ' + array[0]);
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  return totalPoints = ((wins*3) + (ties * 1));
}

// Desafio 6
function highestCount(array) {
  let highestNumber = array[0];
  let highestNumberCount = 0;
  for (let index in array) {
    if (highestNumber < array[index]) {
      highestNumber = array[index];
    }
  }
  for (let index in array) {
    if (highestNumber === array[index]) {
      highestNumberCount += 1;
    }
  }
  return highestNumberCount;
}

// Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que ambos estão atrás de um rato chamado mouse. Imagine que cada um dos três animais está em uma posição representada por um número.

// Sabendo disso, crie uma função chamada catAndMouse que, ao receber a posição de mouse, cat1 e cat2, nessa ordem, calcule as distâncias entre o rato e os gatos e retorne qual dos felinos irá alcançar o rato primeiro (sendo aquele que estará mais perto).

// Exemplo: caso o gato cat2 esteja a 2 unidades de distância do rato, e cat1 esteja a 3 unidades, sua função deverá retornar cat2.

// Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string "os gatos trombam e o rato foge".

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = (|cat1| - |mouse|);
  let distanceCat2 = (|cat2| - |mouse|);
  if (distanceCat1 < distanceCat2) {
    return cat1;
  }
  else if (distanceCat2 < distanceCat1) {
    return cat2;
  }
  else if (distanceCat1 === distanceCat2) {
    return ("Os gatos trombam e o rato foge");
  }
}

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
