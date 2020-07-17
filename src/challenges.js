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
/* let valor1 = "Clayton é zika";
let valor2 = 50;
console.log(splitSentence(valor1)); */

// Desafio 4
function concatName(array) {
  // seu código aqui  
  return array[array.length-1] + ", " + array[0];
}
/* let valor1 = ["Clayton é zika", "Clayton top", "Clayton bonitão", "Finalmente deu certo"];
let valor2 = 50;
console.log(concatName(valor1)); */

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins*3 + ties;
}
/* let valor1 = 60;
let valor2 = 50;
console.log(footballPoints(valor1, valor2)); */


// Desafio 6
function highestCount(array2) {
  // seu código aqui
  let quantidadeDoMaior = 0;
  for (let n1 in array2){
    let quantoMaior = 0;
    for (let n2 in array2){
        if( array2[n2] <= array2[n1]){
            quantoMaior += 1;                
        }
    }
    if(quantoMaior === array2.length){
      quantidadeDoMaior += 1;        
    }
  }
  return quantidadeDoMaior;
}
/* let valor1 = [9, 1, 2, 3, 9, 5, 7, 9, 10, 10];
let valor2 = 50;
console.log(highestCount(valor1)); */

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)){
    return "os gatos trombam e o rato foge";
  }else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)){
    return "cat1";
  }else {
    return "cat2";
  }
}
let valor1 = 28;
let valor2 = 50;
let valor3 = 2;
console.log(catAndMouse(valor1, valor2, valor3));

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
