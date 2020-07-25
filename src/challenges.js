/* começa mais um desafio */

// Desafio 1
/* 1 - Usando o operador && JavaScript possui um operador lógico &&, o qual
recebe dois valores e retorna true se ambos os valores são verdadeiros, e
retorna false se algum dos valores não o for.
Considerando isso, crie uma função chamada compareTrue que, ao receber
dois booleanos: Retorne true se ambos os valores são verdadeiros;
Retorne false se um ou ambos os parâmetros forem falsos.
Faça a função utilizando o operador &&.
*/
// seu código aqui
// let value1 = 'true'
// let value2 = 'true'
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true
  } else {
    return false
  }
}
// console.log(compareTrue(value1, value2))

// Desafio 2
/* 2 - Área do triângulo Escreva uma função com o nome calcArea que receba um valor de base
(chamado base) e outro de altura (chamado height) de um triângulo e retorne o cálculo da sua área.
Lembre-se que a área de um triângulo é calculada através da seguinte fórmula: (base * altura) / 2.
*/
// let base = 50
// let height = 30
function calcArea(base, height) {
// seu código aqui
  return ((base * height) / 2);
}
// console.log (calcArea(base,height));

// Desafio 3
/* 3 - Dividindo a frase
  Escreva uma função com o nome splitSentence, a qual receberá uma string e retornará uma array
  de strings separadas por cada espaço na string original.

  Exemplo: se a função receber a string "go Trybe", o retorno deverá ser ['go', 'Trybe'].
*/
// let frase = 'lilica linda';
function splitSentence(frase) {
  return frase.split(' ');

// seu código aqui
}
// console.log(splitSentence(frase));

// Desafio 4
/* 4 - Concatenação de strings
  Escreva uma função com o nome concatName que, ao receber uma array de
  strings, retorne uma   string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM',
  independente do tamanho da array.

  Isso quer dizer que, caso o parâmetro passado para concatName seja a
  Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deverá
  retornar Paolillo, Lucas.
*/
// let array = ['Lucas','Cassiano', 'Ferraz', 'Paolillo']

function concatName(array) {
  let newString = `${array[array.length - 1]}, ${array[0]}`;
  return newString;
}
// console.log(concatName(array))

// Desafio 5
/* Escreva uma função com o nome footballPoints que receba o número de vitórias
  (esse parâmetro deverá se chamar wins) e o número de empates (esse parâmetro
  deverá se chamar ties) e retorne a quantidade de pontos que o time marcou
  em um campeonato.
  Para tanto, considere que cada vitória
  vale 3 pontos e cada empate vale 1 ponto.
*/
// seu código aqui
// let wins = 20
// let ties = 5

function footballPoints(wins, ties) {
  let points = (3 * wins) + (1 * ties)
  return points
}
// console.log(footballPoints(wins,ties))

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
