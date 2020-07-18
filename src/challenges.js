// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3
function splitSentence(stringOriginal) {
  let stringArrays = [];
  let palavra = "";
  for (let i = 0; i < stringOriginal.length; i++) {
    if (stringOriginal.charAt(i) === " ") {
      stringArrays.push(palavra);
      palavra = "";
    } else if (i === (stringOriginal.length - 1)) {
      palavra += stringOriginal.charAt(i);
      stringArrays.push(palavra);
      break;
    } else {
      palavra += stringOriginal.charAt(i);
    }
  }
  return stringArrays;
}
// Desafio 4
function concatName(names) {
  let firstName = names[0];
  let lastName = names[names.length - 1];
  let nameComplete = lastName + ", " + firstName;
  return nameComplete;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let highest = 0;
  let counter = 0;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > highest) {
      highest = numbers[i];
    }
  }
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] === highest) {
      counter += 1;
    }
  }
  return counter;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = cat1 - mouse;
  if (distCat1 < 0) {
    distCat1 = distCat1 * (-1);
  }
  let distCat2 = cat2 - mouse;
  if (distCat2 < 0) {
    distCat2 = distCat2 * (-1);
  }
  if (distCat1 < distCat2) {
    return "cat1";
  } else if (distCat1 > distCat2) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numbersArray) {
  let results = [];
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 3 === 0 && numbersArray[i] % 5 === 0) {
      results.push('fizzBuzz');
    } else if (numbersArray[i] % 5 === 0) {
      results.push('buzz');
    } else if (numbersArray[i] % 3 === 0) {
      results.push('fizz');
    } else {
      results.push('bug!');
    }
  }
  return results;
}

// Desafio 9
function encode(wordString) {
  let wordEncoded = "";
  for (let i = 0; i < wordString.length; i++) {
    let charEncode = wordString[i];
    if (wordString[i] === "a") {
      charEncode = "1";
    } else if (wordString[i] === "e") {
      charEncode = "2";
    } else if (wordString[i] === "i") {
      charEncode = "3";
    } else if (wordString[i] === "o") {
      charEncode = "4";
    } else if (wordString[i] === "u") {
      charEncode = "5";
    }
    wordEncoded += charEncode;
  }
  return wordEncoded;
}
function decode(wordString) {
  let wordDecoded = "";
  for (let i = 0; i < wordString.length; i++) {
    let charDecode = wordString[i];
    if (wordString[i] === "1") {
      charDecode = "a";
    } else if (wordString[i] === "2") {
      charDecode = "e";
    } else if (wordString[i] === "3") {
      charDecode = "i";
    } else if (wordString[i] === "4") {
      charDecode = "o";
    } else if (wordString[i] === "5") {
      charDecode = "u";
    }
    wordDecoded += charDecode;
  }
  return wordDecoded;
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