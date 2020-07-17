// Desafio 1
function compareTrue(a, b) {
  if ((a === true) && (b === true)){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height/2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(arrayString) {
  return arrayString[arrayString.length-1]+ ", " + arrayString[0]; 
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
 
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let outroGato1 = 0;
  let outroGato2 = 0;
  let trombadaCabulosa = "os gatos trombam e o rato foge";
  if (cat1 > mouse){
    outroGato1 = cat1 - mouse;
  } else {
    outroGato1 = mouse - cat1
  }
  if(cat2 > mouse){
    outroGato2 = cat2 - mouse;
  } else {
    outroGato2 = mouse - cat2;
  }
  if (outroGato1 > outroGato2){
    return cat2;
  } else if (outroGato2 > outroGato1){
    return cat1;
  } else {
    return trombadaCabulosa;
  }
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
}