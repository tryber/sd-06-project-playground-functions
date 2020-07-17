// Desafio 1
function compareTrue(varOne, varTwo) {
  // seu código aqui
  if (varOne === true && varTwo === true) {
    return true 
  } else {
    return false
  }
}

console.log(compareTrue(true, false))

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2)
}

console.log(calcArea(10, 2))

// Desafio 3
function splitSentence(stringToSplit) {
  // seu código aqui
  return stringToSplit.split(" ");
}

console.log(splitSentence("go Trybe"))

// Desafio 4
function concatName(stringArray) {
  // seu código aqui
  return (stringArray[stringArray.length - 1] + ", " +  stringArray[0])
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let sum = ((wins * 3) + (ties))
  return sum
}

console.log(footballPoints(3, 2))

// Desafio 6
function highestCount(numberArray) {
  // seu código aqui
  let repeatCont = 0;
  let highestNumber = numberArray[0];

  for (index in numberArray) {
    if (numberArray[index] > highestNumber) {
      highestNumber = numberArray[index]
    }
  } for (index in numberArray) {
    if (numberArray[index] === highestNumber)
      repeatCont += 1
  }
  return (repeatCont)
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(numberArray) {
  // seu código aqui
  let newArray = []

  for (index in numberArray) {
    if (numberArray[index] % 3 === 0 && numberArray[index] % 5 != 0) {
      newArray.push("fizz");
    } else if (numberArray[index] % 5 === 0 && numberArray[index] % 3 != 0) {
      newArray.push("buzz");
    } else if (numberArray[index] % 3 === 0 && numberArray[index] % 5 === 0) {
      newArray.push("fizzBuzz")
    } else {
      newArray.push("bug!")
    }
  }
  return (newArray)
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
