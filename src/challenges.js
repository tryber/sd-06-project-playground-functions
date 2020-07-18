// Desafio 1
function compareTrue(valorUm, ValorDois) {
  if (valorUm === true && ValorDois === true) {
    return true;
  }
  return false;
}
// console.log(compareTrue(true, true)); - - teste
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
// console.log(calcArea(5, 4)); - - teste
// Desafio 3
function splitSentence(frase) {
  let palavras = [];
  let uniaoPalavra = '';
  for (let contador = 0; contador < frase.length; contador += 1) {
    if (frase[contador] !== ' ') {
      uniaoPalavra += frase[contador]
    } else {
      palavras.push(uniaoPalavra);
      uniaoPalavra = '';
    } if (contador === frase.length - 1) {
      palavras.push(uniaoPalavra);
      uniaoPalavra = '';
    }
  } return palavras;
}
// console.log(splitSentence("ola mundo")); - - teste exercicio 3
// Desafio 4
function concatName(lista) {
  let guardaNomes = '';
  guardaNomes = lista[lista.length - 1] + ', ' + lista[0];
  return guardaNomes;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));teste questão 4
// Desafio 5
function footballPoints(wins, ties) {
  let totalPontos = 0;
  totalPontos = (wins * 3) + (ties * 1);
  return totalPontos;
}
// console.log(footballPoints(1,10));
// Desafio 6
function highestCount(lista) {
  let valorMaiorAtual = lista[0];
  let qtdNumIguaisAtual = 1;
  for (let indice = 0; indice < lista.length; indice += 1) {
    if (valorMaiorAtual < lista[indice + 1]) {
      valorMaiorAtual = lista[indice + 1];
      qtdNumIguaisAtual = 1;
    } else if (valorMaiorAtual === lista[indice + 1]) {
      qtdNumIguaisAtual += 1;
    }
  } return (qtdNumIguaisAtual)
}
// let list = [0, 4, 4, 4, 9, 2, 1];
// console.log(highestCount(list)); teste 06
// Desafio 7
function trataNeg(valor) {
  if (valor < 0) {
    valor = valor * (-1);
  } return valor
}
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = mouse - cat1;
  distanciaCat1 = trataNeg(distanciaCat1);
  let distanciaCat2 = mouse - cat2;
  distanciaCat2 = trataNeg(distanciaCat2);
  if (distanciaCat1 < distanciaCat2) {
    return ('cat1');
  } else if (distanciaCat1 > distanciaCat2) {
    return ('cat2');
  } return ('os gatos trombam e o rato foge');
}
// console.log(catAndMouse(1, 1, 2)); teste 07
// Desafio 8
function fizzBuzz(numeros) {
  let respostas = [];
  for (let indice = 0; indice < numeros.length; indice += 1) {
    if (numeros[indice] % 3 === 0 && numeros[indice] % 5 === 0) {
      respostas.push('fizzBuzz');
    } else if (numeros[indice] % 3 !== 0 && numeros[indice] % 5 !== 0) {
      respostas.push('bug!');
    } else if (numeros[indice] % 3 === 0) {
      respostas.push('fizz!');
    } else if (numeros[indice] % 5 === 0) {
      respostas.push('buzz!');
    }
  } return respostas
}
// let n = [2, 15, 7, 9, 45]; console.log(fizzBuzz(n));
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
