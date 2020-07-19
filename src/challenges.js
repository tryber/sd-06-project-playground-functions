// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(word) {
  let array = [];
  let phrase = '';
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] !== ' ') {
      phrase += word[i];
    }
    if (word[i] === ' ' || i === word.length - 1) {
      array.push(phrase);
      phrase = '';
    }
  }
  return array;
}

// Desafio 4
function concatName(array) {
  let last = array[array.length - 1];
  let first = array[0];
  let lastFirst = last + ', ' + first;
  return lastFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 3 * wins + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let bigger = 0;
  let counter = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > bigger) {
      bigger = array[i];
    }
  }
  for (let j = 0; j < array.length; j += 1) {
    if (array[j] === bigger) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = cat1 - mouse;
  let distance2 = cat2 - mouse;
  if (distance1 < 0) {
    distance1 *= -1;
  }
  if (distance2 < 0) {
    distance2 *= -1;
  }
  if (distance1 === distance2) {
    return 'os gatos trombam e o rato foge'
  } else if (distance1 < distance2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  let fizz = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      fizz.push("fizz");
    } else if (array[i] % 5 === 0 && array[i] % 3 !== 0) {
      fizz.push("buzz");
    } else if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      fizz.push("fizzBuzz");
    } else if (array[i] % 3 !== 0 && array[i] % 5 !== 0) {
      fizz.push("bug!");
    }
  }
  return fizz;
}

// Desafio 9
function encode(string) {
  let stringArray = [];
  let coded = '';
  for (let i = 0; i < string.length; i += 1) {
    stringArray.push(string[i]);
  }
  for (let i = 0; i < stringArray.length; i += 1) {
    if (stringArray[i] === 'a') {
      coded += '1';
    } else if (stringArray[i] === 'e') {
      coded += '2';
    } else if (stringArray[i] === 'i') {
      coded += '3';
    } else if (stringArray[i] === 'o') {
      coded += '4';
    } else if (stringArray[i] === 'u') {
      coded += '5';
    } else {
      coded += stringArray[i];
    }
  }
  return coded;
}

function decode(string) {
  let stringArray = [];
  let decoded = '';
  for (let i = 0; i < string.length; i += 1) {
    stringArray.push(string[i]);
  }
  for (let i = 0; i < stringArray.length; i += 1) {
    if (stringArray[i] === '1') {
      decoded += 'a';
    } else if (stringArray[i] === '2') {
      decoded += 'e';
    } else if (stringArray[i] === '3') {
      decoded += 'i';
    } else if (stringArray[i] === '4') {
      decoded += 'o';
    } else if (stringArray[i] === '5') {
      decoded += 'u';
    } else {
      decoded += stringArray[i];
    }
  }
  return decoded;
}

// Desafio 10
function techList(technologies, user) {
  let learning = [];
  if (technologies.length === 0) {
    return 'Vazio!'
  }
  techs = technologies.sort(); 
  for (technos in techs) {
    learning.push({tech: techs[technos], name: user});
  }
  return learning;
}

// Desafio 11
function generatePhoneNumber(phone) {
  let count = 0;
  let phoneNumber = '(';
  if (phone.length !== 11) {
    return "Array com tamanho incorreto.";
  }
  for (num1 in phone) {
    count = 0;
    for (num2 in phone) {
      if (phone[num1] === phone[num2]) {
        count += 1;
      }
    }
    if (phone[num1] < 0 || phone[num1] > 9 || count >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    if (num1 < 2) {
      phoneNumber += phone[num1];
    } else if (num1 == 2) {
      phoneNumber += ") ";
      phoneNumber += phone[num1];
    } else if (num1 > 2 && num1 < 7) {
      phoneNumber += phone[num1];
    } else if (num1 == 7) {
      phoneNumber += '-';
      phoneNumber += phone[num1];
    } else {
      phoneNumber += phone[num1];
    }
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineC) {
    if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineB - lineA)) {
      return true;
    }
    return false;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  const regex = /\d+/g;
  const numbers = string.match(regex);
  let water = 0;
  for (num in numbers) {
    water += parseInt(numbers[num]);
  }
  if (water === 1) {
    let cup = "";
    cup += water + " copo de água"
    return cup;
  }
  let cups = "";
  cups += water + " copos de água"
  return cups;
}

console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));


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
