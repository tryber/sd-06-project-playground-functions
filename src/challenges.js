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
  let str = primeiro + ', ' + ultimo;
  return str;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let points = winsPoints + ties;
  return points;
}

// Desafio 6
function highestCount(arrTeste) {
  let nTeste = 0;
  let contador = 0;
  let contRepetido = 0;

  for (let i in arrTeste) {
      nTeste = arrTeste[i]
      for (let indice in arrTeste) {
          if (nTeste == arrTeste[indice]) {
              contador += 1;  
          }
      }
      if (contador > contRepetido) {
          contRepetido = contador;
      }
      contador = 0;
  }
  return contRepetido;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaC1 = mouse - cat1;
  let distanciaC2 = mouse - cat2;
  let msg;

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
