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
/* 6 - Repetição do maior número
Escreva uma função chamada highestCount que, ao receber uma array de números,
retorne a quantidade de vezes que o maior deles se repete.
Exemplo: caso o parâmetro de highestCount seja uma array com valores
[9, 1, 2, 3, 9, 5, 7], a função deverá retornar 2, que é a quantidade de vezes
que o número 9 (maior número do array) se repete.
*/
  // seu código aqui
// let array2 = [9, 10, 2, 3, 9, 5, 7, 9, 9, 9]
function funcGreaterNumber(array2) {
  let greaterNumber = array2[0];
  for (let i of array2) {
    if (i > greaterNumber) {
      greaterNumber = i;
    }
  }
  return greaterNumber;
}
// console.log(funcGreaterNumber(array2))

function highestCount(array2) {
  let greaterNumber = funcGreaterNumber(array2);
  let counter = 0;
  for (let i of array2) {
    if (i === greaterNumber) {
      counter += 1;
    }
  }
  return counter;
}
// console.log(highestCount(array2))

// Desafio 7
/* 7 - Caça ao rato
Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2,
e que ambos estão atrás de um rato chamado mouse. Imagine que cada um dos três
animais está em uma posição representada por um número.

Sabendo disso, crie uma função chamada catAndMouse que, ao receber a posição
de mouse, cat1 e cat2, nessa ordem, calcule as distâncias entre o rato e os
gatos e retorne qual dos felinos irá alcançar o rato primeiro
(sendo aquele que estará mais perto).

Exemplo: caso o gato cat2 esteja a 2 unidades de distância do rato, e cat1
esteja a 3 unidades, sua função deverá retornar cat2.

Caso os gatos estejam na mesma distância do rato, a função deverá retornar
a string "os gatos trombam e o rato foge".
*/
// seu código aqui
// let cat1 = 6 //posição em uma reta
// let cat2 = 20 //posição em uma reta
// let mouse = 12 //posição em uma reta

function catAndMouse(mouse, cat1, cat2) {
  let range1 = Math.abs(cat1 - mouse);
  let range2 = Math.abs(cat2 - mouse);
  // console.log("distancia do range1 =" + range1)
  // console.log("distancia do range2 =" + range2)
  let messege = ''
  if (range1 < range2) {
    messege = 'cat1'
  } else if (range1 > range2) {
    messege = 'cat2'
  } else {
    messege = 'os gatos trombam e o rato foge'
  }
  return messege
}
// console.log (catAndMouse())

// Desafio 8
/* FizzBuzz
Crie uma função chamada fizzBuzz que receba uma array de números e retorne 
uma array da seguinte forma:

Para cada número da Array que seja divisível por 3, apresente uma string "fizz";
Para cada número da Array que seja divisível por 5, apresente uma string "buzz";
Caso o número seja divisível por 3 ou 5, retorne a string "fizzBuzz";
Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar 
["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].
*/
// seu código aqui
let number2 = 22
function multiple3or5 (number2) {
let multiple3 = (number2 % 3) === 0;
let multiple5 = (number2 % 5) === 0;
  if (multiple3 && multiple5){
    return 'fizzBuzz';
  } else if (multiple3){
    return 'fizz'
  } else if (multiple5){
    return 'buzz'
  } else {
    return 'bug!'
  }
}
let array3 = [2, 15, 7, 9, 45]
function fizzBuzz(array3) {
  let newArray = [];
  for (let i=0; i<array3.length; i+= 1) {
    newArray[i] = multiple3or5(array3[i]) 
  }
  return newArray
}
console.log(fizzBuzz(array3))
/* let array3 = [2, 15, 7, 9, 45]
function fizzBuzz (array3[i]) {
  let newArray = [];
  for (let i=0; i<array3.length; i += 1) {
  let multiple3 = array3[i] % 3 === 0;
  let multiple5 = array3[i] % 5 === 0;
  if (multiple3 && multiple5) {
    newArray.push ('fizzBuzz');
  } else if (multiple5) {
    newArray.push ('buzz');
  } else if (multiple3) {
    newArray.push ('fizz');
  } else {
    newArray.push ('bug!');
  }
  return newArray
  }
}
console.log (fizzBuzz (array3))



*/

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
