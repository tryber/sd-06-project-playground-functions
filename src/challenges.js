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
  return resultadoNome;
}

// Desafio 5
function footballPoints(wins,ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let highNumber = 0;
  let index = 0;
  let count = 0;
  for (i in numbers){
    if (numbers[index] < numbers [i]){
      highNumber = numbers[i];
      index = i;
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
  distanciaCat1 = mouse - cat1;
  distanciaCat2 = mouse - cat2;
  if (distanciaCat1 > distanciaCat2){
    return ("cat2");
  } else if (distanciaCat1 < distanciaCat2){
    return ("cat1");
  } else {
    return ("os gatos trombam e o rato foge");
  }
}

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
