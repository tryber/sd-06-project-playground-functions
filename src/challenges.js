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
console.log(compareTrue(true, true));


// Desafio 2
// Cálculo área de um triângulo - com base -> base / altura -> height
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// console.log('<---- Desafio 2 ---->');
console.log(calcArea(10, 5));


// Desafio 3
// Função receberá uma string e retornará uma array de strings separadas por
// cada espaço na string original
function splitSentence(stringDesafio3) {
  let arrayDesafio3 = stringDesafio3.split(' ');
  return arrayDesafio3;
}

// console.log('<---- Desafio 3 ---->');
console.log(splitSentence('Me dê papai'));


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
console.log(concatName(['Mais', 'um', 'desafio', 'concluído']));


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
console.log(footballPoints(14, 8));


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
// console.log(highestCount();


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
};
