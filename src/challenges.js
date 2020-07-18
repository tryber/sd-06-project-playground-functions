// Desafio 1
function compareTrue (param1, param2) {
  if (param1 === true && param2 === true){
    return true;
  } else if (param1 === false && param2 === false){
    return false;
  } else if (param1 === false || param2 === false){
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}


// Desafio 3
function splitSentence(string) {
  let word = "";
  let stringArray = [];

  for (index in string){
    if (string[index] != " "){
      word += string[index];
    }
    else if (string[index] == " "){
      stringArray.push(word);
      word = "";
    }
    
  }

  stringArray.push(word);
  return stringArray;
  
}

splitSentence("go trybe")

// Desafio 4
function concatName(stringArray) {
  let lastItemIndex = stringArray.length - 1;
  let firstItemIndex = 0;
  let returnedString = "";
  
  for (let index = lastItemIndex; index >= 0; index -= 1){
    if (index == lastItemIndex){
      returnedString = stringArray[index] + ", ";
    }
    else if (index == firstItemIndex){
      returnedString += stringArray[index];
    }
  }

  return returnedString;
 
}


// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiePoints = ties * 1;

  return winPoints + tiePoints;
}

// Desafio 6
function highestCount(numbersArray) {
  let majorNumber = 0;
  let count = 0;

  // definir maior numero
  for (index in numbersArray){
    for (internIndex in numbersArray){
      if (numbersArray[index] > numbersArray[internIndex] && numbersArray[index] > majorNumber){
        majorNumber = numbersArray[index]
      }
    }
  }

  // definir quantidade de repetições
  for (index in numbersArray){
    if (majorNumber === numbersArray[index]){
      count += 1;
    }
  }

  return count;
}

console.log(highestCount([4, 11, 11, 11, 11, 4, 9, 9, 3, 2]));


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = 0;
  let distanceCat2 = 0;

  
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
