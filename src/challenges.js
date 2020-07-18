// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let value = (base * height) / 2;
  return value;
}

// Desafio 3
function splitSentence(phrase) {
  let newArray = phrase.split(' ');
  return newArray;
}

// Desafio 4
function concatName(list) {
  let string = list[list.length - 1] + ', ' + list[0];
  return string
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalScore = 0;
  totalScore = (wins * 3) + ties;
  return totalScore;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = 0;
  let value1 = 0;
  for (let i=0; i<numbers.length;i++) {
    if (numbers[i] > highestNumber) {
        highestNumber = numbers[i];
    }
  }
  for (let index=0; index<numbers.length;index++) {
    if (highestNumber === numbers[index]) {
      value1 += 1;
    }
  } return value1
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // let cat1Position, cat2Position;
  // let cat1Position = cat1 - mouse;
  // let cat2Position = cat2 - mouse;
  // if (cat1Position < 0) {
  //   cat1Position *= (-1);
  // }
  // if (cat2Position < 0){
  //   cat2Position *=(-1);
  // }
  // if (cat2Position === cat1Position){
  //   return "os gatos trombam e o rato foge"
  // } else if (cat2Position < cat1Position) {
  //   return cat2
  // } return cat1
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  arrayFizzBuzz = [];
  for (let i in arrayNumbers){
      if ((arrayNumbers[i]%3)===0 && (arrayNumbers[i]%5)===0) {
          arrayFizzBuzz.push ('fizzBuzz!');
      } else if ((arrayNumbers[i]%5)===0) {
          arrayFizzBuzz.push ('buzz!');
      } else if ((arrayNumbers[i]%3)===0) {
          arrayFizzBuzz.push ('fizz!');
      } else {
          arrayFizzBuzz.push ('bug!');
      }
  }
  console.log(arrayFizzBuzz);  
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
