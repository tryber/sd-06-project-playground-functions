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
return arrayPrimeiroUltimo = arrayNomes[arrayNomes.length - 1] + ', ' + arrayNomes[0];
}
let arrayNomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
let concatenarNomes = concatName(arrayNomes);
console.log(concatenarNomes);

// Desafio 5 - Pontos no futebol
function footballPoints(wins, ties) {
  let pontuacao = (wins * 3) + (ties * 1);
  return pontuacao;
}
pontuacao = footballPoints(3, 2);
console.log(pontuacao);

// Desafio 6
function highestCount(lista) {
let maior = lista[0];
for (let indice of lista){
  if (indice > maior){
    maior = indice;
    }
  }
let contador = 0;
  for (let indice of lista){
    if (indice === maior){
      contador += 1;
    }
  }
  return contador;
}
let numbers = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(numbers));


// Desafio 7 -  Caça ao rato

function catAndMouse(mouse, cat1, cat2) {
  let positioncat1 = Math.abs(cat1 - mouse);
  let positioncat2 = Math.abs(cat2 - mouse);
  let positon;
  if (positioncat1 > positioncat2) {
    position = 'cat2';
  } else if (positioncat1 < positioncat2) {
    position = 'cat1';
  } else {
  position = 'os gatos trombam e o rato foge';
  }
  return position;
  }
  catAndMouse(45,30,30);
  console.log(position);

// Desafio 8 - FizzBuzz
let arrayNumeros=[2, 3, 5, 15];
  function fizzBuzz(arrayNumeros) {
    let newArrayNumeros=[];
    for ( let indice in arrayNumeros ){
      if (arrayNumeros[indice] % 3 === 0 && arrayNumeros[indice] % 5 === 0) {
        newArrayNumeros[indice] = 'fizzBuzz';
      } else if(arrayNumeros[indice] % 3 === 0) {
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


function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}



function techList() {
  // seu código aqui
}

// Desafio 11

function generatePhoneNumber() {
  // seu código aqui
}


function triangleCheck(lineA, lineB, lineC) {
  if (lineA < Math.abs(lineB + lineC) && lineA > Math.abs(lineB - lineC)){
    return true;
  }else if(lineB < Math.abs(lineA + lineC) && lineB > Math.abs(lineA - lineC)){
    return true;
  }else if(lineC < Math.abs(lineA + lineB) && lineC > Math.abs(lineA - lineB)){
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
