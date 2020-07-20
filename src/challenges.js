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
  let nome = nomeCompleto[nomeCompleto.length - 1];
  nome += ', ';
  nome += nomeCompleto[0];
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
  str = str.split('');
  aux = '';
  for (let index = 0; index < str.length; index += 1) {
    switch (str[index]) {
      case 'a' :
        str[index] = '1';
        break;
      case 'e' :
        str[index] = '2';
        break;
      case 'i' :
        str[index] = '3';
        break;
      case 'o' :
        str[index] = '4';
        break;
      case 'u' :
        str[index] = '5';
        break;
      default:
        break;
    }
    aux += str[index];
  }
  return aux;
}

function decode(str) {
  str = str.split('');
  let aux = '';
  for (let index = 0; index < str.length; index += 1) {
    switch (str[index]) {
      case '1' :
        str[index] = 'a';
        break;
      case '2' :
        str[index] = 'e';
        break;
      case '3' :
        str[index] = 'i';
        break;
      case '4' :
        str[index] = 'o';
        break;
      case '5' :
        str[index] = 'u';
        break;
      default:
        break;
    }
    aux += str[index];
  }
  return aux;
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
  let numberFormat = '';
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  number.splice(0, 0, '(');
  number.splice(3, 0, ') ');
  number.splice(9, 0, '-');
  for (let i = 0; i < number.length; i += 1) {
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
    numberFormat += number[i];
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
  let radix;
  for (let index in num) {
    if (parseInt(num[index], radix) < 1 || parseInt(num[index], radix) > 9) {
      return 'número inválido!'
    }
    cont += parseInt(num[index], radix);
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
