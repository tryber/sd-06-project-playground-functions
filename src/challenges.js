// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
}

// Desafio 3
function splitSentence(exemplo) {
  var palavras = '';
  palavras = exemplo.split(' ')
  return palavras
}

// Desafio 4
function concatName(array) {
  return array[array.length -1] + ', ' + array[0]
}
var comidas = ['farinha', 'arroz', 'feijao', 'beterraba', 'oleo'];
console.log(concatName(comidas))

// Desafio 5
function footballPoints(wins, ties) {
return (wins * 3) + (ties * 1)
}
console.log(footballPoints(3, 4))

// Desafio 6
function highestCount(numero) {
  var maiorNumero = -10000;
  var repetidor = 1;
  for ( var c = 0; c < numero.length; c += 1){
    if (numero[c] > maiorNumero){
      maiorNumero = numero[c];
      repetidor = 1;
    } else if (numero[c] == maiorNumero){
      repetidor += 1;
    }
  }
  return repetidor
}
var numeros = [1, 5, 7, 7, 7, 5, 6, 7, 6, 3, 5, 7];
console.log(highestCount(numeros));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  var distancia1 = 0;
  var distancia2 = 0;
  if (mouse > cat1){
    for (let c = cat1; c < mouse; c += 1) {
      distancia1 += 1;
    }
  } else if (cat1 > mouse){
    for (let c = mouse; mouse < cat1; mouse += 1){
      distancia1 += 1;
    }
  }
  if (mouse > cat2){
    for (let c = cat2; c < mouse; c += 1) {
      distancia2 += 1;
    }
  } else if (cat2 > mouse){
    for (let c = mouse; mouse < cat2; mouse += 1){
      distancia2 += 1;
    }
  }
  if (distancia1 < distancia2){
    return 'cat1'
  } else if (distancia2 < distancia1) {
    return 'cat2'
  } else {
    return "os gatos trombam e o rato foge"
  }
}
console.log(catAndMouse( -5, -1, -2))

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
