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
  firstDesafio4 = stringDesafio4[0];
  lastDesafio4 = stringDesafio4[stringDesafio4.length - 1]
  separatorDesafio4 = [', ']
  return lastDesafio4.concat(separatorDesafio4, firstDesafio4);
}

// console.log('<---- Desafio 4 ---->');
console.log(concatName(['Mais', 'um', 'desafio', 'concluído']));


// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
};
