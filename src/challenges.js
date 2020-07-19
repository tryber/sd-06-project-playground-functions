// Desafio 1
function compareTrue(first,second) {
  return first && second ? true : false;
  // seu código aqui
}

// Desafio 2
function calcArea(base,height) {
  return (height*base)/2;
  // seu código aqui
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ')
}
// Desafio 4
function concatName(listaStrings){
  minhaLista = [].concat(listaStrings);
  let ultimo = minhaLista[minhaLista.length-1];
  minhaLista.push(ultimo);
  minhaLista.pop();
  return minhaLista
}

// Desafio 5
function footballPoints(wins,ties) {
  let pontos = wins*3 + ties;
  return pontos
  // seu código aqui
}

// Desafio 6
function highestCount(numbers) {
  //percorrer o código e encontrar o maior numero
  // percorrer o código e contar quantas vezes ele aparece
  let maior = -Infinity;
  let contaMaior = 0
  for(let i in numbers){
    if(numbers[i] > maior){
      maior = numbers[i];
    }
  }
  for(let x in numbers){
    if(numbers[x] === maior){
      contaMaior +=1;
    }
  }
  return contaMaior;
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
