// Desafio 1
function compareTrue(bol1, bol2) {
  if(bol1 == true && bol2 == true){
    return true;
}else{

    return false;
}
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height) / 2;
    return area; 
}

// Desafio 3
function splitSentence(string) {
  let novaString = string.split(" ");
    return novaString; 
}

// Desafio 4
function concatName(string) {
  let last = string[0];
  let first = string[string.length - 1];
  fraseFinal =  first + ", " + last;
  return fraseFinal;
}
console.log(concatName(["Luiz", "Phellipe", "Carneiro"]))

// Desafio 5
function footballPoints(wins, ties) {
  let winPontos = wins * 3;
  let total = winPontos + ties;
  return total;
}
// Desafio 6
function highestCount(num) {
    let maiorNum = num[0];
    for(let index = 0; index < num.length; index += 1){
      if(num[index] > maiorNum){
        maiorNum = num[index];
      }
    }
    let count = 0;
    for(let index = 0; index < num.length; index += 1){
      if(maiorNum == num[index]){
        count += 1;
      }
    }
    return count;
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
