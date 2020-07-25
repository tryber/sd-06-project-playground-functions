// Desafio 1
// Verificar se value1 e value2 são true
// Return boolean
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// console.log('<---- Desafio 1 ---->')
// console.log(compareTrue(true, true));

// Desafio 2
// Cálculo área de um triângulo - com base -> base / altura -> height
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// console.log('<---- Desafio 2 ---->');
// console.log(calcArea(10, 5));

// Desafio 3
// Função receberá uma string e retornará uma array de strings separadas por
// cada espaço na string original
function splitSentence(stringDesafio3) {
  let arrayDesafio3 = stringDesafio3.split(' ');
  return arrayDesafio3;
}

// console.log('<---- Desafio 3 ---->');
// console.log(splitSentence('Me dê papai'));

// Desafio 4
// Receber uma array de strings, retorne uma string com o formato
// 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.
function concatName(stringDesafio4) {
  let firstDesafio4 = stringDesafio4[0];
  let lastDesafio4 = stringDesafio4[stringDesafio4.length - 1];
  let separatorDesafio4 = [', '];
  return lastDesafio4.concat(separatorDesafio4, firstDesafio4);
}

// console.log('<---- Desafio 4 ---->');
// console.log(concatName(['Mais', 'um', 'desafio', 'concluído']));

// Desafio 5
// Receba o número de vitórias (esse parâmetro deverá se chamar wins) e o
// número de empates (esse parâmetro deverá se chamar ties) e retorne a
// quantidade de pontos que o time marcou em um campeonato.
// considere que cada vitória vale 3 pontos e cada empate vale 1 ponto
function footballPoints(wins, ties) {
  let scoreWins = wins * 3;
  let scoreTies = ties * 1;
  let totalScore = scoreWins + scoreTies;
  return totalScore;
}

// console.log('<---- Desafio 5 ---->');
// console.log(footballPoints(14, 8));

// Desafio 6
// Ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete
function highestCount(numbersDesafio6) {
  let highestNumber = 0;
  let countNumber = 0;
  for (let i = 0; i < numbersDesafio6.length; i += 1) {
    if (highestNumber < numbersDesafio6[i]) {
      highestNumber = numbersDesafio6[i];
    }
  }
  for (let i = 0; i < numbersDesafio6.length; i += 1) {
    if (highestNumber === numbersDesafio6[i]) {
      countNumber += 1;
    }
  }
  return countNumber;
}

// console.log('<---- Desafio 6 ---->');
// console.log(highestCount());

// Desafio 7
// Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2
// e que ambos estão atrás de um rato chamado mouse
// Imagine que cada um dos três animais está em uma posição
// representada por um número
// Crie uma função chamada catAndMouse que, ao receber a posição
// de mouse, cat1 e cat2, nessa ordem, calcule as distâncias entre o rato
// e os gatos e retorne qual dos felinos irá alcançar o rato primeiro
// sendo aquele que estará mais perto
// Caso os gatos estejam na mesma distância do rato
// a função deverá retornar a string 'os gatos trombam e o rato foge'
function catAndMouse(mouse, cat1, cat2) {
  let posCat1 = cat1 - mouse;
  let posCat2 = cat2 - mouse;
  if (
    posCat1 === posCat2 ||
    posCat1 * -1 === posCat2 ||
    posCat2 * -1 === posCat1
  ) {
    return 'os gatos trombam e o rato foge';
  } else if (posCat1 < posCat2) {
    return 'cat1';
  }
  return 'cat2';
}

// console.log('<---- Desafio 7 ---->');
// console.log(catAndMouse(1, 3, 2));

// Desafio 8
// Para cada número da Array que seja divisível por 3, apresente uma string fizz
// Para cada número da Array que seja divisível por 5, apresente uma string buzz
// Caso o número seja divisível por 3 ou 5, retorne a string fizzBuzz
// Caso o número não possa ser dividido por 3 nem por 5, retorne a string bug!
function fizzBuzz(numberD8) {
  let resultDesafio8 = [];
  for (let i = 0; i < numberD8.length; i += 1) {
    if (numberD8[i] % 3 === 0 && numberD8[i] % 5 === 0) {
      resultDesafio8.push('fizzBuzz');
    } else if (numberD8[i] % 3 === 0) {
      resultDesafio8.push('fizz');
    } else if (numberD8[i] % 5 === 0) {
      resultDesafio8.push('buzz');
    } else {
      resultDesafio8.push('bug!');
    }
  }
  return resultDesafio8;
}

// console.log('<---- Desafio 8 ---->');
// console.log(fizzBuzz([9, 25, 30, 2]));

// Desafio 9
// Crie duas funções: a primeira deverá se chamar encode e, ao receber uma
// string como parâmetro, deverá trocar todas as vogais minúsculas por números
// de acordo com o formato a seguir: a -> 1 e -> 2 i -> 3 o -> 4 u -> 5
// A segunda função deverá se chamar decode e faz o contrário de encode - ou
// seja, recebe uma string contendo números no lugar de letras minúsculas e
// retornará uma string com vogais minúsculas no lugar dos números
function encode(stringEncode) {
  let stringEncodeRet = stringEncode
    .replace(/e/g, '2')
    .replace(/a/g, '1')
    .replace(/i/g, '3')
    .replace(/u/g, '5')
    .replace(/o/g, '4');

  return stringEncodeRet;
}

// console.log('<---- Desafio 9-Encode ---->');
// console.log(encode('testando frase'));

function decode(stringDecode) {
  let stringDecodeRet = stringDecode
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');

  return stringDecodeRet;
}

// console.log('<---- Desafio 9-Decode ---->');
// console.log(decode('t2st1nd4 fr1s2'));

// Desafio 10
// Crie uma função que recebe um array de nomes de tecnologias que você quer
// aprender. Essa função deve receber também um segundo parâmetro chamado name
// com um nome. Com a seguinte estrutura
// {
//   tech: 'NomeTech',
//   nome: name
// }
// Estes objetos devem ser inseridos em uma nova lista em ordem crescente a
// partir do campo tech no objeto
// Para cada tecnologia no array, crie um objeto
// A saída da sua função deve ser uma lista de objetos ordenada pelo campo tech
function techList() {}

// console.log('<---- Desafio 10 ---->');
// console.log(techList());

// Desafio 11
function checkOccurrences(number, arrayNumbers) {
  let contarArray = 0;

  for (let n = 0; n <= arrayNumbers.length - 1; n += 1) {
    if (number === arrayNumbers[n]) {
      contarArray += 1;
    }
  }

  return contarArray >= 3;
}

function generatePhoneNumber(arrayPhone) {
  let temMaisDeTresOcorrencias = false;
  if (arrayPhone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i <= arrayPhone.length - 1; i += 1) {
    if (arrayPhone[i] < 0 || arrayPhone[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (checkOccurrences(arrayPhone[i], arrayPhone)) {
      temMaisDeTresOcorrencias = true;
      break;
    }
  }

  let arrayDdd = String(arrayPhone[0]) + String(arrayPhone[1]);
  let arrayIni =
    String(arrayPhone[2]) +
    String(arrayPhone[3]) +
    String(arrayPhone[4]) +
    String(arrayPhone[5]) +
    String(arrayPhone[6]);
  let arrayFin =
    String(arrayPhone[7]) +
    String(arrayPhone[8]) +
    String(arrayPhone[9]) +
    String(arrayPhone[10]);
  let numberPhone = '';

  if (temMaisDeTresOcorrencias) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
    return (numberPhone =
      '(' + arrayDdd + ')' + ' ' + arrayIni + '-' + arrayFin);
}

// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
// Um triângulo é composto de três linhas: lineA, lineB e lineC.
// Crie uma função chamada triangleCheck que deverá receber
// as três linhas como parâmetro e retornar se é
// possível formar um triângulo com os valores
// apresentados de cada linha
function triangleCheck(lineA, lineB, lineC) {
  let mdA = Math.abs(lineB - lineC);
  let mdB = Math.abs(lineA - lineC);
  let mdC = Math.abs(lineA - lineB);
  let sdA = lineB + lineC;
  let sdB = lineA + lineC;
  let sdC = lineA + lineB;

  if (
    mdA < lineA &&
    sdA > lineA &&
    mdB < lineB &&
    sdB > lineB &&
    mdC < lineC &&
    sdC > lineC
  ) {
    return true;
  }
  return false;
}

// console.log('<---- Desafio 12 ---->');
// console.log(triangleCheck(16, 20, 30))

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
