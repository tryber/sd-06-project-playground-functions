// Desafio 1
function compareTrue(a,b) {
  let resultado = a && b;
  return resultado;
}

// Desafio 2
function calcArea(base,height) {
  let area = base * height /2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  frase = frase.split(" ");
  return frase;
}

// Desafio 4
function concatName(nomes) {
  let novoNome = "";
  for(let chave in nomes){
      if(chave == 0 || chave == nomes.length-1){
        novoNome += " "+nomes[(nomes.length-1)-chave];
      }
  }
  return novoNome;
}
nomes = ['joao', 'grillo', 'xico', 'padeiro', 'vicentao'];
console.log(concatName(nomes));

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
