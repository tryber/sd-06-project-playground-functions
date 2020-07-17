 // Desafio 1
  function compareTrue(a,b) {
  
   if ( a && b) {
    return true;}
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
   let area = (base*height)/2;
   return area;
}

// Desafio 3

function splitSentence(phrase) {
  return phrase.split(" ");
  
}

// Desafio 4 
function concatName(string) {
  
  let first = string[0];
  let last = string[string.length -1];
  let join = last + ', ' + first;
  
  return join;
  
}

// Desafio 5

function footballPoints(wins, ties) {

  let result = (wins * 3) + ties;
  return result;
}

// Desafio 6 
//Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.Exemplo: caso o parâmetro de highestCount seja uma array com valores [9, 1, 2, 3, 9, 5, 7], a função deverá retornar 2, que é a quantidade de vezes que o número 9 (maior número do array) se repete.
 
function highestCount(array) {  
  
  let position = 0;
  let cont = 0;

  for (let newArray in array){ 
    if (array[position] <= array[newArray]){   
      position = newArray;
      cont = cont + 1;
      }
  }
  return cont;
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

