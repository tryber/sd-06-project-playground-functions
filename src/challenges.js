// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else if (value1 === false || value2 === false) {
    return false;
  }
} console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  let calc = (base * height) / 2;
  return calc;
} 
console.log(calcArea(10, 10));
 
// Desafio 3
function splitSentence(string) {
  return string.split(" ");  
} 
console.log(splitSentence("Hello World"));

// Desafio 4
function concatName(recebeArray) {
  return recebeArray[recebeArray.length -1] + ", " + recebeArray[0];
} 
console.log(concatName(nomes = ["Ana", "Jean", "Pedro", "Maria", "Joao"]));

// Desafio 5
function footballPoints(wins, ties) {
  let totalPontos = (wins * 3) + (ties * 1);
  return totalPontos;
}
console.log(footballPoints(10, 5));

// Desafio 6
function highestCount(arr) {
  let numeroMaisAlto = retornaMaiorNumeroDoArray(arr);
  let numeroContagemMaisAlto = retornaMaiorNumeroDaContagem(numeroMaisAlto, arr);
  return numeroContagemMaisAlto;
}

function retornaMaiorNumeroDaContagem(numeroMaisAlto, array) {
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (numeroMaisAlto == array[index]) {
    count += 1;
    }
  }
  return count;  
}

function retornaMaiorNumeroDoArray(array) {
  let numeroMaisAlto = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > numeroMaisAlto) {
      numeroMaisAlto = array[index];
    }
  }
  return numeroMaisAlto;
}
console.log(highestCount(numeros = [9, 1, 2, 3, 9, 5, 7]));

















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
