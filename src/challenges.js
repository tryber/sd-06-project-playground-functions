// Desafio 1
function compareTrue(var1, var2) {
  if(var1===true && var2===true){
    return true;
  }
  else{
    return false;
  }
  
}

// Desafio 2
function calcArea(base, height) {
  let area;
  area=(base*height)/2;
  return area;
}

// Desafio 3
function splitSentence(word) {
  return word.split(' ');
}

// Desafio 4
function concatName(d) {
  let word_1="";
  word_1=d[0]+", "+d[d.length-1];
  return word_1;
}

// Desafio 5
function footballPoints(wins, ties) {
  let point=0;
  wins=wins*3;
  points=wins+ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let maior=array[0];
  let cont=0;
  
  for(let i=0; i<array.length;i+=1){
    if(array[i]===maior){
      cont++;
    }
    if(array[i]>maior){
      maior=array[i];
      cont=1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1=0;
  let dist2=0;
  dist1=cat1-mouse;
  Math.abs(dist1);
  dist2=cat2-mouse;
  Math.abs(dist2);
  if(dist1>dist2){
    return "cat2";
  }
  else{
    return "cat1";
  }

}

// Desafio 8
function fizzBuzz(array_1) {
  let array_2=[];
  for(let i=0; i<array_1.length;i+=1){
    if(array[i]%3===0){
      array_2+="fizz";
    }
    if(array[i]%5===0){
      array_2+="buzz";
    }
    if(array[i]%5===0 && array[i]%3===0){
      array_2+="fizzbuzz";
    }
    else{
      array_2+="bug";
    }
    
  }
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
