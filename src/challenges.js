// Desafio 1
function compareTrue(valor1, valor2) {
  let teste;
  if (valor1 && valor2 === true) {
    teste = true;
  } else {
    teste = false;
  }
  return teste;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  let arr = str.split(' ');
  return arr;
}

// Desafio 4
function concatName(arr) {
  let primeiro = arr[0];
  let ultimo = arr[arr.length - 1];
  let str = ultimo + ', ' + primeiro;
  return str;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let points = winsPoints + ties;
  return points;
}

// Desafio 6
function highestCount(inteiros) {
  let indiceMaior = 0;
  let contador = 0;

  for (let indice in inteiros) {
      if(inteiros[indiceMaior] < inteiros[indice]){
          indiceMaior = indice;
      }
  }
  for (let i in inteiros) {
      if (inteiros[indiceMaior] === inteiros[i]) {
          contador += 1;
      }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaC1 = Math.abs(mouse - cat1);
  let distanciaC2 = Math.abs(mouse - cat2);
  let msg;
  
  if (mouse) {

  }
  if (distanciaC1 > distanciaC2) {
    msg = "cat2";
  } else if (distanciaC2 > distanciaC1) {
    msg = "cat1";
  } else {
    msg = "os gatos trombam e o rato foge";
  }
  return msg;
}

// Desafio 8
function fizzBuzz() {
  let results = [];
  if (array === 1) {
    return '1';
  } else {
      if (n % 3 === 0 && array % 5 === 0) {
        results.push('FizzBuzz');
        if (array % 3 != 0 && array % 5 != 0){
          results.push('bug!');
        } else if (array % 5 === 0) {
            results.push('Buzz');
        } else if (array % 3 === 0) {
            results.push('Fizz');
            if (array % 3 != 0 && array % 5 != 0){
              results.push('bug!');
            } else {
                results.push(''+ array);
              }
          }
      }
    }
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
