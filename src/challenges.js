// Desafio 1

function compareTrue(booleano01, booleano02) {

if (booleano01 === true && booleano02 === true) {
  return true;
}
else {
  return false;
}
}

// Desafio 2

var base = 12;
var height = 4
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2;
}
console.log(calcArea(base, height));

// Desafio 3
let lucas = "Lucas Miranda"
function splitSentence(lucas) {
  // seu código aqui
  lucas = lucas.split(" ");
  return lucas;
}

// Desafio 4
function concatName(arrayString) {
  let concatenate = '';
  concatenate = arrayString[arrayString.length - 1] + ", " + arrayString[0];
  return concatenate;
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
console.log(concatName)

// Desafio 5

function footballPoints(wins, ties) {
  // seu código aqui
return (wins * 3) + (ties * 1);
}

// // Desafio 6
// function highestCount(numbers) {
//   // seu código aqui
//   let numeroMaior = numbers[0];
//   for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] > numeroMaior) {
//         numeroMaior = numbers[i];
//       }
//   }
//   let count = 0;
//   for (let i = 0; i < numbers.length; i += 1) {
//       if (numeroMaior === numbers[i]) {
//           count = count + 1;
//       }
//   }
//   return count;
// }

// // Desafio 7
// function catAndMouse(mouse, cat1, cat2) {
//   let positionCat1 = Math.abs(mouse - cat1);
//   let positionCat2 = Math.abs(mouse - cat2);
//   if (positionCat1 < positionCat2) {
//     return 'cat1';
//   } else if (positionCat2 < positionCat1) {
//     return 'cat2';
//   }
//   return 'os gatos trombam e o rato foge';
// }

// Desafio 8
// function fizzBuzz(numbers) {
//   if (numbers % 3 === 0 && numbers % 5 === 0) {
//     return 'fizzBuzz';
//   } else if (numbers % 3 === 0) {
//     return 'fizz';
//   } else if (numbers % 5 === 0) {
//     return 'buzz';
//   }
//   return 'bug!';
// }



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
