// Desafio 1
let valor1
let valor2;
function compareTrue(valor1, valor2) {
  if ( valor1 && valor2 === true){
    return true;
  } else {
    return false;
  }
}
// console.log(compareTrue(valor1,valor2));


// Desafio 2
let base;
let altura;
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area
}
// console.log(calcArea(5, 10));

// Desafio 3
function splitSentence(testaString) {
  let verificaString = testaString.split(' ');
  return (verificaString);
}
let resultSplit = splitSentence('Go Trybe');
console.log(resultSplit);


// Desafio 4
let arrayNomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName() {
  return arrayPrimeiroUltimo = (arrayNomes[arrayNomes.length - 1]) + "," + arrayNomes[0];
}
// console.log(concatName());

// Desafio 5
function footballPoints(ties, wins) {
  let pontuacao = ((ties * 1) + (wins * 3));
  return pontuacao;
}
// console.log(footballPoints(2,3));


// Desafio 6

function highestCount(lista) {
  let maior = lista[0];
  for(let indice of lista){
    if(indice > maior){
      maior = indice;
    }
  }
  let contador = 0;
  for(let indice of lista){
    if(indice === maior){
      contador = contador + 1;
    }
  }
  return contador;
}
let numbers = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(numbers));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  if (distanciaCat1 > distanciaCat2) {
    return "cat2";
  } else if (distanciaCat1 < distanciaCat2) {
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
let arrayNumeros=[2,3,5,15];
function fizzBuzz(arrayNumeros) {
  let newArrayNumeros=[];
  for (let indice in arrayNumeros){ 
    if ( arrayNumeros[indice] % 3 === 0 && arrayNumeros[indice] % 5 === 0) {
      newArrayNumeros[indice] = "fizzBuzz";
    } else if( arrayNumeros[indice] % 3 === 0) {
      newArrayNumeros[indice] = "fizz";
    } else if ( arrayNumeros[indice] % 5 === 0) {
      newArrayNumeros[indice] = "buzz";
    } else {
      newArrayNumeros[indice] = "bug!";
    }
  }
  return newArrayNumeros;
}
  console.log(fizzBuzz(arrayNumeros));

// Desafio 9

function encode() {
  let arrayVogais = ['a','e','i','o','u'];
  for(let i=1; i <= arrayVogais.length; i++){
    console.log(i);
  }
  
}
console.log(encode());
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
let arrayTelefone=[1,2,3,4,5,6,7,8,9,10,11];
function generatePhoneNumber(arrayTelefone) {
  //exceptions
  if (arrayTelefone.length !==11){
    return "Array com tamanho incorreto"
  }
  for (let i = 0; i < arrayTelefone.length; i++){
    if (arrayTelefone[i] < 0 || arrayTelefone[i] > 9)
    return "não é possível gerar um número de telefone com esses valores";
  }
  //tamanho maximo array arrayTelefone.length
  //tamanho minimo arrayTelefone = 0
  //regra => não pode se repetir um mesmo indice por mais de 3 vezes ou é aceitos até duas repetições
  }
  

console.log(generatePhoneNumber(arrayTelefone));

// Desafio 12
let lineA;
let lineB;
let lineC;
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
//console.log(triangleCheck(0,0,0));

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
