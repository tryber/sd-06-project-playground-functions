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
    else if (string[i] == " "){
      stringArray.push(word);
      word = "";
    }
  }
  stringArray.push(word);
  return stringArray;
}
console.log(splitSentence(stringArray = "go trybe"));


// Desafio 4
function concatName(array) {
  lastFirst = array[array.length-1] + ", " + array[0] ;
  return lastFirst;
}


// Desafio 5
function footballPoints(wins, ties) {
return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(arr) {
  // seu código aqui
    let highestNumber = arr[0];
    let count = 0
    for (let i = 0; i < arr.length; i+= 1){
      if (arr[i] == highestNumber) {
        count += 1;
      }
      if (arr[i] > highestNumber) {
        highestNumber = arr[i];
        count = 1;
      }
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
function generatePhoneNumber() {

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