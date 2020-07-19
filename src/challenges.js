// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(nomeCompleto) {
  let nome = nomeCompleto[nomeCompleto.length - 1] + ', ' + nomeCompleto[0];
  return nome;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numeros) {
  let maior = numeros[0];
  let cont = 0;
  for (let index in numeros) {
    if (numeros[index] > maior) {
      maior = numeros[index];
      cont = 0;
    }
    if (maior === numeros[index]) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } else
  if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numeros) {
  let result = [];
  for (let index in numeros) {
    if (numeros[index] % 3 === 0 && numeros[index] % 5 !== 0) {
      result.push('fizz');
    } else
    if (numeros[index] % 3 !== 0 && numeros[index] % 5 === 0) {
      result.push('buzz');
    } else
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(str) {
  let aux = str.split('');
  for (let index in aux) {
    if (aux[index] === 'a') {
      aux[index] = '1';
    } else
    if (aux[index] === 'e') {
      aux[index] = '2';
    } else
    if (aux[index] === 'i') {
      aux[index] = '3';
    } else
    if (aux[index] === 'o') {
      aux[index] = '4';
    } else
    if (aux[index] === 'u') {
      aux[index] = '5';
    }
  }
  str = '';
  for (let i = 0; i < aux.length; i += 1) {
    str += aux[i];
  }
  return str;
}
function decode(str) {
  let aux = str.split('');
  for (let index in aux) {
    if (aux[index] === '1') {
      aux[index] = 'a';
    } else
    if (aux[index] === '2') {
      aux[index] = 'e';
    } else
    if (aux[index] === '3') {
      aux[index] = 'i';
    } else
    if (aux[index] === '4') {
      aux[index] = 'o';
    } else
    if (aux[index] === '5') {
      aux[index] = 'u';
    }
  }
  str = '';
  for (let i = 0; i < aux.length; i += 1) {
    str += aux[i];
  }
  return str;
}

// Desafio 10
function techList(tecno, name) {
  if (tecno.length === 0) {
    return 'Vazio!';
  }
  let tecnologias = [];
  tecno.sort();
  for (let i = 0; i < tecno.length; i += 1) {
    let tech = tecno[i];
    tecnologias.push({ tech, name });
  }
  return tecnologias;
}

// Desafio 11
function generatePhoneNumber(number) {
  let cont = 0;
  let numberFormat = '(';
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < number.length; i += 1) {
    if (i === 2) {
      numberFormat += ') ' + number[i];
    } else
    if (i === 7) {
      numberFormat += '-' + number[i];
    } else {
      numberFormat += number[i]
    }
    if (number[i] < 0 || number[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let l = 0; l < number.length; l += 1) {
      if (number[i] === number[l]) {
        cont += 1;
      }
    }
    if (cont > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    cont = 0;
  }
  return numberFormat;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((Math.abs(lineB - lineC) > lineA || lineA > lineB + lineC)) {
    return false;
  } else
  if ((Math.abs(lineA - lineC) > lineB || lineB > lineA + lineC)) {
    return false;
  } else
  if ((Math.abs(lineB - lineA) > lineC || lineC > lineB + lineA)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(drinks) {
  let num = drinks.match(/\d+/g).map(Number);
  let cont = 0;
  for (let index in num) {
    if (parseInt(num[index]) < 1 || parseInt(num[index]) > 9) {
      return 'número inválido!'
    }
    cont += parseInt(num[index]);
  }
  if (cont === 1) {
    cont += ' copo de água';
    return cont;
  }
  cont += ' copos de água';
  return cont;
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
