// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
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

  for (let letra = 0; letra < param.length; letra += 1) {
    let palavra = '';

    if (param[letra] === ' ' || letra === param.length - 1) {
      for (let letraPalavra = limiteDaUltimaPalavra + 1; letraPalavra <= letra; letraPalavra += 1) {
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
  let resultado = `${param[param.length - 1]}, ${param[0]}`;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = (wins * 3) + (ties * 1);
  return total;
}

// Desafio 6
function highestCount(param) {
  let maiorValor = 0;
  let quantasVezes = 0;

  for (let cont1 = 0; cont1 < param.length; cont1 += 1) {
    for (let cont2 = 0; cont2 < param.length; cont2 += 1) {
      if (cont1 !== cont2 && param[cont1] > maiorValor && param[cont1] > param[cont2]) {
        maiorValor = param[cont1];
      }
    }
  }

  for (let contRepete = 0; contRepete < param.length; contRepete += 1) {
    if (maiorValor === param[contRepete]) {
      quantasVezes += 1;
    }
  }

  return quantasVezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resposta = 0;
  
  if ((mouse - cat1) < (mouse - cat2)) {
    resposta = 'cat1';
  } else if ((mouse - cat1) > (mouse - cat2)) {
    resposta = 'cat2';
  } else {
    resposta = 'os gatos trombam e o rato foge';
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
