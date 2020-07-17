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
  return "'" + resultadoNome + "'"
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
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

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
  let vogais = ["a", "e", "i", "o", "u"];
  let resultado = "";
  for (i in vogais){
    if (vogais[i] === "a"){
      resultado = param1.replace("a", "1");
    }
  }
  console.log(resultado);
}

function decode(param2) {
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
