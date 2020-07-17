// Ore no Starto da!!
// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let split = string.split(" ");
  return split;
}

// Desafio 4
function concatName(array) {
  let lastFirst = array[array.length - 1] + ", " + array[0];
  return lastFirst
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let high = array [0];
  let repeat = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (high < array[i]) {
      high = array[i];
    }
  }
  for (i = 0; i < array.length; i += 1) {
    if (high === array[i]) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(cat1 - mouse);
  let positionCat2 = Math.abs(cat2 - mouse);

  if (positionCat1 < positionCat2) {
    return "cat1";
  } else if (positionCat2 < positionCat1) {
    return "cat2";
  }
  return "os gatos trombam e o rato foge";
}

// Desafio 8
function fizzBuzz(array) {
  let fbzz = [];
  for (i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      fbzz.push("fizzBuzz");
    } else if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      fbzz.push("fizz");
    } else if (array[i] % 5 === 0 && array[i] % 3 !== 0) {
      fbzz.push("buzz");
    } else {
      fbzz.push("bug!");
    }
  }
  return fbzz;
}

// Desafio 9
function encode(string) {
  
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
