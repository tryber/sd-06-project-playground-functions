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

function catAndMouse(mouse, cat1, cat2) {
  
let distancia1 = mouse - cat1;
let distancia2 = mouse - cat2;

if (distancia1 === distancia2){
  return 'os gatos trombam e o rato foge';
}else if (distancia1 < distancia2){
  return 'cat1';
}else {
  return 'cat2';
}
}


// Desafio 8 
/*Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:

Para cada número da Array que seja divisível por 3, apresente uma string "fizz";
Para cada número da Array que seja divisível por 5, apresente uma string "buzz";
Caso o número seja divisível por 3 ou 5, retorne a string "fizzBuzz";
Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].*/

function fizzBuzz(arrayNew) {
  
  let newFizz = 0;

  for (i = 0; i<arrayNew.length; i++){
    if ((arrayNew[i]%3==0) && (arrayNew[i]%5!==0)){
      newFizz[i] = 'fizz';
    }else if ((arrayNew[i]%5==0) && (arrayNew[i]%3!==0)){
      newFizz[i] = 'buzz';
    }else if ((arrayNew[i]%3==0) && (arrayNew[i]%5==0)){
      newFizz[i] = 'fizzBuzz';
    }else {
      newFizz[i] = 'bug'
    }
  }
return newFizz;
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

