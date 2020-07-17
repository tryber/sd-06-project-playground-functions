// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(param) {
  let palavras = [];
  let limiteDaUltimaPalavra = -1;

  for (letra = 0; letra < param.length; letra += 1) {
    let palavra = '';

    if (param[letra] === ' ' || letra === param.length - 1) {
      for (letraPalavra = limiteDaUltimaPalavra + 1; letraPalavra <= letra; letraPalavra += 1) {
        if (param[letraPalavra] !== ' ') {
          palavra += param[letraPalavra];
        }
      }
      palavras.push(palavra);
      limiteDaUltimaPalavra = letra;
    }
  }

  return palavras;
}

// Desafio 4
function concatName(param) {
  let resultado = `${param[param.length -1]}, ${param[0]}`;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = (wins * 3) + (ties * 1);
  return total;
}

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
