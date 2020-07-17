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
    return (retorno);
  }
let arrayConcatenar = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
let stringConcatenada = concatName(arrayConcatenar);
console.log(stringConcatenada);


// Desafio 5
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
