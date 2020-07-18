// Desafio 1
function compareTrue(a, b) {
  if ((a === true) && (b === true)){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height/2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(arrayString) {
  return arrayString[arrayString.length-1]+ ", " + arrayString[0]; 
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let counter = 0;
  let maiorNumero = 0;
  for (let i = 0; i < array.length; i++) {
    if(array[i] > maiorNumero){
      maiorNumero = array[i];
    }
  }
  for(let i = 0; i < array.length; i++){
    if (maiorNumero === array[i]) {
        counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let outroGato1 = 0;
  let outroGato2 = 0;
  let trombadaCabulosa = "os gatos trombam e o rato foge";
  if (cat1 > mouse){
    outroGato1 = cat1 - mouse;
  } else {
    outroGato1 = mouse - cat1
  }
  if(cat2 > mouse){
    outroGato2 = cat2 - mouse;
  } else {
    outroGato2 = mouse - cat2;
  }
  if (outroGato1 > outroGato2){
    return "cat2";
  } else if (outroGato2 > outroGato1){
    return "cat1";
  } else {
    return trombadaCabulosa;
  }
}

// Desafio 8
function fizzBuzz(arrayNumber) {
  let arrayString = [];
  for (i = 0; i < arrayNumber.length; i++){
    if ((arrayNumber[i] % 3 === 0) && (arrayNumber[i] % 5 === 0)) {
        arrayString.push("fizzBuzz");
    } else if ((arrayNumber[i] % 3 === 0)){
      arrayString.push("fizz");
    } else if ((arrayNumber[i] % 5 === 0)){
      arrayString.push("buzz");
    } else {
      arrayString.push("bug!");
    }
  }
  return arrayString;
}


// Desafio 9
function encode(string) {
  let codedString = "";
  for(let i = 0; i < string.length; i++){
      if (string[i] == "a"){
        codedString += "1";
      } else if(string[i] == "e"){
        codedString += "2";
      } else if(string[i] == "i"){
        codedString += "3";
      } else if(string[i] == "o"){
        codedString += "4";
      } else if(string[i] == "u"){
        codedString += "5";
      } else{
        codedString += string[i];
      }
  }
  return codedString;
  
}
function decode(string) {
  let codedString = "";
  for(let i = 0; i < string.length; i++){
      if (string[i] == "1"){
        codedString += "a";
      } else if(string[i] == "2"){
        codedString += "e";
      } else if(string[i] == "3"){
        codedString += "i";
      } else if(string[i] == "4"){
        codedString += "o";
      } else if(string[i] == "5"){
        codedString += "u";
      } else{
        codedString += string[i];
      }
  }
  return codedString;
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