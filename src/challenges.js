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
  guardaNomes = `${lista[lista.length - 1]}, ${lista[0]}`;
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
    if ((numeros[indice] % 3 === 0) && (numeros[indice] % 5 === 0)) {
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
// let n = [9,25,15]; console.log(fizzBuzz(n));
// Desafio 9
function comparaEsubstituiNumOuVog(vogal, numOuVogal) {
  switch (vogal) {
    case 'a':
      numOuVogal = numOuVogal.replace('a', '1');
      break;
    case 'e':
      numOuVogal = numOuVogal.replace('e', '2');
      break;
    case 'i':
      numOuVogal = numOuVogal.replace('i', '3');
      break;
    case 'o':
      numOuVogal = numOuVogal.replace('o', '4');
      break;
    case 'u':
      numOuVogal = numOuVogal.replace('u', '5');
      break;
    case '1':
      numOuVogal = numOuVogal.replace('1', 'a');
      break;
    case '2':
      numOuVogal = numOuVogal.replace('2', 'e');
      break;
    case '3':
      numOuVogal = numOuVogal.replace('3', 'i');
      break;
    case '4':
      numOuVogal = numOuVogal.replace('4', 'o');
      break;
    case '5':
      numOuVogal = numOuVogal.replace('5', 'u');
      break;
    default:
      console.log('variavel não encontrada')
      break;
  } return numOuVogal;
}
function encode(subVogais) {
  let vogal = ['a', 'e', 'i', 'o', 'u'];
  for (let contador = 0; contador < vogal.length; contador += 1) {
    for (let indice = 0; indice < subVogais.length; indice += 1) {
      if (vogal[contador] === subVogais[indice]) {
        subVogais = comparaEsubstituiNumOuVog(vogal[contador], subVogais);
      }
    }
  } return subVogais;
}
// console.log(encode('se ta malucoooooouuuuuuaaaa'));
// -- ------------
function decode(subNum) {
  let numList = ['1', '2', '3', '4', '5'];
  for (let contador = 0; contador < subNum.length; contador += 1) {
    for (let indice = 0; indice < subNum.length; indice += 1) {
      if (numList[contador] === subNum[indice]) {
        subNum = comparaEsubstituiNumOuVog(numList[contador], subNum);
      }
    }
  } return subNum;
}
// console.log(decode('s2 t1 m1l5c4444445555551111'));
// Desafio 10
//-------------
function techList(listaTec, name) {
  let novaLista = [];
  // let tecnologias;
  if (listaTec.length !== 0) {
    listaTec.sort();
    for (let indice = 0; indice < listaTec.length; indice += 1) {
      let tecnologias = {
        tech: listaTec[indice],
        name: name,
      }
      novaLista.push(tecnologias);
    } return novaLista;
  } return ('Vazio!');
}
// let listaTeste=[]; // quando array esta Vazio ja se inicia em tamanho Zero
// console.log(techList(listaTeste, 'paulo'));
function numMaisRepetido(lista) {
  let qtdNumIguaisAtual = 0;
  let resposta = false;
  for (let contador = 0; contador <= lista.length; contador += 1) {
    for (let indice = 0; indice <= lista.length; indice += 1) {
      if (lista[contador] === lista[indice]) {
        qtdNumIguaisAtual += 1;
      }
    } if (qtdNumIguaisAtual >= 3) {
      resposta = true;
      break
    } qtdNumIguaisAtual = 0;
  } return (resposta);
}
// - - - - --  - -
function numMenorOrMaior(lista) {
  let resposta = false;
  for (let contador = 0; contador <= lista.length; contador += 1) {
    for (let indice = 0; indice <= lista.length; indice += 1) { // Indice laço interno;
      if ((lista[contador] < 0) || (lista[contador] > 9)) {
        resposta = true;
        break;
      }
    } if (resposta === true) {
      break;
    }
  } return (resposta);
}
// let listaa = [-2, 3, 3, 2, 2, 2,9];
// console.log(numMenor(listaa));
// Desafio 11
function generatePhoneNumber(listaNum) {
  let respostaRepete = numMaisRepetido(listaNum);
  let respostaNumM = numMenorOrMaior(listaNum);
  let telefone = '';
  if (listaNum.length !== 11) {
    return ('Array com tamanho incorreto.');
  } else if (respostaRepete === true || respostaNumM === true) {
    return ('não é possível gerar um número de telefone com esses valores')
  } else {
    for (let indice = 0; indice < listaNum.length; indice += 1) {
      if (indice < 1) {
        telefone += `(${listaNum[indice]}${listaNum[indice + 1]}) `;
      } else if (indice > 1 && indice <= 6) {
        telefone += listaNum[indice];
      } if (indice >= 7) {
        if (indice === 7) {
          telefone += '-';
        }
        telefone += listaNum[indice];
      }
    }
  } return telefone;
}
// let testando = [1, 1, 9,9,8,8,7,7,5,5,];
// console.log(generatePhoneNumber(testando))
// Desafio 12
function somaLadosTri(listaMedidas, indice) {
  let somar;
  if (indice === 0) {
    somar = listaMedidas[indice + 1] + listaMedidas[indice + 2];
  } else if (indice === 1) {
    somar = listaMedidas[indice - 1] + listaMedidas[indice + 1];
  } else if (indice === 2) {
    somar = listaMedidas[indice - 2] + listaMedidas[indice - 1];
  } return somar;
}
function subtLadosTri(listaMedidass, indice) {
  let subt;
  if (indice === 0) {
    subt = listaMedidass[indice + 1] - listaMedidass[indice + 2];
    subt = Math.abs(subt);
  } else if (indice === 1) {
    subt = listaMedidass[indice - 1] - listaMedidass[indice + 1];
    subt = Math.abs(subt);
  } else if (indice === 2) {
    subt = listaMedidass[indice - 1] - listaMedidass[indice - 2];
    subt = Math.abs(subt);
  } return subt;
}
function triangleCheck(lineA, lineB, lineC) {
  let resposta = false;
  let soma;
  let sub;
  let encapsulamento = [lineA, lineB, lineC];
  for (let indice = 0; indice < encapsulamento.length; indice += 1) {
    soma = somaLadosTri(encapsulamento, indice);
    sub = subtLadosTri(encapsulamento, indice);
    if (encapsulamento[indice] < soma && encapsulamento[indice] > sub) {
      resposta = true;
      break;
    }
  } return resposta;
}
// console.log(triangleCheck(10, 13, 2))
// Desafio 13
function hydrate(frase) {
  let numFrase;
  let numFraseSomado = 0;
  // numFrase = parseInt(frase.match(/\d/g).join(''));
  numFrase = frase.match(/\d/g); // criando um arreio de strings numeros separado em cada indice; ex['1','2','3'];
  for (let contador = 0; contador < numFrase.length; contador += 1) {
    numFraseSomado += parseInt(numFrase[contador]);
  } if (numFraseSomado === 1) {
    return (`${numFraseSomado} copo de água`);
  }return (`${numFraseSomado} copos de água`);
}
// console.log(hydrate('9 copos de cerveja'));

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
