// Desafio 1
function compareTrue(number1,number2) {
  let oddNumbers = 0;
  if (number1%2 != 0 && number2%2 != 0) {
    oddNumbers = true;
  } else {
    oddNumbers = false;
  }
  return oddNumbers;
}
console.log(compareTrue(2,3));

// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2;
  return area;
}
console.log(calcArea(4,8));

// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}
string = "be trybe";
console.log(splitSentence(string));

// Desafio 4
function concatName(arrayString) {
  let concatenate = arraySring.toString();
  for (let index in arrayString) {
    concatenate = arrayString[index] + " , " + arrayString[0];
  }
  return concatenate;
}
arraySring = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(arraySring));

// Desafio 5
function footballPoints(wins,ties) {
  let pointWins = 3*wins;
  let pointTies = ties;

  let totalPoints = pointWins + pointTies;
  return totalPoints;
}
console.log(footballPoints(1,4));

// Desafio 6
function highestCount(numbers) {
  let repetitionCount = 0;
  let highestNumber = 0;

  for (let index in numbers) {
    let auxiliarNumber = numbers[index];
        if (auxiliarNumber < numbers[index]) {
          highestNumber = numbers[index];
          repetitionCount += 1;
        }
      }
  return repetitionCount
}
let numbers = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(numbers));

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;
  if (distanceCat1 < distanceCat2) {
    return console.log("cat1");
  } 
  else if (distanceCat2 < distanceCat1) {
    return console.log("cat2");
  } else {
    return console.log("Os gatos trombam e o rato foge.");
  }
}
catAndMouse(8,4,4);

// Desafio 8
function fizzBuzz(numbers) {
  let newArray = [];
  for (let index in numbers) {
    if (numbers[index]%3 === 0) {
      newArray.push("fizz");
    }
    else if (numbers[index]%5 === 0) {
      newArray.push("buzz");
    }
    else if (numbers[index]%3 === 0 || numbers[index]%5 === 0) {
      newArray.push("fizzBuzz");
    }
    else {
      newArray.push("bug!");
    }
  }
  return newArray;
}
let numbers = [2, 15, 7, 9, 45];
console.log(fizzBuzz(numbers)); 

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
