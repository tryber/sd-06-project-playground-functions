// Desafio 1
let a = true;
let b = false

function compareTrue(a,b) { 
  if (a===true && b===true){
      resultado = true;
  } else {resultado = false}
  return resultado
  console.log(resultado)
  // seu código aqui
}

// Desafio 2
function calcArea(b,h) {
  return b*h/2
  // seu código aqui
}

// Desafio 3
let frase = "go trybe";
function splitSentence(frase) {
  let strArray = frase.split(" ");
  return strArray;
  console.log(strArray)
}

// Desafio 4
array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
  // seu código aqui
}

// Desafio 5
function footballPoints(wins,ties) {
  return wins*3 + ties
  // seu código aqui
}

// Desafio 6
function highestCount(numbers) { 
  let repeticaoMaxNum = 0;
  let maxNum = numbers[0];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === maxNum) {
      repeticaoMaxNum += 1;
    }
  }
  return repeticaoMaxNum;
  // seu código aqui
}

// Desafio 7
function catAndMouse( mouse, cat1, cat2) {
    // seu código aqui
    let distCat1 = Math.abs(mouse - cat1);
    let distCat2 = Math.abs(mouse - cat2);
    if (distCat1 < distCat2) {
      return 'cat1';
    } else if (distCat2 < distCat1) {
      return 'cat2';
    }else {
    return 'os gatos trombam e o rato foge'}
  }


// Desafio 8
function fizzBuzz(comprimento) {
  // seu código aqui	  
  let string = [];
  for (let index in comprimento) {
    if ( comprimento[index] % 5 === 0 &&  comprimento[index] % 3 === 0) {
      string[string.length] = 'fizzBuzz';
    }else if (comprimento[index] % 5 === 0) {
        string[string.length] = 'buzz';
    } else if (comprimento[index] % 3 === 0) {
      string[string.length] = 'fizz';
    }  else {
      string[string.length] = 'bug!';
    }
  }
  return string;

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
