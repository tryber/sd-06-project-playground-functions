// Desafio 1
function compareTrue(boolean1, boolean2) {
  return boolean1 && boolean2;
}

// Desafio 2
function calcArea(base, height) {
  return base * height/2;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let string = `${array[array.length -1]}, ${array[0]}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let maiorNumero = numbers[0]
  let contador = 0
  for(let i= 1; i < numbers.length; i++) {
    if(numbers[i] > maiorNumero){
      maiorNumero = numbers[i]
    };
  };
  for(n in numbers){
    if(numbers[n] === maiorNumero) {
      contador++
    };
  };
  return contador
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let distancia1;
  let distancia2;
  if(cat1 >= mouse){
    distancia1 = cat1 - mouse;
  } else {
    distancia1 = mouse - cat1;
  }
  if(cat2 >= mouse){
    distancia2 = cat2 - mouse;
  } else {
    distancia2 = mouse - cat2;
  }
  if(distancia1 > distancia2){
    return 'cat1';
  } else if (distancia2 > distancia1){
    return 'cat2';
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let arrayFinal = [];
  for(n in numbers) {
    if(numbers[n] % 3 === 0 && numbers[n] % 5 === 0) {
      arrayFinal[n] = "fizzBuzz";
    } else if (numbers[n] % 3 === 0 && numbers[n] % 5 != 0) {
      arrayFinal[n] = "fizz";
    } else if (numbers[n] % 3 != 0 && numbers[n] % 5 === 0){
      arrayFinal[n] = "buzz";
    } else {
      arrayFinal[n] = 'bug!';
    }
  }
  return arrayFinal
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
