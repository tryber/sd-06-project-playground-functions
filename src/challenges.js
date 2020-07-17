// Desafio 1
function compareTrue(a, b) {
  let compare = false;
  if (a && b) {
    compare = true;
  }
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let array = frase.split(" ");
  return array;
}

// Desafio 4
function concatName(entrada) {
  let array = [entrada[entrada.length - 1], entrada[0]].join(", ")
  return array;
}

// Desafio 5
function footballPoints(wins, ties) {
  if (wins < 0 | ties < 0) {
    return "Você inseriu dados negativos. Por favor, corrija as informações."
  }
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = 0;
  let freq = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > array[i - 1] && array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }
  for (let j = 0; j < array.length; j += 1) {
    if (array[j] === maiorNumero) {
      freq += 1;
    }
  }
  return freq
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(mouse - cat1)
  let distancia2 = Math.abs(mouse - cat2)
  let maisProximo = ""
  if (distancia1 > distancia2) {
    maisProximo = "cat2"
  } else if (distancia1 < distancia2) {
    maisProximo = "cat1"
  } else {
    maisProximo = "os gatos trombam e o rato foge"
  }
  return maisProximo
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      newArray[i] = "fizz";
    } else if (array[i] % 3 !== 0 && array[i] % 5 === 0) {
      newArray[i] = "buzz";
    } else if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      newArray[i] = "fizzBuzz";
    } else {
      newArray[i] = "bug!";
    }
  }
  return newArray;
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
