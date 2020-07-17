// Desafio 1

function compareTrue(valor1, valor2) {
  if( valor1 === true && valor2 === true ){
    return true;
  }else{
    return false;
  }
}
console.log(compareTrue(0,1));

// Desafio 2
let base;
let altura;
function calcArea(base,altura) {
  return (base*altura)/2;
}


// Desafio 3
function splitSentence(testaString) {
  //testaString = "Go Trybe"
  //let splitTestaString = testaString.split(" ");
  
}



// Desafio 4
let arrayNomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName() {
  let arrayPrimeiroUltimo=[];
  return arrayPrimeiroUltimo = (arrayNomes[arrayNomes.length -1]) + arrayNomes[0];
}
console.log(concatName());

// Desafio 5
function footballPoints(ties, wins) {
  return (ties * 1) + (wins * 3);
  
}


// Desafio 6
let arrayNumeros = [9, 1, 2, 3, 9, 5, 7],
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
let arrayNumeros=[];
function fizzBuzz(arrayNumeros) {
  arrayNumeros = [2,3,4,5,6,7,8,9,10];
  for (let i = 0; i < arrayNumeros.lenght; i += 1){
    if ( arrayNumeros[i] % 3 === 0 && arrayNumeros[i] % 5 === 0){
      return "fizzBuzz";
    }else if( arrayNumeros[i] % 3 === 0){
      return "fizz";
    }else if ( arrayNumeros[i] % 5 === 0){
      return "buzz";
    }else{
      return "bug!";
    }

  }
  console.log(fizzBuzz(arrayNumeros));

  
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
