// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2 ;
  
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2 ;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(array) {
  let result;
  let primeiroItem = array[0];
  let ultimoItem = array[array.length - 1];
  result = (ultimoItem + ", " +  primeiroItem);
  return result ;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = (wins * 3) + ties;
  return result; 
}

// Desafio 6
function highestCount(arrayNumeros) {
  let maiorValor = arrayNumeros[0];
  let ocorrencias = 0;

  for (let i = 0; i <= arrayNumeros.length; i += 1) {
    if (arrayNumeros[i] > maiorValor) {
      maiorValor = arrayNumeros[i];
    }
  }

  for (let i = 0; i <= arrayNumeros.length; i += 1) {
    if (arrayNumeros[i] === maiorValor) {
      ocorrencias += 1;
    }
  }
  return ocorrencias;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultCat1 = Math.abs(cat1 - mouse);
  let resultCat2 = Math.abs(cat2 - mouse);
  let result = '';

  if (resultCat1 === resultCat2) {
    result = 'os gatos trombam e o rato foge';
  } else if (resultCat1 > resultCat2) {
    result = 'cat2';
  } else {
    result = 'cat1';
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      result.push('fizz');
    } else if (array[i] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let result = string.split('')

   for (let i = 0; i < result.length; i += 1) {
     if (result[i] === 'a') {
       result[i] = '1';
     } else if (result[i] === 'e') {
       result[i] = '2';
     } else if (result[i] === 'i') {
       result[i] = '3';
     } else if (result[i] === 'o') {
       result[i] = '4';
     } else if (result[i] === 'u') {
       result[i] = '5';
     }
    }

    let finalResult = result.join('')

  return finalResult
}
function decode(string) {
  let result = string.split('')

   for (let i = 0; i < result.length; i += 1) {
     if (result[i] === '1') {
       result[i] = 'a';
     } else if (result[i] === '2') {
       result[i] = 'e';
     } else if (result[i] === '3') {
       result[i] = 'i';
     } else if (result[i] === '4') {
       result[i] = 'o';
     } else if (result[i] === '5') {
       result[i] = 'u';
     }
    }

    let finalResult = result.join('')

  return finalResult
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
