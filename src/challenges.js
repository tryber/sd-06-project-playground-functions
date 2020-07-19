// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, heigth) {
  let soma = (base * heigth) / 2;
  return soma;
}

// Desafio 3
function splitSentence(nomeString) {
  return nomeString.split(' ');
}

// Desafio 4
function concatName(ultimoItemEPrimeiroItem) {
  let ultimoItem = ultimoItemEPrimeiroItem.length - 1;
  let primeiroItem = 0;
  return `${ultimoItemEPrimeiroItem[ultimoItem]}, ${ultimoItemEPrimeiroItem[primeiroItem]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosVitoria = wins * 3;
  return pontosVitoria + ties;
}

// Desafio 6
function highestCount(numeros) {
  let maiorMumero = 0;
  let quantidade = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] > maiorMumero) {
      maiorMumero = numeros[i];
      quantidade = 1;
    } else if (numeros[i] === maiorMumero) {
      quantidade += 1;
    }
  }
  return quantidade;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let numeroCat1 = mouse - cat1;
  if (numeroCat1 < 0) {
    numeroCat1 *= -1;
  }
  let numeroCat2 = mouse - cat2;
  if (numeroCat2 < 0) {
    numeroCat2 *= -1;
  }
  if (numeroCat1 < numeroCat2) {
    return 'cat1';
  } else if (numeroCat1 > numeroCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numeros) {
  let resposta = [];
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
      resposta[i] = 'fizzBuzz';
    } else if (numeros[i] % 3 === 0) {
      resposta[i] = 'fizz';
    } else if (numeros[i] % 5 === 0) {
      resposta[i] = 'buzz';
    } else {
      resposta[i] = 'bug!';
    }
  }
  return resposta;
}

// Desafio 9
function encode(vogais) {
  vogaisPorNumeros = {
    a = 1,
    e = 2,
    i = 3,
    o = 4,
    u = 5,
  };

  let arrayNumeros = [];
  let resultado = 0;

  for (let i in vogais) {
    arrayNumeros[i] = vogaisPorNumeros[vogais[i]];
  }

  for (let i in arrayNumeros) {
    if (arrayNumeros[i] < arrayNumeros[i +1]) {
      arrayNumeros[i +1] = arrayNumeros[i +1] - arrayNumeros[i];
    } else {
      resultado += arrayNumeros[i];
    }
  return resultado
  }
}

function decode(numeros) {
  numerosPorVogais = {
    1 : a,
    2 : e,
    3 : i,
    4 : o,
    5 : u,
  };

  let arrayNumeros = [];
  let resultado = 0;

  for (let i in numeros) {
    arrayNumeros[i] = numerosPorVogais[numeros[i]];
  }

  for (let i in arrayNumeros) {
    if (arrayNumeros[i] < arrayNumeros[i +1]) {
      arrayNumeros[i +1] = arrayNumeros[i +1] - arrayNumeros[i];
    } else {
      resultado += arrayNumeros[i];
    }
  return resultado
  }
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

