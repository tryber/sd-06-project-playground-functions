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
  let resultado = frase.split(" ");
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
  let maior = Math.max.apply(null, meuArray);
  let contMaior = 0;
  for (let i = 0; i < meuArray.length; i += 1) {
    if (meuArray[i] === maior) {
      contMaior += 1
    }
  }
  return contMaior;
}

// Desafio 7
function catAndMouse() {
  let distanciaGato1 = 0;
  let distanciaGato2 = 0;
  let resposta = "";
  if (mouse > cat1) {
    distanciaGato1 = mouse - cat1;
  } else {
    ditanciaGato1 = cat1 - mouse
  }
  if (mouse > cat2) {
    distanciaGato2 = mouse - cat2;
  } else {
    distanciaGato2 = cat2 - mouse;
  }
  if (distanciaGato1 < distanciaGato2) {
    resposta = "cat1"
  } else if (distanciaGato2 < distanciaGato1) {
    resposta = "cat2"
  } else {
    resposta = "os gatos trombam e o rato foge"
  }
  return resposta;
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
