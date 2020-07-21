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
function fizzBuzz(arr) {
  let resultados = [];
  for ( let i in arr ) {
    if ( (arr[i] % 3 === 0) && (arr[i] % 5 === 0) ) {
      resultados.push('fizzBuzz');
    } else if ( arr[i] % 3 === 0 ) {
        resultados.push('fizz');
    } else if ( arr[i] % 5 === 0 ) {
        resultados.push('buzz');
    } else {
      resultados.push('bug!');
    }
  }
  return resultados;
}

// Desafio 9
function encode(str) {
  let strEncode = '';
  for (let i in str) {
    if(str.charAt(i) === 'a') {
      strEncode = strEncode + '1';
    } else if (str.charAt(i) === 'e') {
        strEncode = strEncode + '2';
    } else if (str.charAt(i) === 'i') {
        strEncode = strEncode + '3';
    } else if (str.charAt(i) === 'o') { 
        strEncode = strEncode + '4';
    } else if (str.charAt(i) === 'u') {
        strEncode = strEncode + '5';
    } else {
       strEncode = strEncode + str.charAt(i);
    }
  }
  return strEncode;
}

function decode(str) {
  let strDecode = '';
  for (let i in str) {
    if(str.charAt(i) === '1') {
      strDecode = strDecode + 'a';
    } else if (str.charAt(i) === '2') {
        strDecode = strDecode + 'e';
    } else if (str.charAt(i) === '3') {
        strDecode = strDecode + 'i';
    } else if (str.charAt(i) === '4') { 
        strDecode = strDecode + 'o';
    } else if (str.charAt(i) === '5') {
        strDecode = strDecode + 'u';
    } else {
        strDecode = strDecode + str.charAt(i);
    }
  }
  return strDecode;
}

// Desafio 10
function techList(arr, name) {
  let resultados = [];
  let item = {};
  for ( let i in arr ) {
    resultados.push( {tech: arr[i], name: nome} );
  }
  return resultados;
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
