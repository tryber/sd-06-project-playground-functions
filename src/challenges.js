// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3
function splitSentence(exemplo) {
  let words = exemplo.split(' ');
  return words;
}
// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, + ${array[0]}`;
}
// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(numero) {
  var maiorNumero = -10000;
  var repetidor = 1;
  for (var c = 0; c < numero.length; c += 1) {
    if (numero[c] > maiorNumero) {
      maiorNumero = numero[c];
      repetidor = 1;
    } else if (numero[c] == maiorNumero) {
      repetidor += 1;
    }
  }
  return repetidor;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = 0;
  let distancia2 = 0;
  let mesmaDistancia = 'os gatos trombam e o rato foge';
  if (cat1 >= mouse) {
    distancia1 = cat1 - mouse;
  } else {
    distancia1 = mouse - cat1;
  }
  if (cat2 >= mouse) {
    distancia2 = cat2 - mouse;
  } else {
    distancia2 = mouse - cat2;
  }
  if (distancia1 > distancia2) {
    return 'cat2';
  } else if (distancia2 > distancia1) {
    return 'cat1';
  } else if (distancia1 === distancia2) {
    return mesmaDistancia;
  }
}
// Desafio 8
function fizzBuzz(numeros) {
  let resposta = [];
  for (let c = 0; c < numeros.length; c += 1) {
    if (numeros[c] % 3 === 0 && numeros[c] % 5 === 0) {
      resposta.push("fizzBuzz");
    } else if (numeros[c] % 3 === 0) {
      resposta.push("fizz");
    } else if (numeros[c] % 5 === 0) {
      resposta.push("buzz");
    } else {
      resposta.push("bug!");
    }
  }
  return resposta;
}
let numeros = [10, 20, 30, 40];
console.log(fizzBuzz(numeros));

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
};
