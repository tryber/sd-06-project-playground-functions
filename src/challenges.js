// Desafio 1 .
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 && param2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let acumulador = "";
  let novaLista = [];
  
  for (let indice in frase) {
    let elemento = frase[indice]
    if (elemento !== " ") {
      acumulador += elemento;
    } else {
      novaLista.push(acumulador);
      acumulador = "";
    }
  }
  novaLista.push(acumulador)
  return novaLista;
}

// Desafio 4
function concatName(listaNomes) {
  // seu código aqui
  let ultimoNome = listaNomes.slice().pop();
  let primeiroNome = listaNomes.slice().shift();

  return `${ultimoNome}, ${primeiroNome}`;  
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let wins = wins;
  let ties = ties;
  let points = (wins * 3) + (ties);

  return points;
}

// Desafio 6
function highestCount(arrayNumeros) {
  // seu código aqui
  let maiorValor = arrayNumeros[0];
  let occorrencias = 0;

  for (let i in arrayNumeros) {
    if (arrayNumeros[i] > maiorValor) {
      maiorValor = arrayNumeros[i];
    }
  }

  for (let i in arrayNumeros) {
    if (arrayNumeros[i] === maiorValor) {
      ocorrencias++;
    }
  }
  return ocorrencias;
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
