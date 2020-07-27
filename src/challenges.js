// Desafio 1
function compareTrue(q1x, q1y) {
  if (q1x && q1y === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  return (base*height) / 2;
}
// Desafio 3
function splitSentence(string) {
  let frase = string.split(' ');
  return frase;
}
// Desafio 4
function concatName(array) {
  let plv = array[array.length - 1] + ', ' + array[0];
  return plv;
}
// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
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
    return 'cat2';
  } else if (caat2 > caat1) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
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
  let auxiliar = string.split('');
  let retornar = [];
  for (const key in auxiliar) {
    if (auxiliar[key] === 'a') {
      retornar = retornar + '1';
    } else if (auxiliar[key] === 'e') {
      retornar += '2';
    } else if (auxiliar[key] === 'i') {
      retornar = retornar + '3';
    } else if (auxiliar[key] === 'o') {
      retornar += '4';
    } else if (auxiliar[key] === 'u') {
      retornar += '5'
    } else {
      retornar += auxiliar[key];
    }
  }
  return retornar;
}
function decode(string) {
  let codigo = string.split('');
  let decodigo = [];
  for (const key in codigo) {
    if (codigo[key] === '1') {
      decodigo += 'a';
    } else if (codigo[key] === '2') {
      decodigo += 'e';
    } else if (codigo[key] === '3') {
      decodigo += 'i';
    } else if (codigo[key] === '4') {
      decodigo += 'o';
    } else if (codigo[key] === '5') {
      decodigo += 'u'
    } else {
      decodigo += codigo[key];
    }
  }
  return decodigo;
}

// Desafio 10
function techList(arraynomes, name) {
  if (arraynomes.length === 0) {
    return 'Vazio!'
  } else {
    let arrayfinal = [];
    arraynomes = arraynomes.sort();
    for (let i in arraynomes) {
      let add = {
        tech: arraynomes[i],
        name: name,
      }
      arrayfinal.push(add);
    }
    return arrayfinal;
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
