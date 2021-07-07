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


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = 0;
  let cat2Distance = 0;

  if (cat1 - mouse < 0){
    cat1Distance = -1 * (cat1 - mouse);
  } else if (cat1 - mouse >= 0){
    cat1Distance = cat1 - mouse;
  }

  if (cat2 - mouse < 0){
    cat2Distance = -1 * (cat2 - mouse);
  } else if (cat2 - mouse >= 0){
    cat2Distance = cat2 - mouse;
  }

  if (cat1Distance < cat2Distance){
    return "cat1";
  } else if (cat1Distance === cat2Distance){
    return "os gatos trombam e o rato foge";
  } else {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(numbersArray) {
  returnedArray = [];

  for (index in numbersArray){
    if (numbersArray[index] % 3 === 0 && numbersArray[index] % 5 === 0){
      returnedArray.push("fizzBuzz")
    } else if (numbersArray[index] % 3 === 0){
      returnedArray.push("fizz");
    } else if (numbersArray[index] % 5 === 0){
      returnedArray.push("buzz");
    } else if (numbersArray[index] % 3 !== 0 || numbersArray[index] % 5 !== 0){
      returnedArray.push("bug!");
    }
    
  }
  
  return returnedArray;
}

// Desafio 9
function encode(messageToBeCoded) {
  returnedString = "";
  let codingLetters = ["a", "e", "i", "o", "u"]; 
  let codingNumbers = [1, 2, 3, 4, 5];
  let codedCharacter = ""

  for (index in messageToBeCoded){
    for (internIndex in codingLetters){
      if (messageToBeCoded[index] !== codingLetters[internIndex]){
        codedCharacter = messageToBeCoded[index];
      } else if (messageToBeCoded[index] === codingLetters[internIndex]){
        codedCharacter = codingNumbers[internIndex];
        break
      }
    }
    returnedString += codedCharacter;
    codedCharacter = "";
  }

  return returnedString;
}

encode("hi there!");


function decode(messageToBeDecoded) {
  returnedString = "";
  let codingLetters = ["a", "e", "i", "o", "u"]; 
  let codingNumbers = [1, 2, 3, 4, 5];
  let codedCharacter = ""

  for (index in messageToBeDecoded){
    for (internIndex in codingNumbers){
      if (messageToBeDecoded[index] != codingNumbers[internIndex]){
        codedCharacter = messageToBeDecoded[index];
      } else if (messageToBeDecoded[index] == codingNumbers[internIndex]){
        codedCharacter = codingLetters[internIndex];
        break
      }
    }
    returnedString += codedCharacter;
    codedCharacter = "";
  }

  return returnedString;
}

decode("33 th2re!");

// Desafio 10
function techList(nameArray, name) {
  let sortedTechList = nameArray.sort();
  let outputObjectArray = [];
  
  if (nameArray.length == 0){
    return "Vazio!";
  }
  for (index in sortedTechList){
      outputObjectArray.push({"tech": sortedTechList[index], "name": name});
  
  }
  return outputObjectArray;
}

techList([], "lucas");

// Desafio 11
function generatePhoneNumber(numberArray) {

  if (numberArray.length != 11){
      return "Array com tamanho incorreto.";
  }
  
  
  for (index in numberArray){
      if (numberArray[index] < 0 || numberArray[index] > 9){
          return "não é possível gerar um número de telefone com esses valores";
      }
  }
  
  
  let repeatedNumberCounter = 0;
  for (index in numberArray){
      for (internIndex in numberArray){
          if (numberArray[index] === numberArray[internIndex]){
              repeatedNumberCounter += 1;
          }
      }
      if (repeatedNumberCounter >= 3){
          return "não é possível gerar um número de telefone com esses valores";
      }
      repeatedNumberCounter = 0;
  }
  
  let generatedNumber = ""
  for (index in numberArray){
      if (index == 0){
          generatedNumber += "(" + numberArray[index];
      } else if (index == 1){
          generatedNumber += numberArray[index] + ") ";
      } else if (index == 6){
          generatedNumber += numberArray[index] + "-";
      } else {
          generatedNumber += numberArray[index];
      }
  }
  
  return generatedNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let checkOutput = false;
  let counter = 0;

  checkOneSide(lineA, lineB, lineC);
  checkOneSide(lineB, lineA, lineC);
  checkOneSide(lineC, lineA, lineB);

  if (counter === 3){
    checkOutput = true;
    return checkOutput;
  } else {
    checkOutput = false;
    return checkOutput;
  }
  function checkOneSide(sideToCheck, otherSide1, otherSide2){
      if (sideToCheck < otherSide1 + otherSide2 && sideToCheck > Math.abs(otherSide1 - otherSide2)){
          counter += 1;
      } else{
          counter -= 1;
      }
  }

}

triangleCheck(10, 14, 8);

// Desafio 13
function hydrate(inputString) {
  let numberExtract = inputString.match(/\d+/g).map(Number);
  let sum = 0;
  let outputString = "";

  for (index in numberExtract){
      sum += numberExtract[index];
  }

  if(sum === 1){
    outputString = sum + " copo de água";
    return outputString;
  } else{
    outputString = sum + " copos de água";
    return outputString;
  }
  
}

hydrate("1 cerveja")

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
