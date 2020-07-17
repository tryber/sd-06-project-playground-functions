// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;  
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2
}
console.log(calcArea(3, 1))

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}
console.log(splitSentence("Hj é sexta, só que tem projeto pro final de semana!"));

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins *3 + ties * 1);
}console.log(footballPoints(2, 3));


// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let balanceCat1 = Math.abs((mouse - cat1));
  let balanceCat2 = Math.abs((mouse - cat2));
  if (balanceCat1 > balanceCat2) {
    return "cat2";
  } else if (balanceCat2 > balanceCat1) {
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  }
}
console.log(catAndMouse(1, 2, 3));

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
}
