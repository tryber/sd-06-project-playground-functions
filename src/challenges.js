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
function fizzBuzz(arrayNumber) {
  let arrayString = [];
  for (i=0; i<arrayNumber.length; i++) {
    
    if ((arrayNumber[i] % 3 === 0)&& (arrayNumber[i] % 5 === 0)) {
    arrayString.push("fizzBuzz")
  }  //do if
  else if ((arrayNumber[i] % 3 === 0)&& (arrayNumber[i] % 5 !== 0)) {
    arrayString.push("fizz")
}  // primeiro else if
else if ((arrayNumber[i] % 3 !== 0)&& (arrayNumber[i] % 5 !== 0)) {
  arrayString.push("Buzz")
} // segundo else if
else {
  arrayString.push("Bug") 
} //else

  } // for
} // function

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
function generatePhoneNumber(array) {
let isValidNumber = array.lenght
  if (array.length !== 11){
  return "Array de tamnanho incorreto"
  let ddArray = [];
for (let index = 0; index <=10; index +=1){


}

let firstPart = [];
for (let index = 2; index <=6; index +=1){
  firstPart.push(array[index]);
}

let secondPart = [];
for (let index = 7; index <=10; index +=1){
  secondPart.push(array[index]);
}

let dddFormated = dddArray.join("");
let firstPartFormatted = firstPartFormatted.join("");
let secondPartFormatted = secondPartFormatted.join("");
let formattedNumber = "(" +dddFormated+") "+ firstPartFormatted + "-" + secondPartFormatted;
return formattedNumber
}
let phone = [3, 1, 9, 9, 9, 9, 9, 0, 0, 0, 0];
console.log(generatePhoneNumber(phone));

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
