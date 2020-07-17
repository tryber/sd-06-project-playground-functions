// Desafio 1
function compareTrue(param1,param2) {
  if (param1 === true && param2 === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
}

// Desafio 4
function concatName(names) {
  let resultadoNome = "";
  resultadoNome = names[names.length -1] + ", " + names[0];
  return resultadoNome
}

// Desafio 5
function footballPoints(wins,ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let highNumber = numbers[0];
  let count = 0;
  for (i in numbers){
    if (highNumber < numbers [i]){
      highNumber = numbers[i];
    }
  }
  for (j in numbers){
    if (numbers[j] === highNumber){
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  if (mouse > cat1){
    distanciaCat1 = mouse - cat1;
  } else {
    distanciaCat1 = cat1 - mouse;
  }
  if (mouse > cat2){  
    distanciaCat2 = mouse - cat2;
  } else {
    distanciaCat2 = cat2 - mouse;
  }
  if (distanciaCat1 > distanciaCat2){
    return ("cat2");
  } else if (distanciaCat1 < distanciaCat2){
    return ("cat1");
  } else {
    return ("os gatos trombam e o rato foge");
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let arrayFinal = [];
  for (i in numbers){
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0){
      arrayFinal.push("fizzBuzz");
    } else if (numbers[i] % 5 === 0){
      arrayFinal.push("buzz");
    } else if (numbers[i] % 3 === 0){
      arrayFinal.push("fizz");
    } else {
      arrayFinal.push("bug!");
    }
  }
  return arrayFinal;
}

// Desafio 9
function encode(param1) {
  param1 = param1.replace(/a/g, "1");
  param1 = param1.replace(/e/g, "2");
  param1 = param1.replace(/i/g, "3");
  param1 = param1.replace(/o/g, "4");
  param1 = param1.replace(/u/g, "5");

  console.log(param1);
}

function decode(param2) {
  param2 = param2.replace(/1/g, "a");
  param2 = param2.replace(/2/g, "e");
  param2 = param2.replace(/3/g, "i");
  param2 = param2.replace(/4/g, "o");
  param2 = param2.replace(/5/g, "u");

  console.log(param2);
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
