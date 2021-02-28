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
  distanciaCat1 = Math.abs(mouse - cat1);
  distanciaCat2 = Math.abs(mouse - cat2);

  if(distanciaCat1 == distanciaCat2) {
    resultado = "os gatos trombam e o rato foge"
  } else if (distanciaCat1 < distanciaCat2) { // 3 < 2
    resultado = "cat1"
  } else {
    resultado = "cat2";
  }

  return resultado;
}

// console.log(catAndMouse(1, 0, 2))

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

  let resultado = '';
  let listaObjetos = [];  

  if (array.length == 0) {
    listaObjetos = 'Vazio!';
  } else {
    array.sort();
    for(let pos = 0; pos < array.length; pos += 1) {
      let objeto = {};

      objeto.tech = array[pos];
      objeto.name = name;
      listaObjetos.push(objeto);
    }
  }

return listaObjetos; 
}

// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'))

// Desafio 11
function generatePhoneNumber(array) {

  if (array.length != 11){
    return "Array com tamanho incorreto.";
  }

  for(let pos = 0; pos < array.length; pos += 1) {
    if ((array[pos] < 0) || (array[pos] > 9)) {
      return "não é possível gerar um número de telefone com esses valores";
    }

  }

 let resultado = '(' + array[0] + array[1] + ')' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
 return resultado;
}

// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

  if ((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) {
    return true;
  } else if ((lineB < lineA + lineC) && (lineB > Math.abs(lineA - lineC))) {
    return true;
  } else if ((lineC < lineA + lineB) && (lineC > Math.abs(lineA - lineB))) {
    return true;
  } else {
    return false;
  }

}

// Desafio 13
function hydrate(string) {
  let coposAgua = 0;
  let coposBebida = string.match(/\d+/g).map(Number);

  for (let pos = 0; pos < coposBebida.length; pos += 1) {
    coposAgua += coposBebida[pos];
  }

  if (coposAgua === 1) {
    resultado = coposAgua +  ' copo de água'
  } else {
    resultado = coposAgua +  ' copos de água'
  }

  return resultado;
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));


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
