// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  let resultado = false
  if (value1 === true && value2 === true) {
    resultado = true;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2
  return area
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let string = '';
  for (let i = array.length - 1; i >= array.length - 1; i -= 1) {
    string += array[i];
  }
  string += ', ';
  for (let n = 0; n <= 0; n += 1) {
    string += array[n];
  }
  return string
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let vitorias = wins * 3;
  let pontos = vitorias + ties;
  return pontos;
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let maiorNumero = 0;
  let contagem = 0;
  for (let n = 0; n < numeros.length; n += 1) {
    if (maiorNumero < numeros[n]) {
      maiorNumero = numeros[n]
    }
  }
  for (let n = 0; n < numeros.length; n += 1) {
    if (maiorNumero === numeros[n]) {
      contagem += 1;
    }
  }
  return contagem;
}

// Desafio 7
function catAndMouse(positionMouse, positionCat1, positionCat2) {
  // seu código aqui
  let distanciaMouseCat1 = positionCat1 - positionMouse;
  let distanciaMouseCat2 = positionCat2 - positionMouse;
  distanciaMouseCat1 = Math.abs(distanciaMouseCat1);
  distanciaMouseCat2 = Math.abs(distanciaMouseCat2);
  let mensagem = '';
  if (distanciaMouseCat1 < distanciaMouseCat2) {
    mensagem = 'cat1';
  } else if (distanciaMouseCat2 < distanciaMouseCat1) {
    mensagem = 'cat2';
  } else if (distanciaMouseCat1 === distanciaMouseCat2) {
    mensagem = 'os gatos trombam e o rato foge';
  }
  return mensagem
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  // seu código aqui
  let resultado = [];
  for (let n = 0; n < arrayNumeros.length; n += 1) {
    if (arrayNumeros[n] % 3 === 0 && arrayNumeros[n] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (arrayNumeros[n] % 3 === 0) {
      resultado.push('fizz');
    } else if (arrayNumeros[n] % 5 === 0) {
      resultado.push('buzz')
    } else {
      resultado.push('bug!');
    }
  }
  return resultado
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let encoded = '';
  for (let n = 0; n < string.length; n += 1) {
    if (string[n] === 'a') {
      encoded += '1';
    } else if (string[n] === 'e') {
      encoded += '2';
    } else if (string[n] === 'i') {
      encoded += '3';
    } else if (string[n] === 'o') {
      encoded += '4';
    } else if (string[n] === 'u') {
      encoded += '5';
    } else {
      encoded += string[n];
    }
  }
  return encoded
}

function decode(string) {
  // seu código aqui
  let decoded = '';
  for (let n = 0; n < string.length; n += 1) {
    if (string[n] === '1') {
      decoded += 'a';
    } else if (string[n] === '2') {
      decoded += 'e';
    } else if (string[n] === '3') {
      decoded += 'i';
    } else if (string[n] === '4') {
      decoded += 'o';
    } else if (string[n] === '5') {
      decoded += 'u';
    } else {
      decoded += string[n];
    }
  }
  return decoded
}

// Desafio 10
function techList(tecnologias, name) {
  // seu código aqui
  let tecnologiasOrdenadas = [];
  tecnologiasOrdenadas = tecnologias.sort();
  let resultado = [];
  for (let i = 0; i < tecnologiasOrdenadas.length; i += 1) {
    resultado.push({ tech: tecnologiasOrdenadas[i], name: name })
  }
  if (tecnologias.length === 0) {
    return 'Vazio!'
  } else {
    return resultado
  }
}

// Desafio 11
function generatePhoneNumber(numeros) {
  // seu código aqui
  
  let contagem = 0;
  for (let n = 0; n < numeros.length; n += 1) {
    for (let j = 1; j < numeros.length; j += 1){
      if (numeros[n] === numeros[j]) {
        contagem += 1
      }
    }
  }
  let condicaoMenor0Maior9 = false;
  for (let k = 0; k < numeros.length; k+=1) {
    if (numeros[k] < 0 || numeros[k] > 9) {
      condicaoMenor0Maior9 = true;
    }
  }
  let telefone = '';
  if (numeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (condicaoMenor0Maior9 === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else if (contagem >= 2) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else {
    telefone += '(';
    telefone += numeros[0];
    telefone += numeros[1];
    telefone += ')';
    telefone += ' ';
    telefone += numeros[2];
    telefone += numeros[3];
    telefone += numeros[4];
    telefone += numeros[5];
    telefone += numeros[6];
    telefone += '-';
    telefone += numeros[7];
    telefone += numeros[8];
    telefone += numeros[9];
    telefone += numeros[10];
    return telefone
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let sumLineALineB = lineA + lineB;
  let sumLineALineC = lineA + lineC;
  let sumLineBLineC = lineB + lineC;
  let subLineALineB =  lineA - lineB;
  let subLineALineC = lineA - lineC;
  let subLineBLineC = lineB - lineC;
  subLineALineB = Math.abs(subLineALineB);
  subLineALineC = Math.abs(subLineALineC);
  subLineBLineC = Math.abs(subLineBLineC);
  let resultado = false;
  if (lineA < sumLineBLineC && lineB < sumLineALineC && lineC < sumLineALineB && lineA > subLineBLineC && lineB > subLineALineC && lineC > subLineALineB) {
  resultado = true
  }
  return resultado
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let numeros = string.replace(/[^\d]+/g,'');
  let soma = 0;
  for (i = 0; i < numeros.length; i += 1) {
    soma = parseInt(soma) + parseInt(numeros[i]);
  }
  if (soma === 1) {
    return (soma +' copo de água')
  } else {
    return (soma + ' copos de água')
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
