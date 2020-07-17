// Desafio 1
function compareTrue(boolOne , boolTwo) {
  if (boolOne === true && boolTwo === true) {
    return true;
  } 
    return false;
}
//  console.log(compareTrue(false,true));

// Desafio 2
function calcArea(base , height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(palavras) {
  let novoArray = palavras.split(' ');
  return novoArray;
}
//  console.log(splitSentence("teste trybe escola"));

// Desafio 4
function concatName(arrayPalavras) {
  let palavras = '';
  palavras += arrayPalavras[arrayPalavras.length - 1];
  palavras += ', '
  palavras += arrayPalavras[0];
  return palavras;
  // seu código aqui
}
//  console.log(concatName(['teste','trybe','escola']));

// Desafio 5
function footballPoints(wins , ties) {
  return  (3 * wins) + ties;
  // seu código aqui
}

// Desafio 6
function highestCount(arrayNumeros) {
  let menorNumero = 0;
  let contador = 0;
  for (let x in arrayNumeros) {
    if (arrayNumeros[x] > menorNumero) {
      menorNumero = arrayNumeros[x];
    }
  }
  // segundo: comparar o maior
  for (let x in arrayNumeros) {
    if (arrayNumeros[x] === menorNumero) {
      contador += 1;
    }
  }
  return contador;
}


// Desafio 7
function catAndMouse(mouse , cat1 , cat2) {
  if (mouse - cat1 > mouse - cat2) {
    return cat2;
  } else {
    return cat1;
  }
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let resposta = [];
  let contador = 0;
    for (let x in arrayNumeros){
      if (arrayNumeros[x] % 3 === 0 && arrayNumeros[x] % 5 === 0) {
        resposta[contador] = 'fizzBuzz';
        contador += 1;
      } else if (arrayNumeros[x] % 3 === 0) {
        resposta[contador] = 'fizz';
        contador += 1;
      } else if (arrayNumeros[x] % 5 === 0) {
        resposta[contador] = 'buzz';
        contador += 1;
      } else {
        resposta[contador] = 'bug!';
        contador += 1;
      }
    }
  return resposta;
}

//  console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
