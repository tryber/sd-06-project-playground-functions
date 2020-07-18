// Desafio 1

// JavaScript possui um operador lógico &&, o qual recebe dois valores e
// retorna true se ambos os valores são verdadeiros,
// e retorna false se algum dos valores não o for.
// Considerando isso, crie uma função chamada compareTrue que,
// ao receber dois booleanos:
// Retorne true se ambos os valores são verdadeiros;
// Retorne false se um ou ambos os parâmetros forem falsos.
// Faça a função utilizando o operador &&.

function compareTrue(value1, value2) {
  return value1 && value2;
}

// TESTE
// console.log(compareTrue(false, false));

// Desafio 2

// Escreva uma função com o nome calcArea que receba um valor de base
// (chamado base) e outro de altura (chamado height) de um triângulo
// e retorne o cálculo da sua área.
// Lembre-se que a área de um triângulo é calculada através da seguinte
// fórmula: (base * altura) / 2.

function calcArea(base, height) {
  return (base * height) / 2;
}

// TESTE
// console.log(calcArea(5, 4));

// Desafio 3

// Escreva uma função com o nome splitSentence, a qual receberá uma string e
// retornará uma array de strings separadas por cada espaço
// na string original.
// Exemplo: se a função receber a string "go Trybe", o retorno
// deverá ser ['go', 'Trybe'].

function splitSentence(word) {
  return word.split(' ');
}

// TESTE
// console.log(splitSentence('Hello World'));

// Desafio 4

// Escreva uma função com o nome concatName que, ao receber uma array
// de strings, retorne uma string com o formato
// 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.

// Isso quer dizer que, caso o parâmetro passado para concatName seja a Array
// ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'],
// a função deverá retornar // Paolillo, Lucas.

function concatName(newArray) {
  return newArray[newArray.length - 1] + ', ' + newArray[0];
}

// TESTE
// let testArray = ['Pedrina', 'Maria', 'Julieta', 'Catarina', 'Marieta'];
// console.log(concatName(testArray));

// Desafio 5

// Escreva uma função com o nome footballPoints que receba o número de
// vitórias (esse parâmetro deverá se chamar wins) e o número de empates
// (esse parâmetro deverá se chamar ties) e retorne a quantidade de pontos
// que o time marcou em um campeonato.

// Para tanto, considere que cada vitória vale 3 pontos e
// cada empate vale 1 ponto.

function footballPoints(wins, ties) {
  return totalOfPoints = (wins * 3) + ties;
}

console.log(footballPoints(10, 5));


// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7

// Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que
// ambos estão atrás de um rato chamado mouse. Imagine que cada um dos três
// animais está em uma posição representada por um número.

// Sabendo disso, crie uma função chamada catAndMouse que, ao receber a
// posição de mouse, cat1 e cat2, nessa ordem, calcule as distâncias entre
// o rato e os gatos e retorne qual dos felinos irá alcançar o rato primeiro
// (sendo aquele que estará mais perto).

// Exemplo: caso o gato cat2 esteja a 2 unidades de distância do rato, e cat1
// esteja a 3 unidades, sua função deverá retornar cat2.

// Caso os gatos estejam na mesma distância do rato, a função deverá retornar
// a string "os gatos trombam e o rato foge".

function catAndMouse(mouse, cat1, cat2) {
  let distanceMouseCatOne = Math.abs(mouse - cat1);
  let distanceMouseCatTwo = Math.abs(mouse - cat2);
  let result = '';
  if (distanceMouseCatOne < distanceMouseCatTwo) {
    result = 'cat1';
  } else if (distanceMouseCatOne > distanceMouseCatTwo) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge'
  }
  return result;
}

console.log(catAndMouse(0, 3, 2));

// Desafio 8

// Crie uma função chamada fizzBuzz que receba uma array de números e retorne
// uma array da seguinte forma:

// Para cada número da Array que seja divisível por 3,
// apresente uma string "fizz";

// Para cada número da Array que seja divisível por 5,
// apresente uma string "buzz";

// Caso o número seja divisível por 3 e 5,
// Retorne a string "fizzBuzz";

// Caso o número não possa ser dividido por 3 nem por 5,
// retorne a string "bug!";

// Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função
// deveráretornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].


function fizzBuzz(myArray) {
  let newArray = [];

  for (index in myArray) {
    if (myArray[index] % 3 === 0 && myArray[index] % 5 === 0) {
      newArray[index] = 'fizzBuzz';
    } else if (myArray[index] % 5 === 0) {
      newArray[index] = 'buzz';
    } else if (myArray[index] % 3 === 0) {
      newArray[index] = 'fizz';
    } else {
      newArray[index] = 'bug!';
    }
  }
  return newArray;
}

let testArray = [2, 15, 7, 9, 45];
console.log(fizzBuzz(testArray));


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
