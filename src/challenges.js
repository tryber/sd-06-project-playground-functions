// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
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
  let string = "";
  for (let i = array.length - 1; i >= 0; i -= array.length - 1) {
    string.push(array[i])
  }
  return string
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  vitorias = wins*3;
  let pontos = vitorias - ties;
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
  for (n = 0; n<numeros.length; n+=1) {
    if (maiorNumero === numeros[n]) {
      contagem += 1;
    }
  }
  return contagem;
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
