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
  
 let distancia1 = cat1 - mouse;
 let distancia2 = cat2 - mouse;

 if (distancia1<0){
   distancia1 = -(distancia1);}
 if (distancia2<0){
   distancia1 = -(distancia1);
 };

if (distancia1 < distancia2) {
  return 'cat1'; 
}else if (distancia1> distancia2){
  return 'cat2';
}else {
   return 'os gatos trombam e o rato foge';
}
}



// Desafio 8 

function fizzBuzz(arrayNew) {
  
  let newFizz = [];

  for (i = 0; i<arrayNew.length; i++){
    if ((arrayNew[i]%3==0) && (arrayNew[i]%5!==0)){
      newFizz[i] = 'fizz';
    }else if ((arrayNew[i]%5==0) && (arrayNew[i]%3!==0)){
      newFizz[i] = 'buzz';
    }else if ((arrayNew[i]%3==0) && (arrayNew[i]%5==0)){
      newFizz[i] = 'fizzBuzz';
    }else {
      newFizz[i] = 'bug!';
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

