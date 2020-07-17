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

// Desafio 2
// Área do triângulo

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

// Desafio 4
/* Concatenação de strings
Escreva uma função com o nome concatName que, ao receber uma array de strings, retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM',
independente do tamanho da array.

Isso quer dizer que, caso o parâmetro passado para concatName seja a Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'],
a função deverá retornar Paolillo, Lucas. */

function concatName(arrayConcatenar) {
     for (let indice in arrayConcatenar){
      conta = index.length;
      if (indice = 0) {
        arrayprimeiro = arrayConcatenar;
      }else if (indice = conta) {
        arraysegundo = arrayConcatenar;
      }
      let resultado = arra
    }
    return (retorno); *
  }



let arrayConcatenar = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
let stringConcatenada = concatName(arrayConcatenar);
console.log(stringConcatenada);


// Desafio 5
/* Escreva uma função com o nome footballPoints que receba o número
 de vitórias (esse parâmetro deverá se chamar wins) e o número de empates (esse parâmetro deverá se chamar ties) e retorne a quantidade de pontos que o time marcou em um campeonato.
Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto. */

function footballPoints(ties, wins) {

    let pontuacao = (ties * 1) + (wins * 3);
    return pontuacao;
}
console.log(footballPoints(2,3));

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
