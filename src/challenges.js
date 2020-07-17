// Desafio 1
function compareTrue(a,b) {
  let resultado = a && b;
  return resultado;
}
console.log(compareTrue(false,false));
// Desafio 2
function calcArea(base,height) {
  let area = base * height /2;
  return area;
}
console.log(calcArea(20,20));

// Desafio 3
function splitSentence(frase) {
  frase = frase.split(" ");
  return frase;
}
console.log(splitSentence("comer bem"));

// Desafio 4
function concatName(nomes) {
  let novoNome = "";
  for(let chave in nomes){
      if(chave == 0){
        novoNome += nomes[(nomes.length-1)-chave]+", ";
      }
      if(chave == nomes.length-1){
      novoNome += nomes[(nomes.length-1)-chave];
      }
  }
  return novoNome;  
}
nomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(nomes));

// Desafio 5
function footballPoints(wins,ties) {
  let totalPontos = (wins*3) + (ties*1);
  return totalPontos;
}
console.log(footballPoints(3,4));

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
