// Desafio 1
function compareTrue(value1, value2) {
  let result = Boolean;
  if (value1 === true && value2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(arrayOfStrings) {
  let newString = `${arrayOfStrings[arrayOfStrings.length - 1]}, ${arrayOfStrings[0]}`;
  return newString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalOfPoints = (wins * 3) + ties;
  return totalOfPoints;
}

// Desafio 6
function highestCount(numberArray) {
  let highestNumber = numberArray[0];
  let counter = 0;
  for (let i = 0; i < numberArray.length; i += 1) {
    if (highestNumber === numberArray[i]) {
      counter += 1;
    }
    if (numberArray[i] > highestNumber) {
      highestNumber = numberArray[i];
      counter = 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse);
  let answer;
  if (distance1 === distance2) {
    answer = 'os gatos trombam e o rato foge';
  } else if (distance1 < distance2) {
    answer = 'cat1';
  } else {
    answer = 'cat2';
  }
  return answer;
}

// Desafio 8
function fizzBuzz(numbers) {
  let buzzResult = [];
  for (let j = 0; j < numbers.length; j += 1) {
    if (numbers[j] % 3 === 0 && numbers[j] % 5 === 0) {
      buzzResult.push('fizzBuzz');
    } else if (numbers[j] % 3 === 0) {
      buzzResult.push('fizz');
    } else if (numbers[j] % 5 === 0) {
      buzzResult.push('buzz');
    } else {
      buzzResult.push('bug!');
    }
  }
  return buzzResult;
}

// Desafio 9
function encode(words) {
  words = words.split('');
  let letters = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  for (let k = 0; k < words.length; k += 1) {
    for (let key in letters) {
      if (key === words[k]) {
        words[k] = letters[words[k]]
      }
    }
  }
  words = words.join('');
  return words;
}
function decode(words) {
  words = words.split('');
  let letters = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  for (let k = 0; k < words.length; k += 1) {
    for (let key in letters) {
      if (letters[key] === words[k]) {
        words[k] = key
      }
    }
  }
  words = words.join('');
  return words;
}

// Desafio 10
function techList(technologies, name) {
  let objects = [];
  technologies.sort();
  for (let i = 0; i < technologies.length; i += 1){
      objects.push({tech:technologies[i], name:name});
  }
  return objects;
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
