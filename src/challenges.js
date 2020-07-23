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
  return `${array[array.length - 1]}, ${array[0]}`;
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
let num = [10, 20, 30, 40, 50];
console.log(fizzBuzz(num))
// Desafio 9
function encode(letras) {
  let novasLetras = letras;
  for(let c = 0; c < letras.length; c +=1 ){
    switch (letras[c]) {
      case 'a': novasLetras = novasLetras.replace('a', '1');break;
      case 'e': novasLetras = novasLetras.replace('e', '2');break;
      case 'i': novasLetras = novasLetras.replace('i', '3');break;
      case 'o': novasLetras = novasLetras.replace('o', '4');break;
      case 'u': novasLetras = novasLetras.replace('u', '5');break;
      default:
    }
  }
  return novasLetras
}
let palavras = 'muitas pessoas estao loucas';
palavras2 = encode(palavras)

function decode(letras) {
  let novasLetras = letras;
  for(let c = 0; c < letras.length; c +=1 ){
    switch (letras[c]) {
      case '1': novasLetras = novasLetras.replace('1', 'a');break;
      case '2': novasLetras = novasLetras.replace('2', 'e');break;
      case '3': novasLetras = novasLetras.replace('3', 'i');break;
      case '4': novasLetras = novasLetras.replace('4', 'o');break;
      case '5': novasLetras = novasLetras.replace('5', 'u');break;
      default:
    }
  }
  return novasLetras
}
console.log(decode(encode(palavras)))

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
