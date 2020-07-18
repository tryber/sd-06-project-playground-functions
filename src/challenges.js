// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
    return (base * height) / 2;
}
 
//Desafio 3
function splitSentence(str) {
  let word = ''
  let array = [];
    for (index in str) {
      if (str[index] != " ") {
        word += str[index];
      }else if (str[index] == " ") {
        array.push(word);
        word = "";
      }
    } 
    array.push(word);
    return array;
}

// Desafio 4
function concatName(array) {
  str =  array[array.length-1] + ', ' + array[0];
  return str
}

// Desafio 5
function footballPoints(wins, ties) {
    return (wins * 3) + (ties * 1)
}

function highestCount(array) {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 ;
  let distCat2 ; 
  distCat1 = cat1 - mouse;
  distCat2 = cat2 - mouse;

  if (distCat1 < 0) {
    distCat1 = distCat1 * (-1);
  } 
  if (distCat2 < 0) {
    distCat2 = distCat2 * (-1);
  }
  if (distCat1 < distCat2){
    return 'cat1';
  } else if (distCat2 < distCat1) {
    return 'cat2';
  }  else {
    return 'os gatos trombam e o rato foge';
  }
}
  
 // Desafio 8
function fizzBuzz(array) {
  let newArray = [];

  for(i = 0; i <= array.length -1; i += 1) {
      
      if ((array[i] % 3 == 0) && (array[i] % 5 == 0)) {
          newArray.push('fizzBuzz');
      } else if ((array[i] % 3 != 0) && (array[i] % 5 != 0)) {
          newArray.push('bug!');
      } else if (array[i] % 3 == 0) {
          newArray.push('fizz');
      } else {
          newArray.push('buzz');
      }
} 
  return newArray;
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
