// Desafio 1
function compareTrue(first,second) {
  first && second ? true : false;
  // seu código aqui
}

// Desafio 2
function calcArea(base,height) {
  return base*height/2
  // seu código aqui
}

// Desafio 3
function splitSentence(frase) {
  let palavrasSeparadas = [];
  let palavra = [];
  for(i in frase){
    console.log(frase[i]);
    //separar as letras
    //juntar as letras , sem adicionar os espaços

    if(frase[i] !== ' '){
      //se o elemento não for espaço vazio adiciona o elemento para a array palavra
      palavra.push(frase[i]);
    }
    else{
      //se o elemento for espaço vazio adiciona o array palavra para palavrasSeparadas
      palavra.forEach((number) => {
      console.log(palavra.splice( 0, palavra.length))}
      )
    }
    console.log(`palavra ${palavra} e ${palavrasSeparadas}`);
  }
  return console.log(palavrasSeparadas);  // seu código aqui
}

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

splitSentence('paulo é bom');
