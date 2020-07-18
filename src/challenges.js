// Projeto alterado por mim para o commit inicial!!
// Vamos com tudo!!

// Desafio 1
function compareTrue(valor1, valor2) {
  if ((valor1 === true) && (valor2 === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  let nome = '';
  let arrayNome = [];
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] !== ' ') {
      nome += str[index];
    } else {
      arrayNome.push(nome);
      nome = '';
    }
  }
  arrayNome.push(nome);
  return arrayNome;
}

// Desafio 4
function concatName(trocaNome) {
  let primeiroNome = trocaNome[trocaNome.length - 1];
  let ultimoNome = trocaNome[0];
  let stringFinal = `${primeiroNome}, ${ultimoNome}`;
  return stringFinal;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrayNumero) {
  let maior = 0;
  let cont = 0;
  for (let index in arrayNumero) {
    if (arrayNumero[index] > maior) {
      maior = arrayNumero[index];
    }
  }
  for (let index in arrayNumero) {
    if (arrayNumero[index] === maior) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
  return ('os gatos trombam e o rato foge');
}


// Desafio 8
function fizzBuzz(arrayNumeros) {
  for (let index in arrayNumeros) {
    if (((arrayNumeros[index] % 3) === 0) && ((arrayNumeros[index] % 5) !== 0)) {
      arrayNumeros[index] = 'fizz';
    } else if (((arrayNumeros[index] % 5) === 0) && ((arrayNumeros[index] % 3) !== 0)) {
      arrayNumeros[index] = 'buzz';
    } else if (((arrayNumeros[index] % 5) === 0) || ((arrayNumeros[index] % 3) === 0)) {
      arrayNumeros[index] = 'fizzBuzz';
    } else {
      arrayNumeros[index] = 'bug!';
    }
  }
  return arrayNumeros;
}

// Desafio 9
function encode(frase) {
  let palavra = '';
  for (let index in frase) {
    switch (frase[index]) {
      case 'a':
        palavra += 1;
        break;
      case 'e':
        palavra += 2;
        break;
      case 'i':
        palavra += 3;
        break;
      case 'o':
        palavra += 4;
        break;
      case 'u':
        palavra += 5;
        break;
      default:
        palavra += frase[index];
        break;
    }
  }
  return palavra;
}

function decode(frase) {
  let palavra = '';
  for (let index in frase) {
    switch (frase[index]) {
      case '1':
        palavra += 'a';
        break;
      case '2':
        palavra += 'e';
        break;
      case '3':
        palavra += 'i';
        break;
      case '4':
        palavra += 'o';
        break;
      case '5':
        palavra += 'u';
        break;
      default:
        palavra += frase[index];
        break;
    }
  }
  return palavra;
}

// Desafio 10
function techList(tec, nome) {
  if (tec.length === 0) {
    return 'vazio';
  } else {
    let temp = tec.sort();
    let tecnologias = [];
    for (let index in temp) {
      tecnologias[index] = { tech: tec[index], name: nome };
    }
    return tecnologias;
  }
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
