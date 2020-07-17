//Desafio 1
function compareTrue( param1 , param2 ) {
    // seu código aqui
    if (param1 === true && param2 === true) {
      return true;
     } else {
      return false;
    }
  }
// Desafio 2
function calcArea( base , height ) {
  // seu código aqui
  let areaDoTri = (base * height) / 2;
  return areaDoTri
}
// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(" ");
}
// Desafio 4
function concatName( StringArray ) {
  // seu código aqui
    return StringArray[StringArray.length-1] + ", " + StringArray[0];
    }
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = 3*wins + 1*ties;
  return pontos
}
// Desafio 6
function highestCount(ArrayDeNum) {
  // seu código aqui
  var maior = 0;
  for (let i = 0; i < ArrayDeNum.length; i = i + 1) {
    if (ArrayDeNum[i] > maior) {
      maior = ArrayDeNum[i];
    }
  }
  var contador = 0;
  for (let i = 0; i < ArrayDeNum.length; i = i + 1) {
    if (ArrayDeNum[i] == maior) {
      contador = contador + 1;
    }
  }
  return contador; 
}
// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(n) {
  // seu código aqui
  for(let i = 1 ; i <= numero ; i++)
  
  if(i % 3==0){s
    numero = "fizz"
  } else if (i % 5==0) {
    numero = "buzz"
  } else if (i % 3==0 && i % 3==0) {
    numero = "fizzbuzz"
  } else {
    numero = i

  return numero
  }
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
  // seu código aquicd  
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
