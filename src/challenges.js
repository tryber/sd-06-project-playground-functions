// Desafio 1
function compareTrue(b1, b2) {
  if (b1 === true && b2 === true){
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  string = string.split(' ');

  return string;
}

// Desafio 4
function concatName(array) {
  array = array[array.length-1] + ", " + array[0];
  return array;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points; 
}

// Desafio 6
function highestCount(arrayNumbers) {
  let highest = Math.max.apply(null, arrayNumbers);
  let count = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === highest) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    let distanceCat1 = Math.abs(mouse - cat1);
    let distanceCat2 = Math.abs(mouse - cat2);
    if (distanceCat1 < distanceCat2){
      return "cat1";
     } else if (distanceCat1 > distanceCat2) {
       return "cat2";
     } else {
       return "os gatos trombam e o rato foge";
     }
}

// Desafio 8
function fizzBuzz(array) {
  
}

// Desafio 9
function encode() {

}
function decode() {
  
}

// Desafio 10
function techList() {
 
}

// Desafio 11
function generatePhoneNumber() {
  
}

// Desafio 12
function triangleCheck() {
  
}

// Desafio 13
function hydrate() {
  
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

