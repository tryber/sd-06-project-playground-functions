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
    valor = (-1) * valor;
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
      respostas.push('fizz');
    } else if (numeros[indice] % 5 === 0) {
      respostas.push('buzz');
    }
  } return respostas
}
// let n = [7,9]; console.log(fizzBuzz(n));
// Desafio 9
function encode(subVogais) {
  let vogal = ['a', 'e', 'i', 'o', 'u'];
  let nova = '';
  let conta = 0;
  for (let contador = 0; contador < subVogais.length; contador += 1) {
    for (let indice = 0; indice < subVogais.length; indice += 1) {
      if (vogal[contador] === subVogais[indice]) {
        switch (vogal[contador]) {
          case 'a':
            nova = subVogais.replace('a', '1');
            subVogais = nova;
            if (subVogais[subVogais.length] === vogal[contador]) {
              conta = entrada.length;
            } break;
          case 'e':
            nova = subVogais.replace('e', '2');
            subVogais = nova;
            if (subVogais[subVogais.length - 1] === vogal[contador]) {
              conta = entrada.length;
            } break;
          case 'i':
            nova = subVogais.replace('i', '3');
            subVogais = nova;
            if (subVogais[subVogais.length] === vogal[contador]) {
              conta = entrada.length;
            } break;
          case 'o':
            nova = subVogais.replace('o', '4');
            subVogais = nova;
            if (subVogais[subVogais.length - 1] === vogal[contador]) {
              conta = entrada.length;
            } break;
          case 'u':
            nova = subVogais.replace('u', '5');
            subVogais = nova;
            if (subVogais[subVogais.length] === vogal[contador]) {
              conta = entrada.length;
            } break;
        }
      }
    } if (conta === subVogais.length) {
      break;
    }
  } return subVogais;
}
// console.log(encode('uoiea'));
function decode(subNum) {
  let numList = ['1', '2', '3', '4', '5'];
  let novaDec = '';
  let contaDec = 0;
  for (let contador = 0; contador < subNum.length; contador += 1) {
    for (let indice = 0; indice < subNum.length; indice += 1) {
      if (numList[contador] === subNum[indice]) {
        switch (numList[contador]) {
          case '1':
            novaDec = subNum.replace('1', 'a');
            subNum = novaDec;
            if (subNum[subNum.length] === numList[contador]) {
              contaDec = entrada.length;
            } break;
          case '2':
            novaDec = subNum.replace('2', 'e');
            subNum = novaDec;
            if (subNum[subNum.length - 1] === numList[contador]) {
              contaDec = entrada.length;
            } break;
          case '3':
            novaDec = subNum.replace('3', 'i');
            subNum = novaDec;
            if (subNum[subNum.length] === numList[contador]) {
              contaDec = entrada.length;
            } break;
          case '4':
            novaDec = subNum.replace('4', 'o');
            subNum = novaDec;
            if (subNum[subNum.length - 1] === numList[contador]) {
              contaDec = entrada.length;
            } break;
          case '5':
            novaDec = subNum.replace('5', 'u');
            subNum = novaDec;
            if (subNum[subNum.length] === numList[contador]) {
              contaDec = entrada.length;
            } break;
        }
      }
    } if (contaDec === subNum.length) {
      break;
    }
  } return subNum;
}
// console.log(decode('h3 th2r2!'));
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
