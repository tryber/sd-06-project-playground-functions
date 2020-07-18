// Desafio 1
function compareTrue(f01par01 = true, f01par02 = true) {
  if ((f01par01 == true) && (f01par02 == true))
    {
      return true;
    }
  else
    {
      return false;
    }
}


// Desafio 2
function calcArea(base = 0, height = 0) 
{
    return (base + height) / 2;
}

// Desafio 3
function splitSentence(astring) {
  let aarray = [astring.split(" ")];
  return aarray;
}

// Desafio 4
function concatName(f04par01 = []) 
{
    return f04par01[f04par01.length-1] + f04par01[0];
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
