// Desafio 1
function compareTrue(number1,number2) {
  // seu código aqui
  return number1 && number2;
}

// Desafio 2
function calcArea(altura,base) {
  // seu código aqui
  return (base*altura)/2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(  );
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  primeiroItem = array[0];
  ultimoItem = array[array.lengh-1];
  return ultimoItem.concat(',',primeiroItem);
}

// Desafio 5
function footballPoints(times,vitorias) {
  // seu código aqui
  return (vitorias*3)+times;
}

// Desafio 6
function highestCount(array) {
  let contador = 0;
  let maiorNumero = array[0];

  for (let index = 0; index < array.length; index += 1) {
    if (maiorNumero < array[index]) {
      maiorNumero = array[index];
      contador = 1;
    } else if (maiorNumero === array[index]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let distancia1 = (cat1 - mouse) < 0 ? (mouse - cat1) : (cat1 - mouse);
  let distancia2 = (cat2 - mouse) < 0 ? (mouse - cat2) : (cat2 - mouse);
  if (distancia1 > distancia2) {
    return 'cat2';
  }
  if (distancia1 < distancia2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
  }	

// Desafio 8
function fizzBuzz(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    switch (true) {
      case (arr[i] % 3 === 0 && arr[i] % 5 === 0):
        arr[i] = 'fizzBuzz';
        break;
      case (arr[i] % 3 === 0):
        arr[i] = 'fizz';
        break;
      case (arr[i] % 5 === 0):
        arr[i] = 'buzz';
        break;
      default:
        arr[i] = 'bug!';
        break;
    }
  }

  return arr;
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
