// Desafio 1
function compareTrue(boolean1, boolean2) {
 return boolean1 && boolean2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let wordsSentence = sentence.split(' ');
  return wordsSentence
}

// Desafio 4
function concatName(arrayString) {
  let newString = '';
  let comma = ', ';

  newString += arrayString[arrayString.length - 1];
  newString += comma;
  newString += arrayString[0]
  
  return newString;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let winner = '';
  if (mouse - cat2 < mouse - cat1) {
    winner = 'cat1';
  } else if (mouse - cat1 < mouse - cat2) {
    winner = 'cat2';
  } else if ( cat1 && cat2 === mouse) {
    winner = 'os gatos trombam e o rato foge';
  } else {
    winner = 'empate'
  }

  return winner
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let newArray = [];

    for (let i = 0; i < arrayNumbers.length; i += 1) {
    
        if (arrayNumbers[i]%5===0 && arrayNumbers[i]%3===0) {
            newArray.push("fizzBuzz");
        } else if (arrayNumbers[i]%3===0) {
            newArray.push("fizz");
        } else if (arrayNumbers[i]%5===0) {
            newArray.push("buzz");
        } else {
            newArray.push("bug!");
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
