// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(strings) {
  return `${strings[strings.length - 1]}, ${strings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let maior = 0;
  let resultado = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maior) {
      maior = array[i];
      resultado = 0;
    }
    if (maior === array[i]) {
      resultado += 1;
    }
  }
  return resultado;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);

  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } else if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}


// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 15 === 0) {
      resultado.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      resultado.push('fizz');
    } else if (array[i] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(sentence) {
  let resultado = '';
  for (let i = 0; i < sentence.length; i += 1) {
    switch (sentence[i]) {
      case 'a':
        resultado += '1';
        break;
      case 'e':
        resultado += '2';
        break;
      case 'i':
        resultado += '3';
        break;
      case 'o':
        resultado += '4';
        break;
      case 'u':
        resultado += '5';
        break;
      default:
        resultado += sentence[i];
    }
  }
  return resultado;
}

function decode(sentence) {
  let resultado = '';
  for (let i = 0; i < sentence.length; i += 1) {
    switch (sentence[i]) {
      case '1':
        resultado += 'a';
        break;
      case '2':
        resultado += 'e';
        break;
      case '3':
        resultado += 'i';
        break;
      case '4':
        resultado += 'o';
        break;
      case '5':
        resultado += 'u';
        break;
      default:
        resultado += sentence[i];
    }
  }
  return resultado;
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
