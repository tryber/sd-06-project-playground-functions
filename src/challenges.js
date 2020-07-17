// Desafio 1
function compareTrue(booleano1, booleano2) {
  // seu código aqui
  let booleanoResultado = false;
  if (booleano1 && booleano2){
    booleanoResultado = true;
  }
  return booleanoResultado;
}
// let valor1 = false;
// let valor2 = false;
// console.log(compareTrue(valor1, valor2));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}
// let valor1 = 10;
// let valor2 = 50;
// console.log(calcArea(valor1, valor2));

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let palavrasDivididas = [];
  let palavra = "";
  for (let n = 0; n < string.length; n += 1){
    if (string[n] !== " " && n + 1 < string.length){
      palavra += string[n];
    }else if (n + 1 === string.length){
      palavra += string[n];
      palavrasDivididas.push(palavra);
    }else{
      palavrasDivididas.push(palavra);
      palavra = "";
    }   
  }
  return palavrasDivididas;  
}
 let valor1 = "Clayton é zika";
// let valor2 = 50;
 console.log(splitSentence(valor1));

// Desafio 4
function concatName() {
  // seu código aqui
}

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
}
