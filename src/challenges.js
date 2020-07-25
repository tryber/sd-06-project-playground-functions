//01 - Compara valores booleanos
function compareTrue(a,b) {
  if (a === true && b === true){
    return true
  }else{
    return false
  }
}

//02 - Calcula área do triangulo
function calcArea(base,height){
  let area = (base * height) / 2;
  return area;
}

//03 - Dividino a frase
function splitSentence(string) {
  string.split(' ');
  return string;
}
//splitSentence("go Trybe");

//04 - Concatenação de strings
function concatName(stringArray){
  return stringArray[stringArray.length -1] + ", " + stringArray[stringArray.length -2];
}

//05 - Pontos no futebol
function footballPoints(wins, ties){
  let winsPoints = 0;
  let tiesPoints = 0;

  for(let i = 0; i < wins; i++){
    winsPoints = wins * 3;
  }

  for(let j = 0; j < ties; j++){
    tiesPoints = ties;
  }
  return winsPoints,tiesPoints;
}

//06 - Repetição do maior número
function highestCount(arrayNumbers){
  let biggerNumber = [0];
  let timesRepeated = 0;

  for(let i in arrayNumbers){
    if(arrayNumbers[i] > biggerNumber[0]){
      biggerNumber = arrayNumbers[i];
    }
  }

  for(let j in arrayNumbers){
    if(biggerNumber === arrayNumbers[j]){
      timesRepeated += 1;
    }
  }
  return timesRepeated;
}

//07 - Caça ao rato
function catAndMouse(cat1, cat2, mouse){
  position = [cat1,cat2,mouse];

  if(position[cat2] - position[mouse] == 1 && position[cat1] - position[mouse] == 2){
    return console.log(position[cat2]);
  }else if(position[cat1] == position[mouse]){
    return console.log("os gatos trombam e o rato foge !!!");
  }

  if(position[cat1] || position[cat2]){
    return;
  }
}

//8 - FizzBuzz
function fizzBuzz(arrayNumbers){
  result = [];
  for(i in arrayNumbers){
    if(arrayNumbers[i] % 3 === 0 && arrayNumbers[i] % 5 === 0){
      result.push("fizz");
    }else if(arrayNumbers[i] % 5 === 0){
      result.push("buzz");
    }else if(arrayNumbers[i] % 3 === 0){
      result.push("fizzBuzz");
    }else{
      result.push("bug");
    }
  }

  return result;
}

//9 - Codifique e Decodifique
function encode(string) {
  let phrase = string.split('')

  for (i in phrase) {
    if (phrase[i] === 'a') {
      phrase[i] = '1';
    } else if (phrase[i] === 'e') {
      phrase[i] = '2';
    } else if (phrase[i] === 'i') {
      phrase[i] = '3';
    } else if (phrase[i] === 'o') {
      phrase[i] = '4';
    } else if (phrase[i] === 'u') {
      phrase[i] = '5';
    }
  }
  let finalResult = phrase.join('');
  return finalResult;
}


function decode(string){
  let phrase = string.split('');

  for (i in phrase) {
    if (phrase[i] === '1') {
      phrase[i] = 'a';
    } else if (phrase[i] === '2') {
      phrase[i] = 'e';
    } else if (phrase[i] === '3') {
      phrase[i] = 'i';
    } else if (phrase[i] === '4') {
      phrase[i] = 'o';
    } else if (phrase[i] === '5') {
      phrase[i] = 'u';
    }
  }
  let finalResult = phrase.join('');
  return finalResult;
}

// Desafio 10
function techList() {
}

// Desafio 11
function generatePhoneNumber() {
}

// Desafio 12
function triangleCheck() {
}

// Desafio 13
function hydrate() {
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