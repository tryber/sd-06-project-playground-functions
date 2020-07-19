// Desafio 1 //iniciando
function compareTrue(num1, num2) {
  // seu código aqui
  if(num1 === true && num2 === true){
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return(base * height)/2

}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
let str = "go Trybe teste";
let separador = str.split(", ");
console.log(separador);
}


// Desafio 4
function concatName() {
  // seu código aqui
  let string = ["jucielei, Roberto, Juliano"];
  let f=0;
  let l=string[string.lenght-1];
  console.log("primeiro item e: "+f );
  console.log("ultimo elemento: "+l);
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
