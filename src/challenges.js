// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } 
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2
}

// Desafio 3
function splitSentence(phrase) {
  // // let splitPoints = 0;
  // let sentenceArr = [];

  // for (index in phrase) {
  //   if (phrase[index] === " ") {
  //     sentenceArr.[index](phrase.slice(splitPoints,index));
  //     splitPoints = index;
  //   }
  //   if (index === phrase.length - 1) {
  //     sentenceArr.[index](phrase.slice(splitPoints,index));
  //   }
  // }
  // return (sentenceArr);
}

// Desafio 4
function concatName(arrayStrings) {
  return arrayStrings[arrayStrings.length-1] + ", " +arrayStrings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3*wins + ties;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
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

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let fizzBuzzArr = arrayNumbers;

  for (let index in arrayNumbers) {
    if (arrayNumbers[index] % 3 === 0) {
      if (arrayNumbers[index] % 5 === 0) {
        fizzBuzzArr[index] = "fizzBuzz";
      } else {
        fizzBuzzArr[index] = "fizz";
      }
    } else if (arrayNumbers % 5 === 0) {
      fizzBuzzArr[index] = "buzz";
    } else {
      fizzBuzzArr[index] = "bug!";
    }
  }
  return fizzBuzzArr;
}

// Desafio 9
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

console.log(decode("h3 th2r2!"));

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


