// Desafio 1
function compareTrue(bol1, bol2) {
  if(bol1 == true && bol2 == true){
    return true;
}else{

    return false;
}
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height) / 2;
    return area; 
}

// Desafio 3
function splitSentence(string) {
  let novaString = string.split(" ");
    return novaString; 
}

// Desafio 4
function concatName(string) {
  let last = string[0];
  let first = string[string.length - 1];
  fraseFinal =  first + ", " + last;
  return fraseFinal;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPontos = wins * 3;
  let total = winPontos + ties;
  return total;
}
// Desafio 6
function highestCount(num) {
    let maiorNum = num[0];
    for(let index = 0; index < num.length; index += 1){
      if(num[index] > maiorNum){
        maiorNum = num[index];
      }
    }
    let count = 0;
    for(let index = 0; index < num.length; index += 1){
      if(maiorNum == num[index]){
        count += 1;
      }
    }
    return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = 0;
  let distCat2 = 0;
  //mouse: 1, cat1: 0, cat2: 2
  if(mouse < cat1){
    distCat1 = cat1 - mouse;
  }
  else if(mouse > cat1){
    distCat1 = mouse - cat1;
  }

  if(mouse < cat2){
    distCat2 = cat2 - mouse;
  } 
  else if (mouse > cat2){
    distCat2 = mouse - cat2;
  }

  if(distCat1 < distCat2 && distCat1 != distCat2 ){
    return "cat1";
  }else if(distCat1 > distCat2 && distCat2 != distCat1){
    return "cat2";
  }else if(distCat1 == distCat2){
    return "os gatos trombam e o rato foge";
  }
}


// Desafio 8
function fizzBuzz(arr) {
  for(i = 0; i < arr.length; i+=1){

    if(arr[i] % 3 === 0 && arr[i] % 5 !== 0){
      arr[i] = "fizz";
    }
    else if(arr[i] % 5 === 0 && arr[i] % 3 !== 0){
      arr[i] = "buzz";
    }
    else if(arr[i] % 5 === 0 && arr[i] % 3 === 0){
      arr[i] = "fizzBuzz";
    }
    else{
      arr[i] = "bug!"
    }
  }
  return arr;
}

// Desafio 9
function encode(string) {
  let arrayS = string.split("");
  for(let i = 0; i < arrayS.length; i++){
    if(arrayS[i] == "a"){
      arrayS[i] = 1;
    }
    else if(arrayS[i] == "e"){
      arrayS[i] = 2;
    }
    else if(arrayS[i] == "i"){
      arrayS[i] = 3;
    }
    else if(arrayS[i] == "o"){
      arrayS[i] = 4;
    }
    else if(arrayS[i] == "u"){
      arrayS[i] = 5;
    }
  }
  arrayString = arrayS.join("");
  return arrayString;
}

function decode(string) {
  let arrayS = string.split("");
  for(let i = 0; i < arrayS.length; i++){

    if(arrayS[i] == "1"){
      arrayS[i] = "a";
    }
    else if(arrayS[i] == "2"){
      arrayS[i] = "e";
    }
    else if(arrayS[i] == "3"){
      arrayS[i] = "i";
    }
    else if(arrayS[i] == "4"){
      arrayS[i] = "o";
    }
    else if(arrayS[i] == "5"){
      arrayS[i] = "u";
    }
  }
  arrayString = arrayS.join("");
  return arrayString;
}
// Desafio 10
function techList(techs, name) {
  let techSorted = techs.sort();
  let list = [];
  for(i=0; i < techs.length; i++){
    if(techs == ""){
      return "Vazio!";
    }
    list.push(
      {
        tech: techSorted[i],
        name: name 
      },
    )
  }
  return list;
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
