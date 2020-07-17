// Desafio 1
function compareTrue(a, b){

  if (a===true && b===true) { return true; }

  return false;
}

// Desafio 2
function calcArea(base, height){

  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string){

  return string.split(" ");
}

// Desafio 4
function concatName(arrayOfStrings){

  const firstName = arrayOfStrings[0];
  const lastName = arrayOfStrings[arrayOfStrings.length-1];

  let result = lastName + ", " + firstName;

  return result;
}

// Desafio 5
function footballPoints(wins,ties){

  let points = (wins * 3) + ties;

  return points;
}

// Desafio 6
function highestCount(array) {

  let globalCounter = 0;
  let compare;

  for (let i = 0; i < array.length; i++) {
    let counter = 0;

    compare = array[i];

    for (let j = 0; j < array.length; j++) {
      if (compare === array[j]) {
        counter += 1;
      }

      if (counter > globalCounter) {
        globalCounter = counter;
      }
    }
  }

  return globalCounter;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {

  let distCat1 = Math.abs(mouse - cat1)
  let distCat2 = Math.abs(mouse - cat2)

  if (distCat1 < distCat2) { return "cat1" }

  if (distCat1 > distCat2) { return "cat2" }

  return "os gatos trombam e o rato foge"
}

// Desafio 8
function fizzBuzz() {

  let result = []
  
  for(let j=0; j<array.length; j++) {

    if (array[j]%3==0 && !(array[j]%5==0)) {
      result.push("fizz")
    } else
  
    if (!(array[j]%3==0) && array[j]%5==0) {
      result.push("buzz")
    } else
  
    if (array[j]%3==0 && array[j]%5==0) {
      result.push("fizzBuzz")
    } else
  
    if (!(array[j]%3==0) && !(array[j]%5==0)) {
      result.push("bug!")
    }

  }

  return result
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
