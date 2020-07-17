// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  let resultado = false
  if (value1 === true && value2 === true) {
    resultado = true;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2
  return area
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let string = '';
  for (let i = array.length - 1; i >= array.length - 1; i -= 1) {
    string += array[i];
  }
  string += ', ';
  for (let n = 0; n <= 0; n += 1) {
    string += array[n];
  }
  return string
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let vitorias = wins * 3;
  let pontos = vitorias + ties;
  return pontos;
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let maiorNumero = 0;
  let contagem = 0;
  for (let n = 0; n < numeros.length; n += 1) {
    if (maiorNumero < numeros[n]) {
      maiorNumero = numeros[n]
    }
  }
  for (let n = 0; n < numeros.length; n += 1) {
    if (maiorNumero === numeros[n]) {
      contagem += 1;
    }
  }
  return contagem;
}

// Desafio 7
function catAndMouse(positionMouse, positionCat1, positionCat2) {
  // seu código aqui
  let distanciaMouseCat1 = positionCat1 - positionMouse;
  let distanciaMouseCat2 = positionCat2 - positionMouse;
  let mensagem = '';
  if (distanciaMouseCat1 < distanciaMouseCat2) {
    mensagem = 'cat1';
  } else if (distanciaMouseCat2 < distanciaMouseCat1) {
    mensagem = 'cat2';
  } else if (distanciaMouseCat1 === distanciaMouseCat2) {
    mensagem = 'os gatos trombam e o rato foge';
  }
  return mensagem
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  // seu código aqui
  let resultado = [];
  for (let n = 0; n < arrayNumeros.length; n += 1) {
    if (arrayNumeros[n] % 3 === 0 && arrayNumeros[n] % 5 === 0) {
      resultado.push("fizzBuzz");
    } else if (arrayNumeros[n] % 3 === 0){
      resultado.push("fizz");
    } else if (arrayNumeros[n % 5 === 0]) {
      resultado.push("buzz")
    } else {
      resultado.push(bug!);
    }
  }
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
