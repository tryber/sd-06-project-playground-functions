// Desafio 1 - OK
function compareTrue(boolean1, boolean2) {
  // seu código aqui (iniciando)
  if (boolean1 === true && boolean2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2 - OK
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui

}

// Desafio 4 - OK
function concatName(string) {
  // seu código aqui
  primeiroItem = string[0];
  ultimoitem = string[string.length - 1];
  return (ultimoitem + ", " + primeiroItem);
}

// Desafio 5 - OK
function footballPoints(wins, ties) {
  // seu código aqui
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
}

// Desafio 7 - OK
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let ditanciaCat1 = Math.abs(mouse - cat1);
  let ditanciaCat2 = Math.abs(mouse - cat2);

  if (ditanciaCat1 === ditanciaCat2) {
    return ("os gatos trombam e o rato foge");
  } else if (ditanciaCat1 < ditanciaCat2) {
    return ("cat1");
  } else {
    return ("cat2");
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let retorno = [];
  for (let posicaoAtual = 0; posicaoAtual <= numbers.lenght; posicaoAtual =+ 1) {
    if (numbers[posicaoAtual] % 3 === 0 && numbers[posicaoAtual] % 5 === 0) {
      retorno.push = ("fizzBuzz");
    } else if (numbers[posicaoAtual] % 3 === 0 && numbers[posicaoAtual] % 5 ==! 0) {
      retorno.push = ("fizz");
    } else if (numbers[posicaoAtual] % 3 ==! 0 && numbers[posicaoAtual] % 5 === 0) {
      retorno.push = ("buzz");
    } else {
      retorno.push = ("bug!");
    }
  }
  return retorno;
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

