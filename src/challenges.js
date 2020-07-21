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
function catAndMouse(cat1, mouse, cat2) {
    // seu código aqui
    let distCat1 = Math.abs(mouse - cat1);
    let distCat2 = Math.abs(mouse - cat2);
    if (distCat1 < distCat2) {
      return 'cat1';
    } else if (distCat2 < distCat1) {
      return 'cat2';
    }
    return 'os gatos trombam e o rato foge';
  }


// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui	  let words = [];
  for (let index in numbers) {
    if ( numbers[index] % 5 === 0 &&  numbers[index] % 3 === 0) {
      words[words.length] = 'fizzBuzz';
    }else if (numbers[index] % 5 === 0) {
        words[words.length] = 'buzz';
    } else if (numbers[index] % 3 === 0) {
      words[words.length] = 'fizz';
    }  else {
      words[words.length] = 'bug!';
    }
  }
  return words;

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
