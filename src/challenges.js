// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2){
    return true;
  } else {
    return false;
  }
}
console.log("exercicio 1: " + compareTrue(false,true));

// Desafio 2
function calcArea(base,height) {
  var calculoArea= (base*height)/2;
  return calculoArea
}
console.log("exercicio 2: " + calcArea(10,20));

// Desafio 3
function splitSentence(str){
  var res = str.split(" ");
  return res
  }
  console.log("exercicio 3: " + splitSentence("Eu sou Tryber"));

// Desafio 4
function concatName (nomescompleto) {
  let nomes = nomescompleto[nomescompleto.length-1] +', '+ nomescompleto[0]
  return nomes
}
  console.log("Exercicio 4: " + concatName(['veruska','lucas','lara']));
   

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
