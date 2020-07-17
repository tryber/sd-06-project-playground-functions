// Desafio 1
function compareTrue(a, b) {
  if(a && b === true) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(false, false))

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

console.log(calcArea(5, 10))

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let result;
  wins = wins * 3;
  ties = ties * 1;

  result = wins + ties;

  return result 
}

console.log(footballPoints(10, 5));

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let distance = 0;
  let distanceCat1 = 0;
  let distanceCat2 = 0;

  distanceCat1 = mouse - cat1;
  distanceCat2 = mouse - cat2;

  if (distanceCat1 < distanceCat2) {
      return "cat1";
  } else if (distanceCat2 < distanceCat1) {
      return "cat2";
  } else (distanceCat1 === distanceCat2)
  return "Os gatos trombam";

}

console.log(catAndMouse(5, 5, 8));

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 & numbers[i] % 5 === 0) {
      result.push("fizzBuzz");
    } else if (numbers[i] % 3 === 0) {
      result.push("fizz");
    } else if (numbers[i] % 5 === 0) {
      result.push("buzz");
    } else
      result.push("bug!");

  }
  return result

}


console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9
function encode(word) {
  let result = "";
  for (let i = 0; i < word.length; i++) {
      if (word[i] === "a") {
          result += 1;
      } else if (word[i] === "e") {
          result += 2;
      } else if (word[i] === "i") {
          result += 3;
      } else if (word[i] === "o") {
          result += 4;
      } else if (word[i] === "u") {
          result += 5;
      }
      else
          result += word[i]

  }
  return result

}
console.log(encode("hi there!"))


function decode(word) {
  let result = "";
  for (let i = 0; i < word.length; i++) {
      if (word[i] == 1) {
          result += "a";
      } else if (word[i] == 2) {
          result += "e";
      } else if (word[i] == 3) {
          result += "i";
      } else if (word[i] == 4) {
          result += "o";
      } else if (word[i] == 5) {
          result += "u";
      }
      else
          result += word[i]

  }
  return result

}
console.log(decode("h3 th2r2!"))

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
