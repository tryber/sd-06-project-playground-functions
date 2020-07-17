// Desafio 1
function compareTrue(a, b) {
  if (a && b){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(array) {
  novaArray = [array[array.length - 1], array[0]];
  return novaArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {

  let valorMaior = 0;
  let quantidade = 0;

  for (let counter = 0; counter < array.length; counter += 1) {
    if (array[counter] > valorMaior) {
      valorMaior = array[counter];
    }
  }

  for (let counter = 0; counter < array.length; counter += 1) {
    if (array[counter] == valorMaior) {
      quantidade += 1;
    }
  }

  return quantidade;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  distanciaCat1 = mouse - cat1;
  distanciaCat2 = mouse - cat2;

  if(distanciaCat1 == distanciaCat2) {
    resultado = "os gatos trombam e o rato foge"
  } else if (distanciaCat1 > distanciaCat2) { // 3 < 2
    resultado = "cat1"
  } else {
    resultado = "cat2";
  }

  return resultado;
}


// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
}
