// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true){
    return true;
  }
   else{
    return false
  }
}
console.log(compareTrue(true,true))

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let word = "";
  let stringArray = [];
  for (i in string){
    if (string[i] !== " "){
      word += string[i];
    }
    else if (string[i == " "){
      stringArray.push(word);
      word = "";
    }
  }
  stringArray.push(word);
  return stringArray;
}

// Desafio 4
function concatName(array) {
  firstLast = array [0] + ", " + array[array.length-1];
  return firstLast
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount(arr) {
  // seu código aqui
    let highestNumber = arr[0];
    for (let i = 0; i < arr.length; i+= 1){
      highestNumber
    }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
let distCat1 = mouse - cat1;
let distCat2 = mouse - cat2;
  if (distCat1 < distCat2){
    return "cat1";
  } else if (distCat1 === distCat2) {
      return "Cats gonna colide";
  } 
  else {
    return "cat2";
   }
}
console.log(catAndMouse(10,6,6))

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
