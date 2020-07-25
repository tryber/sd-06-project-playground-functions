// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 == true && param2 == true) {
      return (true);
  } else {
      return (false);
  }
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {

  let result = 1;
  result = (base * height) / 2
  return (result)
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}
console.log(splitSentence("go trybe"));

// Desafio 4
function concatName(stringArray) {

  let stringConcat = "";
  stringConcat = stringArray[stringArray.length - 1] + ", " + stringArray[0];

  return stringConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}


// Desafio 6
function highestCount(numbers) {

  let highestNumber = returnHighestNumber(numbers)
  let count = 0;

  for (i in numbers){
    if (highestNumber == numbers[i]) {
        count += 1;
    }
  }
  return count;
}

function returnHighestNumber(numbers) {
  let highestNumber = numbers[0];

  for (i in highestNumber) {
    if (numbers[index] > highestNumber) {
      highestNumber = numbers[i];
    }
  }

  return highestNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2){

  let distanceCat1andMouse = cat1 - mouse;
  let distanceCat2andMouse = cat2 - mouse;

  if (distanceCat1andMouse < 0){
    distanceCat1andMouse = distanceCat1andMouse * -1;
  }

  if (distanceCat2andMouse < 0){
    distanceCat2andMouse = distanceCat2andMouse * -1;
  }

  if (distanceCat1andMouse > distanceCat2andMouse){
    return "cat2";
  } else if (distanceCat2andMouse > distanceCat1andMouse){
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(ArrNumbers) {

  let stringArray = [];
  for (let index = 0; index < ArrNumbers.length; index = index + 1) {
    if (ArrNumbers[index] % 3 === 0 && ArrNumbers[index] % 5 !== 0) {
        stringArray.push("fizz");
    } else if (ArrNumbers[index] % 5 === 0 && ArrNumbers[index] % 3 !== 0) {
        stringArray.push("buzz");
    } else if (ArrNumbers[index] % 5 === 0 || ArrNumbers[index] % 3 === 0) {
        stringArray.push("fizzBuzz");
    } else if (ArrNumbers[index] % 3 !== 0 && ArrNumbers[index] % 5 !== 0) {
        stringArray.push("bug!");
    }

  }
  return (stringArray)
}
// Desafio 9
function encode(word) {
  for (let index = 0; index < word.length; index++) {

      switch (word[index]) {
          case "a":
              word = word.replace(word[index], 1);
              break;
          case "e":
              word = word.replace(word[index], 2);
              break;
          case "i":
              word = word.replace(word[index], 3);
              break;
          case "o":
              word = word.replace(word[index], 4);
              break;
          case "u":
              word = word.replace(word[index], 5);
              break;
      }
  }

  return word;
}

function decode(word) {
  for (let index = 0; index < word.length; index++) {

    switch (word[index]) {
        case "1":
            word = word.replace(word[index], "a");
            break;
        case "2":
            word = word.replace(word[index], "e");
            break;
        case "3":
            word = word.replace(word[index], "i");
            break;
        case "4":
            word = word.replace(word[index], "o");
            break;
        case "5":
            word = word.replace(word[index], "u");
            break;
    }
  }

  return word;
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