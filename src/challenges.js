// Desafio 1
function compareTrue(logico1, logico2) {
  let resposta = false;
  if (logico1 && logico2) {
    resposta = true;
  }
  return resposta;
}

// Desafio 2
function calcArea(base, heigth) {
  return ((base * heigth) / 2);
}

// Desafio 3
function splitSentence(frase) {
  let resultado = [];
  resultado.push(frase.split(' '));
  return resultado;
}

// Desafio 4
function concatName(meuArray) {
  let primeiraPalavra = meuArray[0];
  let ultimaPalavra = meuArray[meuArray.length - 1];
  let resposta = '';
  resposta += (ultimaPalavra + ', ' + primeiraPalavra);
  return resposta;
}

// Desafio 5
function footballPoints(wins, lies) {
  let vitorias = wins * 3;
  let empates = lies * 1
  return vitorias + empates;
}

// Desafio 6
function highestCount(meuArray) {
  var maior = Math.max.apply(null, meuArray);
  var contMaior = 0;
  for (var i = 0; i < meuArray.length; i += 1) {
    if ( meuArray[i] === maior) {
      contMaior += 1
    }
  }
  return contMaior;
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
