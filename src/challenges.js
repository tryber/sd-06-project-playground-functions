// Desafio 1
function compareTrue(firstBoolean, secondBoolean) {
  return firstBoolean && secondBoolean;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsOfWins = wins * 3;
  return pointsOfWins + ties;
}

// Desafio 6
function highestCount(numbers) {
  let biggerNumber = numbers[0];
  let countNumber = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === biggerNumber) {
      countNumber += 1;
    }
  }
  return countNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceOfCat1 = Math.abs(mouse - cat1);
  let distanceOfCat2 = Math.abs(mouse - cat2);
  if (distanceOfCat1 < distanceOfCat2) {
    return 'cat1';
  } else if (distanceOfCat2 < distanceOfCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  let words = [];
  for (let index in numbers) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      words[words.length] = 'fizzBuzz';
    } else if (numbers[index] % 3 === 0) {
      words[words.length] = 'fizz';
    } else if (numbers[index] % 5 === 0) {
      words[words.length] = 'buzz';
    } else {
      words[words.length] = 'bug!';
    }
  }
  return words;
}

// Desafio 9
function encode(word) {
  newWord = '';
  for (let index in word) {
    switch (word[index]) {
      case 'a':
        newWord += '1';
        break;
      case 'e':
        newWord += '2';
        break;
      case 'i':
        newWord += '3';
        break;
      case 'o':
        newWord += '4';
        break
      case 'u':
        newWord += '5';
        break;
      default:
        newWord += word[index];
    }
  }
  return newWord;
}
function decode(word) {
  newWord = '';
  for (let index in word) {
    switch (word[index]) {
      case '1':
        newWord += 'a';
        break;
      case '2':
        newWord += 'e';
        break;
      case '3':
        newWord += 'i';
        break;
      case '4':
        newWord += 'o';
        break;
      case '5':
        newWord += 'u';
        break;
      default:
        newWord += word[index];
    }
  }
  return newWord;
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
