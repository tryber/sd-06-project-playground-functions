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
  if ((mouse - cat1) === (mouse - cat2)) {
    return "os gatos trombam e o rato foge";
  }
  if ((mouse - cat1) > (mouse - cat2)) {
    return "cat1";
  }
  return "cat2";
}

// Desafio 8
function fizzBuzz(array) {
  var results = [];
    if (array === 1) {
      return '1';
    } else {
      if (n % 3 === 0 && array % 5 === 0) {
        results.push('FizzBuzz');
      } else if (array % 5 === 0) {
        results.push('Buzz');
      } else if (array % 3 === 0) {
        results.push('Fizz');
        else if (array % 3 != 0 && array % 5 != 0){
          results.push('bug!');
      } else {
        results.push(''+ array);
      }
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
