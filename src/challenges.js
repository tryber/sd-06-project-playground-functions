// Aloizio Borges Santos Coelho
// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true
  } return false;
  // seu código aqui
}

console.log(compareTrue(true, false))

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area
  // seu código aqui
}

console.log(calcArea(3, 4))

// Desafio 3
function splitSentence(string) {
  let palavraSeparada = string.split(' ');
  return palavraSeparada
  // seu código aqui
}

console.log(splitSentence('go Trybe'))

// Desafio 4
let arr = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
function concatName(arrei) {
  let ultimo = arrei[arrei.length - 1];
  let primeiro = arrei[0];
  let ultimoeprimeiro = ultimo + ', ' + primeiro;
  return ultimoeprimeiro
  // seu código aqui
}

console.log(concatName(arr))

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins*3) + ties; 
  return pontos
  // seu código aqui
}

console.log(footballPoints(3, 1))

// Desafio 6
function highestCount(arr2) {
  let highestNumber = arr2[0];

  for (let index = 0; index < arr2.length; index += 1) {
      if (arr2[index] > highestNumber) {
      highestNumber = arr2[index];
      }
  }

  let count = 0;
  for (let index = 0; index < arr2.length; index += 1) {
  if (highestNumber === arr2[index]) {
      count += 1;
    }
  }

  return count;
  // seu código aqui
}

let array = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(array));


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1-mouse) < Math.abs(cat2-mouse)) {
  return'cat1';
} else if (Math.abs(cat1-mouse) > Math.abs(cat2-mouse)) {
  return'cat2';
} else { 
    return'os gatos trombam e o rato foge'
}
}
console.log(catAndMouse(0, 20, 50))


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
