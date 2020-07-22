// Desafio 1 - OK
function compareTrue(boolean1, boolean2) {
  // seu código aqui (iniciando)
  if (boolean1 === true && boolean2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2 - OK
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2);
}

// Desafio 3 - OK
function splitSentence(stringRecebida) {
  // seu código aqui
  let resultado = stringRecebida.split(' ');
  return resultado
}

// Desafio 4 - OK
function concatName(string) {
  // seu código aqui
  let primeiroItem = string[0];
  let ultimoitem = string[string.length - 1];
  return (ultimoitem + ', ' + primeiroItem);
}

// Desafio 5 - OK
function footballPoints(wins, ties) {
  // seu código aqui
  return ((wins * 3) + ties);
}

// Desafio 6 - OK
function highestCount(numbers) {
  // seu código aqui
  let maiorNumero = 0;
  for (let i = 0; i < numbers.length; i = i + 1) {
    if (numbers[i] > maiorNumero) {
      maiorNumero = numbers[i];
    }
  }

  let contador = 0;
  for (let i = 0; i < numbers.length; i = i + 1) {
    if (numbers[i] === maiorNumero) {
      contador = contador + 1;
    }
  }
  return contador;
}

// Desafio 7 - OK
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let ditanciaCat1 = Math.abs(mouse - cat1);
  let ditanciaCat2 = Math.abs(mouse - cat2);

  if (ditanciaCat1 === ditanciaCat2) {
    return ('os gatos trombam e o rato foge');
  } else if (ditanciaCat1 < ditanciaCat2) {
    return ('cat1');
  } else {
    return ('cat2');
  }
}

// Desafio 8 - OK
function fizzBuzz(numbers) {
  // seu código aqui
  let retorno = [];
  for (let posicaoAtual = 0; posicaoAtual < numbers.length; posicaoAtual++) {
    if ((numbers[posicaoAtual] % 3 === 0) && (numbers[posicaoAtual] % 5 === 0)) {
      retorno.push('fizzBuzz');
    } else if ((numbers[posicaoAtual] % 3 === 0) && (numbers[posicaoAtual] % 5 !== 0)) {
      retorno.push('fizz');
    } else if ((numbers[posicaoAtual] % 3 !== 0) && (numbers[posicaoAtual] % 5 === 0)) {
      retorno.push('buzz');
    } else {
      retorno.push('bug!');
    }
  }
  return retorno;
}

// Desafio 9 - OK
function encode(word) {
  // seu código aqui
  let newWord = [];
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] === 'a') {
      newWord.push('1');
    } else if (word[i] === 'e') {
      newWord.push('2');
    } else if (word[i] === 'i') {
      newWord.push('3');
    } else if (word[i] === 'o') {
      newWord.push('4');
    } else if (word[i] === 'u') {
      newWord.push('5');
    } else {
      newWord.push(word[i]);
    }
  }
  return newWord.join('');
}

function decode(word) {
  // seu código aqui
  let newWord = [];
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] === '1') {
      newWord.push('a');
    } else if (word[i] === '2') {
      newWord.push('e');
    } else if (word[i] === '3') {
      newWord.push('i');
    } else if (word[i] === '4') {
      newWord.push('o');
    } else if (word[i] === '5') {
      newWord.push('u');
    } else {
      newWord.push(word[i]);
    }
  }
  return newWord.join('');
}

// Desafio 10 - OK
function techList(recArray, name) {
  // seu código aqui
  if (recArray.length === 0) {
    return 'Vazio!';
  } else {
    let retorno = [];
    recArray = recArray.sort();
    for (let index = 0; index < recArray.length; index += 1) {
      retorno[index] = {
        tech: recArray[index],
        name: name,
      };
    }
    return retorno;
  }
}

// Desafio 11 - OK
function generatePhoneNumber(phoneNumber) {
  // seu código aqui

  // verificando inconsistência de tamanho total, só aceita === 11
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
    // primeira condição aceita, prosegue verificando inconsistência
    let phone = '';
    let i = 0;
    while (i < phoneNumber.length) {
      if (phoneNumber[i] < 0 || phoneNumber[i] > 9) { // números da array menor que 0, maior que 9
        return 'não é possível gerar um número de telefone com esses valores';
      }
      // 1a. e 2a. incosistências OK, verificar a 3a. antes de prosseguir
      let repeticao = 0;
      let j = 0;
      while (j < phoneNumber.length) {
        if (phoneNumber[j] - phoneNumber[i] === 0) {
          repeticao += 1;
          if (repeticao > 2) {
            return 'não é possível gerar um número de telefone com esses valores';
          }
        }
        j++;
      }
    // Não inconsistênicias começar a gerar o número conforme padrão
      if (i === 0) {
        phone += '(' + phoneNumber[i];
      } else if (i === 1) {
        phone += phoneNumber[i] + ') ';
      } else if (i === 6) {
        phone += phoneNumber[i] + '-';
      } else {
        phone += phoneNumber[i];
      }
      i++;
      }
      return phone;
  }
}

// Desafio 12 - OK

/* para ser um triângulo:
  | b - c | < a < b + c
  | a - c | < b < a + c
  | a - b | < c < a + b
*/

function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let bmenosC = Math.abs(lineB - lineC);
  let amenosC = Math.abs(lineA - lineC);
  let amenosB = Math.abs(lineA - lineB);
  let bmaisC = lineB + lineC;
  let amaisC = lineA + lineC;
  let amaisB = lineA + lineB;
  if (
    (bmenosC < lineA) && (lineA < bmaisC) ||
    (amenosC < lineB) && (lineB < amaisC) ||
    (amenosB < lineC) && (lineC < amaisB)
    ) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13 - OK
function hydrate(bebidas) {
  // seu código aqui
  let res = bebidas.replace(/\D/g, '');

  let soma = 0;
  for (let i = 0; i < res.length; i += 1) {
    soma += parseInt(res[i], 10);
  }
  if (soma === 1) {
    return soma + ' copo de água';
  } else {
    return soma + ' copos de água';
  }
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
