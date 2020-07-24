//01 - Compara valores booleanos
compareTrue(true,true)
function compareTrue(boolean1,boolean2){
  let firstValue = boolean1;
  let secondValue = boolean2;
  if(firstValue == true && secondValue == true){
    return console.log('true');
  }else{
    return console.log('false');
  }
}

//02 - Calcula área do triangulo
function calcArea(base,height){
  let area = (base * height) / 2;
  return console.log(area);
}

calcArea(10,20);

//03 - Dividino a frase
function splitSentence(string) {
  string.split(' ');
  return console.log(string);
}

splitSentence("go Trybe");

//04 - Concatenação de strings
function concatName(stringArray){
  console.log(stringArray[stringArray.length -1] + ", " + stringArray[stringArray.length -2]);
}

concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);

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

calcArea();
  return console.log(winsPoints,tiesPoints);
}

footballPoints(5,6);

//06 - Repetição do maior número
// Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.
// Exemplo: caso o parâmetro de highestCount seja uma array com valores [9, 1, 2, 3, 9, 5, 7], a função deverá retornar 2, que é a quantidade de vezes que o número 9 (maior número do array) se repete.

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
  return console.log("Maior numero foi repetido " + timesRepeated + " vezes");
}

highestCount([9, 1, 2, 3, 9, 5, 7]);

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

catAndMouse(1,2,2);

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

  return console.log(result);
}

fizzBuzz([2, 15, 7, 9, 45]);

//9 - Codifique e Decodifique

// A segunda função deverá se chamar decode e faz o contrário de encode - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode seja "h3 th2r2!", o retorno deverá ser "hi there!").

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
  return console.log(finalResult);
}

encode('hi there!');

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
  return console.log(finalResult);
}

decode('h3 th2r2!');

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
} 