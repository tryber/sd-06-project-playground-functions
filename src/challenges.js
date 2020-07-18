// Desafio 1 ## DONE!!! ##
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } 
  return false;
}

// Desafio 2 ## DONE!!! ##
function calcArea(base, height) {
  return (base*height)/2
}

// Desafio 3 ## DONE!!! ##
function splitSentence(phrase) {
  let sentenceArr = [];
  let phraseSplited = "";

  for (let index in phrase) {
    if (phrase[index] === " ") {
      sentenceArr.push(phraseSplited);
      phraseSplited = "";
    } else {
      phraseSplited += phrase[index];
    }
  }
  if (phraseSplited !== "") {
    sentenceArr.push(phraseSplited);
  }
  return (sentenceArr);
}

// Desafio 4 ## DONE!!! ##
function concatName(arrayStrings) {
  return arrayStrings[arrayStrings.length-1] + ", " +arrayStrings[0];
}

// Desafio 5 ## DONE!!! ##
function footballPoints(wins, ties) {
  return 3*wins + ties;
}

// Desafio 6
function highestCount(arrNumbers) {
  let countNumber = 0;
  let highest = arrNumbers[0];

  for (let index in arrNumbers) { // identifica o maior número do array
    if (highest < arrNumbers[index]) {
      highest = arrNumbers[index];
    }
  }

  for (let index in arrNumbers) { // contagem do maior número
    if (arrNumbers[index] === highest) {
      countNumber += 1;
    }
  }

  return countNumber;
}

console.log(highestCount([9, 19, 29, 39]));

// Desafio 7 ## DONE!!! ##
function catAndMouse(mouse, cat1, cat2) {
  let d1 = mouse - cat1;
  let d2 = mouse - cat2;

  if (d1 < 0) {
    d1 = d1*(-1);
  }

  if (d2 < 0) {
    d2 = d2*(-1);
  }

  if (d1 < d2) {
    return "cat1";
  } else if (d2 < d1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8 ## DONE!!! ##
function fizzBuzz(arrayNumbers) {
  let fizzBuzzArr = arrayNumbers;

  for (let index in arrayNumbers) {
    if (arrayNumbers[index] % 3 === 0) {
      if (arrayNumbers[index] % 5 === 0) {
        fizzBuzzArr[index] = "fizzBuzz";
      } else {
        fizzBuzzArr[index] = "fizz";
      }
    } else if (arrayNumbers[index] % 5 === 0) {
      fizzBuzzArr[index] = "buzz";
    } else {
      fizzBuzzArr[index] = "bug!";
    }
  }
  return fizzBuzzArr;
}

// Desafio 9 ## DONE!!! ##
function encode(inputStringToEncode) {
  let changes = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let inputArrToEncode = [];
  let encodeString = "";

  for (let index in inputStringToEncode) { // transforma inputStringToEncode em um array
    inputArrToEncode.push(inputStringToEncode[index]);
  }
  
  for (let index in inputArrToEncode) { // troca o que é vogal por número
    switch (inputArrToEncode[index]) {
      case "a": {
        inputArrToEncode[index] = changes.a;
        break;
      }

      case "e": {
        inputArrToEncode[index] = changes.e;
        break;
      }

      case "i": {
        inputArrToEncode[index] = changes.i;
        break;
      }

      case "o": {
        inputArrToEncode[index] = changes.o;
        break;
      }

      case "u": {
        inputArrToEncode[index] = changes.u;
        break;
      }
    }
  }
  
  for (let index in inputArrToEncode) { // transforma o array em string
    encodeString += inputArrToEncode[index];
  }

  return encodeString;
}

function decode(inputStringToDecode) {
  let changes = {
    n1: "a",
    n2: "e",
    n3: "i",
    n4: "o",
    n5: "u",
  };
  let inputArrToDecode = [];
  let decodeString = "";

  for (let index in inputStringToDecode) { // transforma inputStringToDecode em um array
    inputArrToDecode.push(inputStringToDecode[index]);
  }
  
  for (let index in inputArrToDecode) { // troca o que é número por vogal
    switch (inputArrToDecode[index]) {
      case "1": {
        inputArrToDecode[index] = changes.n1;
        break;
      }

      case "2": {
        inputArrToDecode[index] = changes.n2;
        break;
      }

      case "3": {
        inputArrToDecode[index] = changes.n3;
        break;
      }

      case "4": {
        inputArrToDecode[index] = changes.n4;
        break;
      }

      case "5": {
        inputArrToDecode[index] = changes.n5;
        break;
      }
    }
  }
  
  for (let index in inputArrToDecode) { // transforma o array em string
    decodeString += inputArrToDecode[index];
  }

  return decodeString;
}

// Desafio 10
function techList(techArray, name) {
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


