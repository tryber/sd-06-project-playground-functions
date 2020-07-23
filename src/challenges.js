// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
}
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let solucao;
  let primeiro = array[0];
  let ultimo = array[array.length - 1];
  solucao = (ultimo + ', ' + primeiro);
  return solucao;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(numeral) {
  let maiorNumero = 0;
  let maiorContagem = 0;

  for (let number in numeral) {
    if (numeral[number] > maiorNumero) {
      maiorNumero = numeral[number];
      maiorContagem = 1;
    } else if (numeral[number] === maiorNumero) {
      maiorContagem += 1;
    }
  }
  return maiorContagem;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let Gato1 = Math.abs(cat1 - mouse);
  let Gato2 = Math.abs(cat2 - mouse);

  if (Gato1 === Gato2) {
    return 'os gatos trombam e o rato foge';
  } else if (Gato1 < Gato2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(parametro) {
  let resultado = [];

  for (let i = 0; i < parametro.length; i += 1) {
    let parametro3 = parametro[i] % 3 === 0;
    let parametro5 = parametro[i] % 5 === 0;
    if (parametro3 && parametro5) {
      resultado.push('fizzBuzz');
    } else if (parametro3) {
      resultado.push('fizz');
    } else if (parametro5) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
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
