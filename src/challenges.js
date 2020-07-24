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
function techList(array, name) {
  let objectList = [];
  let ordenedName = array.sort();
  for(let i in ordenedName){
      let object = {
        tech: ordenedName[i],
        name: name
      };
      objectList[i] = object;
  }
  return objectList;   
}

// Desafio 11
function generatePhoneNumber(array) {
  let count = 0;
  let count2 = 0;
  let count3 = 0;
  if (array.length !== 11){
    return "Array com tamanho incorreto.";
  }
  for (let i = 0; i < array.length; i += 1){
    count = 0;
    for (let j = 0; j < array.length; j += 1){
      if (array[i] < 0 || array[i] > 9){
        count2 += 1;
      }
      if(array[i] === array[j]){
        count += 1;
      }
      if(count > count3){
      count3 = count;
      }
    }
  }
  if(count3 > 2 || count2 > 0){
    return "não é possível gerar um número de telefone com esses valores";
  } else {
    return "(" + array[0] + array[1] + ") " + array[2] + array[3] + array[4] + array[5] + array[6] + "-" + array[7] + array[8] + array[9] + array[10];
    }
}


// Desafio 12
function triangleCheck(lineA, LineB, LineC) {
  if(Math.abs(lineB - lineC) < lineA < (LineB + LineC) || Math.abs(lineA - lineC) < lineB < (lineA + LineC) || Math.abs(lineA - lineB) < lineC < (lineA + LineB)){
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(string) {
    let waterCup = 0;
    let numbers = string.match(/\d+/g).map(Number);
    for (let i = 0; i < numbers.length; i++){
      waterCup += numbers[i];
    }
    let stringHydrate = ""
    if (waterCup === 1){
      stringHydrate = waterCup + " copo de água";
    } else {
      stringHydrate = waterCup + " copos de água";
    }
    return stringHydrate;
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