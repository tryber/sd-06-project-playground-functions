// Projeto alterado por mim para o commit inicial!!
// Vamos com tudo!!

// Desafio 1
function compareTrue(valor1, valor2) {
  if ((valor1 === true) && (valor2 === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  let nome = '';
  let arrayNome = [];
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] !== ' ') {
      nome += str[index];
    } else {
      arrayNome.push(nome);
      nome = '';
    }
  }
  arrayNome.push(nome);
  return arrayNome;
}

// Desafio 4
function concatName(trocaNome) {
  let primeiroNome = trocaNome[trocaNome.length - 1];
  let ultimoNome = trocaNome[0];
  let stringFinal = primeiroNome + ", " + ultimoNome;
  return stringFinal;  
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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
