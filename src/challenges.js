// Projeto - Ricardo Ribeiro

// ------------- Desafio 1
let var1 = false;
let var2 = true;
function compareTrue(myVar1, myVar2) {
  let result = false;
  if (myVar1 && myVar2) {
    result = true;
  }
  return result
}
// console.log(compareTrue(var1, var2));


// -------------- Desafio 2
let bas = 12;
let hei = 8;
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area
}
// console.log(calcArea(bas, hei));


// --------------- Desafio 3
// let frase = 'go Trybe';
// let fraseSeparada = [];
function splitSentence(myText) {
  let word = '';
  for (let i = 0; i < myText.length; i += 1) {
    if (myText[i] !== ' ') {
      word += myText[i];
    } else {
      fraseSeparada.push(word);
      word = '';
    }
  }
  // inclui a ultima palavra
  fraseSeparada.push(word);  
  return fraseSeparada;
}
// console.log(splitSentence(frase));


// ---------------- Desafio 4
let name = ['Ricardo', 'Alexandre', 'de', 'Souza', 'Ribeiro']
function concatName(myName) {
  let nameConcat = myName[myName.length-1] + ', ' + myName[0]
  return nameConcat
}
// console.log(concatName(name));


// --------------- Desafio 5
let win = 10;
let tie = 7;
function footballPoints(wins, ties) {
  let points = 0;
  points = (wins * 3) + (ties * 1);
  return points;
}
// console.log("Total de pontos: " + footballPoints(win, tie));


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
}
