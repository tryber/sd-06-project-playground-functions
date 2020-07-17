// Desafio 1
function compareTrue(statement1, statement2) {
  if (statement1 && statement2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  let splitPhrase = phrase.split(" ");
  return splitPhrase;
}


// Desafio 4
function concatName(nameList) {
  return nameList[nameList.length - 1] + ", " + nameList[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + ties;
}

// Desafio 6
function highestCount(numList) {
  let highest = 0;
  let count = 0;
  for (let i in numList) {
    highest = 0;
    for (let j in numList) {
      if (numList[i] >= numList[j]) {
        highest += 1;
      }
    }
    if (highest === numList.length) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = cat1 - mouse;
  let distCat2 = cat2 - mouse;
  if (distCat1 ** 2 < distCat2 ** 2) {
    return "cat1";
  } else if (distCat1 ** 2 > distCat2 ** 2) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numList) {
  let fizzBuzz = [];
  for (let i in numList) {
    if (numList[i] % 3 === 0 && numList[i] % 5 === 0) {
      fizzBuzz.push("fizzBuzz");
    } else if (numList[i] % 3 === 0 && numList[i] % 5 !== 0) {
      fizzBuzz.push("fizz");
    } else if (numList[i] % 3 !== 0 && numList[i] % 5 === 0) {
      fizzBuzz.push("buzz");
    } else {
      fizzBuzz.push("bug!");
    }
  }
  return fizzBuzz;
}

// Desafio 9
function encode(message) {
  let letters = message.split("");
  let encodedMessage = "";
  for (let i in letters) {
    switch (letters[i]) {
      case "a":
        letters[i] = "1";
        break;
      case "e":
        letters[i] = "2";
        break;
      case "i":
        letters[i] = "3";
        break;
      case "o":
        letters[i] = "4";
        break;
      case "u":
        letters[i] = "5";
        break;
    }
    encodedMessage += letters[i];
  }
  return encodedMessage;
}

function decode(m2ss1g2) {
  let l2tt2rs = m2ss1g2.split("");
  let decodedMessage = "";
  for (let i in l2tt2rs) {
    switch (l2tt2rs[i]) {
      case "1":
        l2tt2rs[i] = "a";
        break;
      case "2":
        l2tt2rs[i] = "e";
        break;
      case "3":
        l2tt2rs[i] = "i";
        break;
      case "4":
        l2tt2rs[i] = "o";
        break;
      case "5":
        l2tt2rs[i] = "u";
        break;
    }
    decodedMessage += l2tt2rs[i];
  }
  return decodedMessage;
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
