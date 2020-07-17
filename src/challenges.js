// Desafio 1
function compareTrue(a, b) {
  if(a && b === true) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(false, false))

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

console.log(calcArea(5, 10))

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let result;
  wins = wins * 3;
  ties = ties * 1;

  result = wins + ties;

  return result 
}

console.log(footballPoints(10, 5));

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 & numbers[i] % 5 === 0) {
      result.push("fizzBuzz");
    } else if (numbers[i] % 3 === 0) {
      result.push("fizz");
    } else if (numbers[i] % 5 === 0) {
      result.push("buzz");
    } else
      result.push("bug!");

  }
  return result

}


console.log(fizzBuzz([2, 15, 7, 9, 45]))

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
