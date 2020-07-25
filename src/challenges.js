// Desafio 1

// JavaScript possui um operador lógico &&, o qual recebe dois valores e
// retorna true se ambos os valores são verdadeiros,
// e retorna false se algum dos valores não o for.
// Considerando isso, crie uma função chamada compareTrue que,
// ao receber dois booleanos:
// Retorne true se ambos os valores são verdadeiros;
// Retorne false se um ou ambos os parâmetros forem falsos.
// Faça a função utilizando o operador &&.

function compareTrue(value1, value2) {
  return value1 && value2;
}

// TESTE
// console.log(compareTrue(false, false));

// _______________________________________________________________________________________________
// Desafio 2

// Escreva uma função com o nome calcArea que receba um valor de base
// (chamado base) e outro de altura (chamado height) de um triângulo
// e retorne o cálculo da sua área.
// Lembre-se que a área de um triângulo é calculada através da seguinte
// fórmula: (base * altura) / 2.

function calcArea(base, height) {
  return (base * height) / 2;
}

// TESTE
// console.log(calcArea(5, 4));

// _______________________________________________________________________________________________
// Desafio 3

// Escreva uma função com o nome splitSentence, a qual receberá uma string e
// retornará uma array de strings separadas por cada espaço
// na string original.
// Exemplo: se a função receber a string "go Trybe", o retorno
// deverá ser ['go', 'Trybe'].

function splitSentence(word) {
  return word.split(' ');
}

// TESTE
// console.log(splitSentence('Hello World'));

// _______________________________________________________________________________________________
// Desafio 4

// Escreva uma função com o nome concatName que, ao receber uma array
// de strings, retorne uma string com o formato
// 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.

// Isso quer dizer que, caso o parâmetro passado para concatName seja a Array
// ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'],
// a função deverá retornar // Paolillo, Lucas.

function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// TESTE
let testArray = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(testArray));

// _______________________________________________________________________________________________
// Desafio 5

// Escreva uma função com o nome footballPoints que receba o número de
// vitórias (esse parâmetro deverá se chamar wins) e o número de empates
// (esse parâmetro deverá se chamar ties) e retorne a quantidade de pontos
// que o time marcou em um campeonato.

// Para tanto, considere que cada vitória vale 3 pontos e
// cada empate vale 1 ponto.

function footballPoints(wins, ties) {
  let totalOfPoints = (wins * 3) + ties;
  return totalOfPoints;
}

// TESTE
// console.log(footballPoints(12, 4));

// _______________________________________________________________________________________________
// Desafio 6

// Repetição do maior número
// Escreva uma função chamada highestCount que, ao receber uma array de números,
// retorne a quantidade de vezes que o maior deles se repete.

// Exemplo: caso o parâmetro de highestCount seja uma array com valores [9, 1, 2, 3, 9, 5, 7],
// a função deverá retornar 2, que é a quantidade de vezes que o número 9
// (maior número do array) se repete.

function findHighestNumber(numbersArray) {
  let highestNumber = 0;

  for (let index in numbersArray) {
    if (numbersArray[index] > highestNumber) {
      highestNumber = numbersArray[index];
    }
  }
  return highestNumber;
}

function highestCount(numbersArray) {
  let number = findHighestNumber(numbersArray);
  let counter = 0;

  for (let index in numbersArray) {
    if (numbersArray[index] === number) {
      counter += 1;
    }
  }
  return counter;
}

// TESTE
// let testArray = [9, 1, 2, 9, 9, 5, 7, 9];
// console.log(highestCount(testArray));

// _______________________________________________________________________________________________
// Desafio 7

// Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que
// ambos estão atrás de um rato chamado mouse. Imagine que cada um dos três
// animais está em uma posição representada por um número.

// Sabendo disso, crie uma função chamada catAndMouse que, ao receber a
// posição de mouse, cat1 e cat2, nessa ordem, calcule as distâncias entre
// o rato e os gatos e retorne qual dos felinos irá alcançar o rato primeiro
// (sendo aquele que estará mais perto).

// Exemplo: caso o gato cat2 esteja a 2 unidades de distância do rato, e cat1
// esteja a 3 unidades, sua função deverá retornar cat2.

// Caso os gatos estejam na mesma distância do rato, a função deverá retornar
// a string "os gatos trombam e o rato foge".

function catAndMouse(mouse, cat1, cat2) {
  let distanceMouseCatOne = Math.abs(mouse - cat1);
  let distanceMouseCatTwo = Math.abs(mouse - cat2);
  let result = 'os gatos trombam e o rato foge';

  if (distanceMouseCatOne < distanceMouseCatTwo) {
    result = 'cat1';
  } else if (distanceMouseCatOne > distanceMouseCatTwo) {
    result = 'cat2';
  }
  return result;
}

// TESTE
// console.log(catAndMouse(0, 3, 2));

// _______________________________________________________________________________________________
// Desafio 8

// Crie uma função chamada fizzBuzz que receba uma array de números e retorne
// uma array da seguinte forma:

// Para cada número da Array que seja divisível por 3,
// apresente uma string "fizz";

// Para cada número da Array que seja divisível por 5,
// apresente uma string "buzz";

// Caso o número seja divisível por 3 e 5,
// Retorne a string "fizzBuzz";

// Caso o número não possa ser dividido por 3 nem por 5,
// retorne a string "bug!";

// Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função
// deveráretornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].


function fizzBuzz(myArray) {
  let newArray = [];

  for (let index in myArray) {
    if (myArray[index] % 3 === 0 && myArray[index] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (myArray[index] % 5 === 0) {
      newArray.push('buzz');
    } else if (myArray[index] % 3 === 0) {
      newArray.push('fizz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// TESTE
// let testArray = [2, 15, 7, 9, 45];
// console.log(fizzBuzz(testArray));

// _______________________________________________________________________________________________
// Desafio 9

// Codifique e Decodifique
// Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro,
// deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// Ou seja, caso o parâmetro de encode seja "hi there!", o retorno deverá ser "h3 th2r2!".

// A segunda função deverá se chamar decode e faz o contrário de encode - ou seja,
// recebe uma string contendo números no lugar de letras minúsculas e retornará
// uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode
// seja "h3 th2r2!", o retorno deverá ser "hi there!").

function encode(lettersString) {
  let myStringArray = lettersString.split('');

  for (let index = 0; index < myStringArray.length; index += 1) {
    switch (myStringArray[index]) {
      case 'a':
        myStringArray[index] = 1;
        break;
      case 'e':
        myStringArray[index] = 2;
        break;
      case 'i':
        myStringArray[index] = 3;
        break;
      case 'o':
        myStringArray[index] = 4;
        break;
      case 'u':
        myStringArray[index] = 5;
        break;
      default:
        break;
    }
  }
  let newString = myStringArray.join('');
  return newString
}

// TESTE
// let stringTest = 'hi there!';
// console.log(encode(stringTest));

function decode(numbersString) {
  let myStringArray = numbersString.split('');

  for (let index = 0; index < myStringArray.length; index += 1) {
    switch (myStringArray[index]) {
      case '1':
        myStringArray[index] = 'a';
        break;
      case '2':
        myStringArray[index] = 'e';
        break;
      case '3':
        myStringArray[index] = 'i';
        break;
      case '4':
        myStringArray[index] = 'o';
        break;
      case '5':
        myStringArray[index] = 'u';
        break;
      default:
        break;
    }
  }
  let newString = myStringArray.join('');
  return newString
}

// TESTE
// let stringTest = 'h3 th2r2!';
// console.log(decode(stringTest));

// _______________________________________________________________________________________________
// Desafio 10

// Lista de tecnologias
// Crie uma função que recebe um array de nomes de tecnologias que você quer aprender.
// Essa função deve receber também um segundo parâmetro chamado name com um nome.

// Estes objetos devem ser inseridos em uma nova lista em ordem crescente
// a partir do campo tech no objeto.

// A saída da sua função deve ser uma lista de objetos ordenada pelo campo tech dos objetos
// com o formato acima.

// Caso o array venha vazio sua função deve retornar 'Vazio!'

function compare(a, b) {
  if (a.tech < b.tech) {
    return -1;
  }
  if (a.tech > b.tech) {
    return 1;
  }
  return 0;
}

function techList(techName, name) {
  let myList = [];

  if (techName.length !== 0) {
    for (let index = 0; index < techName.length; index += 1) {
      let myObject = { tech: techName[index], name: name };
      myList[index] = myObject;
    }
    return myList.sort(compare);
  }
  return 'Vazio!';
}

// TESTE
// let testArray = [];
// let testArray = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// console.log(techList(testArray, 'Zeca'));

// _______________________________________________________________________________________________
// Desafio 11

// Número de telefone
// Crie uma função chamada generatePhoneNumber que receba uma array com 11 números e
// retorne um número de telefone, respeitando parênteses, traços e espaços.

// Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1],
// generatePhoneNumber deverá retornar (12) 34567-8901.

// Se a função receber um array com tamanho diferente de 11, a mesma deve retornar
// "Array com tamanho incorreto.".

// Caso algum dos números da array seja menor que 0, maior que 9 ou
// "não é possível gerar um número de telefone com esses valores".

function sizeOfArray(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return false;
  }
  return true;
}
function threeTimesTest(phoneNumber) {
  let threeTimesCounter = 0;
  for (let index = 0; index < phoneNumber.length; index += 1) {
    let threeTimesNumbers = phoneNumber[index];
    for (let j = 0; j < phoneNumber.length; j += 1) {
      if (threeTimesNumbers === phoneNumber[j]) {
        threeTimesCounter += 1;
      }
    }
    if (threeTimesCounter > 2) {
      return false;
    }
    threeTimesCounter = 0;
  }
  return true;
}

function numbersTest(phoneNumber) {
  for (let index = 0; index < phoneNumber.length; index += 1) {
    let numbers = phoneNumber[index];
    if (numbers < 0 || numbers > 9) {
      return false;
    }
  }
  return true;
}

function generatePhoneNumber(phoneNumber) {
  let testResult1 = sizeOfArray(phoneNumber);
  let testResult2 = threeTimesTest(phoneNumber);
  let testResult3 = numbersTest(phoneNumber);

  if (testResult1 === false) {
    return 'Array com tamanho incorreto.';
  } else if (testResult2 === false || testResult3 === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${phoneNumber[0]}${phoneNumber[1]}) ${phoneNumber[2]}${phoneNumber[3]}${phoneNumber[4]}${phoneNumber[5]}${phoneNumber[6]}-${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}${phoneNumber[10]}`;
}

// TESTE
// let testArray = [1, 5, 9, 9, 7, 7, 4, 6, 4, 5, 8];
// console.log(generatePhoneNumber(testArray));

// _______________________________________________________________________________________________
// Desafio 12

// Condição de existência de um triângulo
// Um triângulo é composto de três linhas: lineA, lineB e lineC. Crie uma função chamada
// triangleCheck que deverá receber as três linhas como parâmetro e retornar se
// é possível formar um triângulo com os valores apresentados de cada linha

// Para tanto, tenha em mente algumas considerações:

// Para que seja possível formar um triângulo, é necessário que
// a medida de qualquer um dos lados seja menor que a soma das medidas
// dos outros dois e maior que o valor absoluto da diferença entre essas medidas.

// Para obter o valor absoluto de um número em JavaScript, pesquise pela função Math.abs.

// O retorno da sua função deverá ser um booleano.

// Exemplo: o retorno de triangleCheck(10, 14, 8) deverá ser true.

function triangleCheck(lA, lB, lC) {
  let returnMessage = false;

  if (lA < lB + lC && lB < lA + lC && lC < lA + lB) {
    returnMessage = true;
  }
  if (lA > Math.abs(lB - lC) && lB > Math.abs(lA - lC) && lC > Math.abs(lA - lB)) {
    returnMessage = true;
  }
  return returnMessage;
}

// TESTE
// console.log(triangleCheck(10, 14, 8));

// _______________________________________________________________________________________________
// Desafio 13 (the last, but not the least)

// Segundo as regras desse bar, a cada bebida deve-se beber um copo de água
// para que não se tenha ressaca.

// Crie a função hydrate que recebe uma string, e retorne a sugestão de quantos
// copos de água você deve beber. Exemplos:

// String recebida:
    // "1 cerveja"
// String retornada:
  // "1 copo de água"
// String recebida:
  // "1 cachaça, 5 cervejas e 1 copo de vinho"
// String retornada:
  // "7 copos de água"

// Notas

// Para simplificar, consideraremos que qualquer coisa com um número à frente é uma bebida
// e que a sua string sempre virá com o formato quantidade (em número) + tipo da bebida.

// O número na frente de cada bebida está no intervalo entre 1 e 9.

// Dica: pesquise por algo similar a get all integers inside a string js.

function hydrate(string) {
  let number = string.replace(/\D/g, '');
  let sum = 0;

  for (let index = 0; index < number.length; index += 1) {
    sum += parseInt(number[index], 10);
  }
  if (sum > 1) {
    return `${sum} copos de água`;
  }
  return `${sum} copo de água`;
}

// TESTE
// console.log(hydrate('1 cerveja'));
// console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

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
