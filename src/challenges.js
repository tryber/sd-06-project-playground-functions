// Desafio 1
  function compareTrue(a, b) {
    let resultado = false;
  if (a == true && b == true) {
    resultado = true;
} else {
      resultado;
  }
  return resultado;
}

console.log(compareTrue(true, true));


// Desafio 2
function calcArea(base, heigth){
  let resultado = (base * heigth) / 2;
  return resultado;
}

console.log(calcArea(5, 10));


// Desafio 3
function splitSentence(string) {
  resultado = string.split(" ");

  return resultado;
}

console.log(splitSentence("Bruna e Julia"))


// Desafio 4
function concatName(array) {
  let result 
  let primeiro = array[array.length -1]
  let segundo = array[0]

  result = primeiro + ", " + segundo
  return result

}

console.log(concatName(['Bruna', 'Franciele', 'Trybe', 'Course']))


// Desafio 5
function footballPoints(wins, ties) {
  let resultadoCamp = (wins * 3) + ties;
  return resultadoCamp
}

console.log(footballPoints(3, 2))


// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultCat1 = cat1 - mouse;
  let resultCat2 = cat2 - mouse;
  let result;
  if (resultCat1 === resultCat2) {
    result = "Os gatos trombam e o rato foge";
  } else if (resultCat1 > resultCat2) {
    result = "Gato 2 pega o rato";
  } else {
    result = "Gato 1 pega o rato";
  }
  return result;
}
console.log(catAndMouse(2, 3, 3))



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
