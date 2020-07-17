// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  let arrFirst = arr[0];
  let arrLast = arr[arr.length - 1];
  return arrLast.concat(', ', arrFirst);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + ties;
}

// Desafio 6
function highestCount(arr) {
  let count = 0;
  let highestNumber = arr[0];

  for (let index = 0; index < arr.length; index += 1) {
    if (highestNumber < arr[index]) {
      highestNumber = arr[index];
      count = 1;
    } else if (highestNumber === arr[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1m = (cat1 - mouse) < 0 ? (mouse - cat1) : (cat1 - mouse);
  let dist2m = (cat2 - mouse) < 0 ? (mouse - cat2) : (cat2 - mouse);

  if (dist1m > dist2m) {
    return 'cat1';
  }
  if (dist1m < dist2m) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
};
