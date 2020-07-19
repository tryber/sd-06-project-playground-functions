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
  return console.log(frase.split(' '))
}
// Desafio 4
function concatName(listaStrings) {
  let minhaLista = [].concat(minhaLista);
  let ultimo,primeiro;
  if (minhaLista.length > 1){
    ultimo = minhaLista[minhaLista.length-1];
    primeiro = minhaLista[0];
  }
  else{
    return console.log(minhaLista.length)
  }
  minhaLista.shift();
  minhaLista.unshift(ultimo);
  minhaLista.pop();
  minhaLista.push(primeiro);
  return minhaLista
}

function concatName2(listaStrings){
  minhaLista = [].concat(listaStrings);
  let primeiro = minhaLista[0];
  let ultimo = minhaLista[minhaLista.length-1];

  minhaLista[0] = ultimo;
  minhaLista[minhaLista.length-1] = primeiro;

  return minhaLista

}

// Desafio 5
function footballPoints(wins,ties) {
  return wins*3+ties;

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
concatName(['paulo','ronaldo']);
concatName2(['paulo','oracio'])
