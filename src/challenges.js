// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let value = (base * height) / 2;
  return value;
}

// Desafio 3
function splitSentence(phrase) {
  let newArray = phrase.split(' ');
  return newArray;
}

// Desafio 4
function concatName(list) {
  let string = list[list.length - 1] + ', ' + list[0];
  return string
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalScore = 0;
  totalScore = (wins * 3) + ties;
  return totalScore;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = 0;
  let value1 = 0;
  for (let i=0; i<numbers.length;i++) {
    if (numbers[i] > highestNumber) {
        highestNumber = numbers[i];
    }
  }
  for (let index=0; index<numbers.length;index++) {
    if (highestNumber === numbers[index]) {
      value1 += 1;
    }
  } return value1
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = cat1 - mouse;
  let cat2Position = cat2 - mouse;
  if (cat1Position < 0) {
    cat1Position *= (-1);
  }
  if (cat2Position < 0){
    cat2Position *=(-1);
  }
  if (cat2Position === cat1Position){
    return "os gatos trombam e o rato foge"
  } else if (cat2Position < cat1Position) {
    return 'cat2';
  } else {
    return 'cat1';
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayFizzBuzz = [];
  for (let i in arrayNumbers) {
    if ((arrayNumbers[i] % 3)===0 && (arrayNumbers[i] % 5)===0) {
        arrayFizzBuzz.push('fizzBuzz!');
    } else if ((arrayNumbers[i] % 5)===0) {
        arrayFizzBuzz.push('buzz!');
    } else if ((arrayNumbers[i] % 3)===0) {
        arrayFizzBuzz.push('fizz!');
    } else {
        arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz; 
}

// Desafio 9
function encode(string1) {
  let newArrayEncode = [];
  for (let cont = 0; cont < string1.length; cont ++) {
    switch(string1[cont]) {
      case 'a':
        newArrayEncode.push('1');
      break;
      case 'e':
        newArrayEncode.push('2');
      break;
      case 'i':
        newArrayEncode.push('3');
      break;
      case 'o':
        newArrayEncode.push('4');      
        break;
      case 'u':
        newArrayEncode.push('5');     
        break;
    default:
        newArrayEncode.push(string1[cont]);
    }
  }
  newArrayEncode = newArrayEncode.join("");
  return newArrayEncode;
}

function decode(string2) {
  let newArrayDecode = [];
  for (let index = 0; index < string2.length; index ++) {
    switch(string2[index]) {
      case '1':
        newArrayDecode.push('a');
      break;
      case '2':
        newArrayDecode.push('e');
      break;
      case '3':
        newArrayDecode.push('i');
      break;
      case '4':
        newArrayDecode.push('o');      
        break;
      case '5':
        newArrayDecode.push('u');     
        break;
    default:
        newArrayDecode.push(string2[index]);
    }
  }
  newArrayDecode = newArrayDecode.join("");
  return newArrayDecode;
}

// Desafio 10
function techList(technologies,name) {
  if (technologies.length !==0){
    technologies = technologies.sort();
    let newObject = [];
    for (let index2 =0; index2<technologies.length;index2++) {
      newObject[index2] = {
        'tech':technologies[index2],
        'name':name
      }
    } console.log(newObject);
} else {
    return 'Vazio!';
}
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
