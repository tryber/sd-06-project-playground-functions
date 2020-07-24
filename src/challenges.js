let q1x = true;
let q1y = true;
// Desafio 1
function compareTrue(q1x, q1y) {
  if (q1x && q1y === true) {
    return true;
  } else {
    return false;
  }
}
let base = 2;
let height = 4;
// Desafio 2
function calcArea(base, height) {
  return (base*height)/2;
}
// Desafio 3
function splitSentence(string) {
  let frase = string.split(" ");
  return frase;
}
// Desafio 4
function concatName(array) {
  let plv = array[array.length - 1] + ", " + array[0];
  return plv;
}
// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3+ties);
}
// Desafio 6
function highestCount(numbers) {
  let maiorNumb = 0;
  let repeticao = 0;
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > maiorNumb) {
        maiorNumb = numbers[index];
    } 
  }
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] === maiorNumb) {
        repeticao += 1;
    }
  }
  return repeticao;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let caat1, caat2;
  if (cat1 <= mouse) {
    caat1 = mouse - cat1;
  } else {
    caat1 = cat1 - mouse;
  }
  if (cat2 <= mouse) {
    caat2 = mouse - cat2;
  } else {
    caat2 = cat2 - mouse;
  }
  if (caat1 > caat2) {
    return "cat2"
  } else if (caat2 > caat1) {
    return "cat1"
  } else {
    return "os gatos trombam e o rato foge"
  }
}
// Desafio 8
function fizzBuzz(array) {
  let retorno = [];
  for (let index = 0; index < array.length; index++) {
    if ((array[index] % 3) === 0 && (array[index] % 5) === 0) {
      retorno[index] = 'fizzBuzz';
    } else if ((array[index] % 3) === 0) {
      retorno[index] = 'fizz';
    } else if ((array[index] % 5) === 0) {
      retorno[index] = 'buzz';
    } else {
      retorno[index] = 'bug!';
    }
  }
  return retorno;
}

// Desafio 9
function encode(string) {
  let codigo = string;
  for (let index = 0; index < string.length; index++) {
    if (string[i] === 'a') {
      codigo = codigo.replace('a', '1');
    } else if (string[i] === 'e') {
      codigo = codigo.replace('e', '2');
    } else if (string[i] === 'i') {
      codigo = codigo.replace('i', '3');
    } else if (string[i] === 'o') {
      codigo = codigo.replace('o', '4');
    }  else if (string[i] === 'u') {
      codigo = codigo.replace('u', '5');
    }
  }
  return codigo;    
}
function decode(string) {
  let codigo = string;
  for (let index = 0; index < string.length; index++) {
    if (string[i] === '1') {
      codigo = codigo.replace('1', 'a');
    } else if (string[i] === '2') {
      codigo = codigo.replace('2', 'e');
    } else if (string[i] === '3') {
      codigo = codigo.replace('3', 'i');
    } else if (string[i] === '4') {
      codigo = codigo.replace('4', 'o');
    }  else if (string[i] === '5') {
      codigo = codigo.replace('5', 'u');
    }
  }
  return codigo; 
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