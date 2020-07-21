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
compareTrue(2,3);

// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2;
  return area;
}
calcArea(4,8);

// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}

splitSentence("be trybe");

// Desafio 4
function concatName(arrayString) {
  let concatenate = "";
    concatenate = arrayString[arrayString.length -1] + ", " + arrayString[0];
  return concatenate;
}

concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);

// Desafio 5
function footballPoints(wins,ties) {
  let pointWins = 3*wins;
  let pointTies = ties;

  let totalPoints = pointWins + pointTies;
  return totalPoints;
}

footballPoints(1,4);

// Desafio 6
function highestCount(numbers) {
  let repetitionCount = 0;
  let highestNumber = numbers[0];

  for (let index = 1; index <= numbers.length; index +=1) {
        if (numbers[index] > highestNumber) {
          highestNumber = numbers[index];      
        }
  }
  
  for (let index2 = 0; index2 <= numbers.length; index2 +=1) {
          if (numbers[index2] == highestNumber) {
            repetitionCount += 1;
          }
  }
  return repetitionCount;
}

highestCount([-101, -100, -101,-100, -100, -100, -1, -9, -9, -3, -9, -5, -7]);


// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 < distanceCat2) {
    return "cat1";
  } 
  else if (distanceCat2 < distanceCat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

catAndMouse(8,2,4);

// Desafio 8
function fizzBuzz(numbers) {
  let newArray = [];

  for (let index in numbers) {
    if (numbers[index]%3 === 0 && numbers[index]%5 === 0) {
      newArray.push("fizzBuzz");
    }
    else if (numbers[index]%3 === 0) {
      newArray.push("fizz");
    }
    else if (numbers[index]%5 === 0) {
      newArray.push("buzz");
    }
    else {
      newArray.push("bug!");
    }
  }
  return newArray;
}

fizzBuzz([2, 15, 7, 9, 45]); 

// Desafio 9

function encode(string) {
  let newString = "";
  for (let index in string) {
    if (string[index] === "a") {
      newString += "1";
    }
    else if (string[index] === "e") {
      newString += "2";
    }
    else if (string[index] === "i") {
      newString += "3";
    }
    else if (string[index] === "o") {
      newString += "4";
    }
    else if (string[index] === "u") {
      newString += "5";
    }
    else {
      newString += string[index];
    }
  }
  return newString;
}
encode("hi there!");

function decode(numbers) {
  let decodedString = "";

    for (let index in numbers) {
      if (numbers[index] === "1") {
        decodedString += "a";
      }
      else if (numbers[index] === "2") {
        decodedString += "e";
      }
      else if (numbers[index] === "3") {
        decodedString += "i";
      }
      else if (numbers[index] === "4") {
        decodedString += "o";
      }
      else if (numbers[index] === "5") {
        decodedString += "u";
      }
      else {
        decodedString += numbers[index];
      }
    }
    return decodedString;
  }
  decode("h3 th2r2!");


// Desafio 10
function techList(arrayTechnology,name) {
  let technologyList = arrayTechnology.sort();

  if (technologyList.length != 0) {
  let techInfo = [];
    for (let index in technologyList) {
    techInfo.push({tech: technologyList[index], name: name});
  }
  return techInfo;
} else {
  return "Vazio!";
}
}

techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas");

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  let evaluator = 0;
  let arrayLines = [lineA,lineB,lineC];

  for (let index in arrayLines) {
  
    if (arrayLines[0] < (arrayLines[1] + arrayLines[2]) && arrayLines[0] > Math.abs(arrayLines[1] - arrayLines[2])) {
    evaluator += 1;
    }
    else if (arrayLines[1] < (arrayLines[0] + arrayLines[2]) && arrayLines[1] > Math.abs(arrayLines[0] - arrayLines[2])) {
    evaluator +=1;
    }
    else if (arrayLines[2] < (arrayLines[0] + arrayLines[1]) && arrayLines[2] > Math.abs(arrayLines[0] - arrayLines[1])) {
    evaluator += 1;
    }

  }
  if (evaluator == 3) {
    evaluator = true;
  }
  else {
    evaluator = false;
  }
  return evaluator;
}
triangleCheck(5, 3, 2);

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
