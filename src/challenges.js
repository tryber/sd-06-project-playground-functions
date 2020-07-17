// Desafio 1

function compareTrue(valor1, valor2) {
  let result = false;
  if (valor1 == true && valor2 == true) {
    result = true;
  } else {
    result;
  }
  return result;
}
console.log(compareTrue(false, false));


// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2
  return area
 }
 console.log(calcArea(10, 20))


// Desafio 3
function splitSentence(string) {
  let result = string.split(" ")
  return result
}
console.log(splitSentence("Eu sou Júlia"))


// Desafio 4
function concatName(array) {
  let result 
  let primeiro = array[array.length -1]
  let segundo = array[0]

  result = primeiro + ", " + segundo
  return result

}

console.log(concatName(['Júlia', 'Pôrto', 'Trybe', 'Course']))


// Desafio 5
function footballPoints(wins, ties) {
  let result = (wins * 3) + ties;
  return result
}

console.log(footballPoints(3, 2))


// Desafio 6
let n = 0;
let atual = 0;
let numeroRepetido = 0;
let abencoado = 0;

function highestCount(array){
    for (let i in array){
    
        for(let j in array){
            if(array[i]===array[j]){
                 n++;
            }
            //  if(array[i]>array[n]){
            //         n++;
            //  }
        }
   
    }

    return n;
}

console.log(highestCount([2, 2, 10, 3, 5, 3, 7, 3, 3]));


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultCat1 = cat1 - mouse;
  let resultCat2 = cat2 - mouse;
  let result;
  if (resultCat1 === resultCat2) {
    result = "Os gatos trombam e o rato foge"
  } else if (resultCat1 > resultCat2) {
    result = "Gato 2 pega o rato"
  } else {
    result = "Gato 1 pega o rato"
  }
  return result;
}
console.log(catAndMouse(2, 3, 3))


// Desafio 8
let result
let arrayNumeros = [8, 5]
//function fizzBuzz(arrayNumeros) {
  for (let i = 0; i <= arrayNumeros; i++) {
    if (i % 3 === 0 && i % 5 ===0) {
      arrayNumeros[i] = "fizzBuzz";
    } else if ( i % 5 === 0) {
      arrayNumeros[i] = "buzz";
    } else if (i % 3 === 0) {
      arrayNumeros[i] = "fizz";
    } else {
      arrayNumeros[i] = "bug";
    }
  //}
  //return result
}
console.log(arrayNumeros[i]);


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
