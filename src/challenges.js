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
function encode(entrada) {
  let codigo = entrada.replace(/a|á|ã|â/gi, 1)
  .replace(/e|ê|é/gi, 2)
  .replace(/i|í/gi, 3)
  .replace(/o|õ|ó|ô/gi, 4)
  .replace(/u|ú/gi, 5);

  return codigo;
}

function decode(entrada) {
  let codigo = entrada.replace(/1/gi, "a")
      .replace(/2/gi, "e")
      .replace(/3/gi, "i")
      .replace(/4/gi, "o")
      .replace(/5/gi, "u");

  return codigo;
}

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return "Array com tamanho incorreto."
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0 || array[i] > 9 || (array[i] === array[i + 1] && array[i] === array[i + 2])) {
      return "não é possível gerar um número de telefone com esses valores"
    }
  }
  let numeros = `(${array.slice(0,2).join("")}) ${array.slice(2,7).join("")}-${array.slice(7).join("")}`
  return numeros;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let somaAB = lineA + lineB;
  let somaBC = lineB + lineC;
  let somaAC = lineA + lineC;
  let subAB = Math.abs(lineA - lineB);
  let subBC = Math.abs(lineB - lineC);
  let subAC = Math.abs(lineA - lineC);
  let triangleChecker = false;

  if ((lineC < somaAB) && (lineA < somaBC) && (lineB < somaAC) && (lineC > subAB) && (lineA > subBC) && (lineB > subAC)) {
    triangleChecker = true;
  }
  return triangleChecker;
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
