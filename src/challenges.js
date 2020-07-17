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
  novaArray = array[array.length - 1] + ', ' + array[0];
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
function fizzBuzz(array) {
  novaArray = [];

  for (let pos = 0; pos < array.length; pos += 1) {
    // novaArray.push(array[pos]);
    if ((array[pos] % 3  === 0) && (array[pos] % 5  === 0)) {
      novaArray.push('fizzBuzz');
    } else if (array[pos] % 3  === 0) {
      novaArray.push('fizz');
    } else if (array[pos] % 5  === 0) {
      novaArray.push('buzz');
    } else {
      novaArray.push('bug!');
    }

  }

  return novaArray;
}

// Desafio 9
function encode(string) {
  let cutString = string.split('');
  let stringEncode = '';

  for (letra in cutString){
    if (cutString[letra] === 'a') {
      stringEncode += '1';
    } else if (cutString[letra] === 'e') {
      stringEncode += '2';
    } else if (cutString[letra] === 'i') {
      stringEncode += '3';
    } else if (cutString[letra] === 'o') {
      stringEncode += '4';
    } else if (cutString[letra] === 'u') {
      stringEncode += '5';
    } else {
      stringEncode += cutString[letra];
    }
  }

 return stringEncode;
}
function decode(string) {
  let cutString = string.split('');
  let stringDecode = '';

  for (letra in cutString){
    if (cutString[letra] === '1') {
      stringDecode += 'a';
    } else if (cutString[letra] === '2') {
      stringDecode += 'e';
    } else if (cutString[letra] === '3') {
      stringDecode += 'i';
    } else if (cutString[letra] === '4') {
      stringDecode += 'o';
    } else if (cutString[letra] === '5') {
      stringDecode += 'u';
    } else {
      stringDecode += cutString[letra];
    }
  }

 return stringDecode;
}

// Desafio 10
function techList(array, name) {
  
  let listaObjetos = [];

  for(let pos = 0; pos < array.length; pos += 1) {
    let objeto = {};

    if (array[pos] === '') {
      objeto.tech = 'Vazio!';
    } else {
      objeto.tech = array[pos];
    }
    
    objeto.name = name;
    listaObjetos.push(objeto);
  }

return listaObjetos;  
}


// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'))

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
