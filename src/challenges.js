// Desafio 1 - testando um commit

function compareTrue(a, b) {
  if ((a === true) && (b === true)) {
    return true;
  }
  return false;
}
let a = false;
let b = true;
let resultado = compareTrue(a, b);
console.log(resultado);

// Desafio 2 -  Área do triângulo

function calcArea(base, altura) {
  return ((base * altura) / 2);
}
let area = calcArea(15, 4);
console.log(area);

// Desafio 3 - Go Trybe
function splitSentence(nome) {
  let verifica = nome.split(' ');
  return (verifica);
}
let resultSplit = splitSentence('Go Trybe');
console.log(resultSplit);

// Desafio 4 - Concatenação de strings

function concatName(arrayNomes) {
  let arrayPrimeiroUltimo = arrayNomes[arrayNomes.length - 1] + ', ' + arrayNomes[0];
  return arrayPrimeiroUltimo ;
}
let arrayNomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
let concatenarNomes = concatName(arrayNomes);
console.log(concatenarNomes);

// Desafio 5 - Pontos no futebol
function footballPoints(wins, ties) {
  let pontuacao = (wins * 3) + (ties * 1);
  return pontuacao;
}
let pontuacao = footballPoints(3, 2);
console.log(pontuacao);

// Desafio 6
function highestCount(lista) {
  let maior = lista[0];
  for (let indice of lista) {
  if (indice > maior) {
    maior = indice;
  }
  }
  let contador = 0;
  for (let indice of lista) {
    if (indice === maior) {
      contador += 1;
    }
  }
  return contador;
}
let lista = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(lista));


// Desafio 7 -  Caça ao rato

function catAndMouse(mouse, cat1, cat2) {
  let positioncat1 = Math.abs(cat1 - mouse);
  let positioncat2 = Math.abs(cat2 - mouse);
  let position;
  if (positioncat1 > positioncat2) {
    position = 'cat2';
  } else if (positioncat1 < positioncat2) {
    position = 'cat1';
  } else {
    position = 'os gatos trombam e o rato foge';
  }
  return position;
}
catAndMouse(45, 30, 30);
console.log(position);

// Desafio 8 - FizzBuzz
let arrayNumeros=[2, 3, 5, 15];
function fizzBuzz(arrayNumeros) {
let newArrayNumeros = [];
  for (let indice in arrayNumeros ) {
    if (arrayNumeros[indice] % 3 === 0 && arrayNumeros[indice] % 5 === 0) {
      newArrayNumeros[indice] = 'fizzBuzz';
    } else if (arrayNumeros[indice] % 3 === 0) {
      newArrayNumeros[indice] = 'fizz';
    } else if (arrayNumeros[indice] % 5 === 0) {
      newArrayNumeros[indice] = 'buzz';
    } else {
      newArrayNumeros[indice] = 'bug!';
    }
  }
  return newArrayNumeros;
}
console.log(fizzBuzz(arrayNumeros));

// Desafio 9
function encode(arrayCode) {
let arrayCode2 = arrayCode.split();
let newArrayEncode = [];
 for (let indceCode in arrayCode2) {
   if (arrayCode2[indceCode] === 'a') {
      newArrayEncode[indceCode] = '1';
   } else if (arrayCode2[indceCode] === 'e') {
      newArrayEncode[indceCode] = '2';
   } else if (arrayCode2[indceCode] ==='i') {
      newArrayEncode[indceCode] = '3';
   } else if (arrayCode2[indceCode] ==='o') {
      newArrayEncode[indceCode] = '4';
   } else if (arrayCode2[indceCode] ==='u') {
      newArrayEncode[indceCode] = '5';
    } else {
    newArrayEncode[indceCode] = arrayCode2[indceCode];
  }
 }
 return newArrayEncode;
}

function decode(retEncode) {
  arrayCode2 = retEncode;
  let newArrayEncode = [];
  for (let indceCode in arrayCode2 ) {
   if (arrayCode2[indceCode] == '1') {
      newArrayEncode[indceCode] = 'a';
    } else if (arrayCode2[indceCode] == '2') {
      newArrayEncode[indceCode] = 'e';
    } else if (arrayCode2[indceCode] == '3') {
      newArrayEncode[indceCode] = 'i';
    } else if (arrayCode2[indceCode] == '4') {
      newArrayEncode[indceCode] = 'o';
    } else if (arrayCode2[indceCode] == '5') {
      newArrayEncode[indceCode] = 'u';
     } else {
      newArrayEncode[indceCode] = arrayCode2[indceCode];
   }
 }
return (newArrayEncode);
}

let arrayCode = 'hi there!'
retEncode = encode(arrayCode);
console.log(retEncode);
retDecode = decode(retEncode);
console.log(retDecode);

function techList() {
  // seu código aqui
}

// Desafio 11

function generatePhoneNumber() {
  // seu código aqui
}


function triangleCheck(lineA, lineB, lineC) {
  if (lineA < Math.abs(lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  }else if(lineB < Math.abs(lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    return true;
  }else if(lineC < Math.abs(lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
  return false;
}
 desafio = triangleCheck(1,2,2);
console.log(desafio);

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
