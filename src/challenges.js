// Desafio 1
function compareTrue(x, y) {
  return x === true && y === true; 
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
}

// Desafio 3
function splitSentence(string) {
  string = string.split(' ');

  return string;
}

// Desafio 4
function concatName(array) {
  array = array[array.length-1] + ", " + array[0];
  return array;
}

// Desafio 5
function footballPoints(win, ties) {
  let points = 0;
  for (i = 1; i <= win; i += 1) {
    points += 3;
  }
  for (j = 1; j <= ties; j += 1) {
    points += 1;
  }
  return points;
}

// Desafio 6
function highestCount(array) {
  let greater = 0;
  let count = 0;
  for (i = 0; i < array.length; i += 1) {
    if (array[i] > greater) {
      greater = array[i];
    }
  }
  for (j = 0; j < array.length; j +=1) {
    if (array[j] === greater) {
      count += 1; 
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 < distanceCat2) {
    return "cat1";
  } else if (distanceCat1 > distanceCat2) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuz = [];
  for (i in array) {
    if (array[i] % 5 == 0 && array[i] % 3 == 0) {
      fizzBuz.push("fizzbuzz");
    } else if (array[i] % 3 == 0) {
      fizzBuz.push("fizz");
    } else if (array[i] % 5 == 0) {
      fizzBuz.push("buzz");
    } else {
      fizzBuz.push("bug!");
    }
  }
  return fizzBuz;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
