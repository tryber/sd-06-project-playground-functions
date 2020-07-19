// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 && value2) === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let word = '';
  let splitedPhrase = [];
  for (let i in string) {
    if (string[i] !== ' ') {
      word += (string[i]);
    }
    else if (string[i] === ' ') {
      splitedPhrase.push(word);
      word = '';
    }
  }
  splitedPhrase.push(word);
  return splitedPhrase;
}

// Desafio 4
function concatName(array) {
  for (let index = 0; index < array.length; index += 1) {
    return newArray = (array[array.length - 1] + ', ' + array[0]);
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  return totalPoints = ((wins*3) + (ties * 1));
}

// Desafio 6
function highestCount(array) {
  let highestNumber = array[0];
  let highestNumberCount = 0;
  for (let index in array) {
    if (highestNumber < array[index]) {
      highestNumber = array[index];
    }
  }
  for (let index in array) {
    if (highestNumber === array[index]) {
      highestNumberCount += 1;
    }
  }
  return highestNumberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat1 < distanceCat2) {
    return "cat1";
  }
  else if (distanceCat2 < distanceCat1) {
    return "cat2";
  }
  else if (distanceCat1 === distanceCat2) {
    return ("os gatos trombam e o rato foge");
  }
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzzArray = [];
  for (let index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      fizzBuzzArray.push ("fizz")
    }
    else if (array[index] % 5 === 0 && array[index] % 3 !== 0) {
      fizzBuzzArray.push ("buzz")
    }
    else if ((array[index] % 3 && array[index] % 5) === 0) {
      fizzBuzzArray.push ("fizzBuzz")
    }
    else {
      fizzBuzzArray.push ("bug!")
    }
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(string) {
  let encodedString = "";
  for (index in string) {
    if (string[index] === "a") {
      encodedString += "1";
    }
    else if (string[index] === "e") {
      encodedString += "2";
    }
    else if (string[index] === "i") {
      encodedString += "3";
    }
    else if (string[index] === "o") {
      encodedString += "4";
    }
    else if (string[index] === "u") {
      encodedString += "5";
    }
    else {
      encodedString += string[index];
    }
  }
  return encodedString;
}

function decode(string) {
    let decodedString = "";
    for (index in string) {
      if (string[index] === "1") {
        decodedString += "a";
      }
      else if (string[index] === "2") {
        decodedString += "e";
      }
      else if (string[index] === "3") {
        decodedString += "i";
      }
      else if (string[index] === "4") {
        decodedString += "o";
      }
      else if (string[index] === "5") {
        decodedString += "u";
      }
      else {
        decodedString += string[index];
      }
    }
    return decodedString;
}
// Desafio 10
function techList(techArray, name) {
  let sortedTechArray = techArray.sort();
  let newTechArray = [];
  for (i = 0; i < sortedTechArray.length; i += 1) {
    let tech = sortedTechArray[i];
    newTechArray.push ({tech, name,});
  }
  if (newTechArray == 0) {
    return "Vazio!";
  }
  return newTechArray;
}

// Desafio 11
function generatePhoneNumber(phoneArray) {
  for (let index = 0; index < phoneArray.length; index += 1) {
    if (phoneArray[index] < 0 || phoneArray[index] > 9) {
      return "não é possível gerar um número de telefone com esses valores"
    }
    else if (phoneArray.length !== 11) {
      return "Array com tamanho incorreto."
    }
  }
  for (index in phoneArray){
    return '(' + phoneArray.slice(0,2) + ')' + phoneArray.slice(2,7) + '-' + phoneArray.slice(7,11);
  }
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
