// Desafio 1
function compareTrue(parametro1, parametro2){
  if (parametro1 && parametro2) {
    return true;
  }else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2
  return area;
}

// Desafio 3
function splitSentence(parametroString) {
  array = parametroString.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  console.log(array[array.lenght - 1]+","+array[0])
}

// Desafio 5
function footballPoints(wins, ties){
  pontos = (wins*3)+(ties*1);
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let identificaMaior = 0;
  let numeroRepetido = 0;
  for (let i = 0; i < array.lenght; i += 1){
    if (array[i]>identificaMaior){
      identificaMaior = array[i];
    }
  }
  for (let i = 0; i < array.lenght; i += 1){
    if (array[i]==identificaMaior){
      numeroRepetido += 1;
    }
  }
  return numeroRepetido;
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
