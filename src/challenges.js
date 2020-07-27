// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  let compare = true;
  if (a === true && b === true) {
    compare = true;
  } else {
    compare = false;
  }
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let calculo = 0;
  calculo = (base * height) / 2;
  return calculo;
}

// Desafio 3
function splitSentence(palavra) {
  // seu código aqui
  let word = palavra.split(' ');
  return word;
}

// Desafio 4
function concatName(arrayDeNomes) {
  // seu código aqui
  let primeiroItem = arrayDeNomes[0];
  let ultimoItem = arrayDeNomes[arrayDeNomes.length - 1];
  return (`${ultimoItem}, ${primeiroItem}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pVitorias = wins * 3;
  let pEmpates = ties * 1;
  let pontuacao = pVitorias + pEmpates;
  return pontuacao;
}

// Desafio 6
function highestCount(inteiros) {
  // seu código aqui
  let numMaior = 0;
  let iMaior = 0;
  for (let i in inteiros) {
    if (inteiros[iMaior] < inteiros[i]) {
      iMaior = i;
    }
    numMaior = inteiros[iMaior];
  }
  let repetido = 0;
  let numero = 0;
  for (let i in inteiros) {
    if (numMaior === inteiros[i]) {
      numero += 1;
    }
    if (numero > repetido) {
      repetido = numero;
    }
  }
  return repetido;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let dCat1 = Math.abs(mouse - cat1);
  let dCat2 = Math.abs(mouse - cat2);
  let result;
  if (dCat1 > dCat2) {
    result = 'cat2';
  } else if (dCat1 < dCat2) {
    result = 'cat1';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let retorno = [];
  for (let i in numeros) {
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
      retorno.push('fizzBuzz')
    } else if (numeros[i] % 3 === 0 && numeros[i] % 5 !== 0) {
      retorno.push('fizz')
    } else if (numeros[i] % 3 !== 0 && numeros[i] % 5 === 0) {
      retorno.push('buzz')
    } else {
      retorno.push('bug!')
    }
  }
  return retorno;
}

// Desafio 9
function encode(palavras) {
  // seu código aqui
  let result = [];
  let verifica = palavras.split('');
  for (let i in palavras) {
    if (verifica[i] === 'a') {
      verifica[i] = 1;
    } else if (verifica[i] === 'e') {
      verifica[i] = 2;
    } else if (verifica[i] === 'i') {
      verifica[i] = 3;
    } else if (verifica[i] === 'o') {
      verifica[i] = 4;
    } else if (verifica[i] === 'u') {
      verifica[i] = 5;
    } else {
      verifica[i] = verifica[i];
    }
    result += verifica[i];
  }
  return result;
}

function decode(palavras) {
  // seu código aqui
  let result = [];
  let verifica = palavras.split('');
  for (let i in palavras) {
    if (verifica[i] === '1') {
      verifica[i] = 'a';
    } else if (verifica[i] === '2') {
      verifica[i] = 'e';
    } else if (verifica[i] === '3') {
      verifica[i] = 'i';
    } else if (verifica[i] === '4') {
      verifica[i] = 'o';
    } else if (verifica[i] === '5') {
      verifica[i] = 'u';
    } else {
      verifica[i] = verifica[i];
    }
    result += verifica[i];
  }
  return result;
}

// Desafio 10
function techList(nomesTech, nome) {
  // seu código aqui
  let listaTech = [];
  if (nomesTech.length !== 0) {
    nomesTech = nomesTech.sort();
    for (let i = 0; i < nomesTech.length; i += 1) {
      let lista = {
        tech: nomesTech[i],
        name: nome,
      };
      listaTech.push(lista);
    }
  } else {
    listaTech = 'Vazio!';
  }
  return listaTech;
}

// Desafio 11
function generatePhoneNumber(numeros) {
  // seu código aqui
  let telefone = `(${numeros[0]}${numeros[1]}) `;
  if (numeros.length === 11) {
    for (let i = 2; i < numeros.length; i += 1) {
      telefone += numeros[i]
      if (i === 6) {
        telefone += '-';
      }
    }
    for (let i in numeros) {
      if (numeros[i] < 0 || numeros[i] > 9) {
        telefone = 'não é possível gerar um número de telefone com esses valores';
      }
    }
  } else {
    telefone = 'Array com tamanho incorreto.';
  }
  let repetido = 0;
  let numero = 0;
  let iNumero = 0;
  for (let i in numeros) {
    let verificaNumero = numeros[i];
    for (let i2 in numeros) {
      if (verificaNumero === numeros[i2]) {
        numero += 1;
      }
    }
    if (numero > repetido) {
      repetido = numero;
      iNumero = i;
    }
    numero = 0
  }
  for (let i in numeros) {
    if (numeros[iNumero] === numeros[i] && repetido >= 3) {
      telefone = 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return telefone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let triangulo = false;
  let ladoA = false;
  let ladoB = false;
  let ladoC = false;
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    ladoA = true;
  }
  if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    ladoB = true;
  }
  if (lineC < (lineB + lineA) && lineC > Math.abs(lineB - lineA)) {
    ladoC = true;
  }
  if (ladoA === true && ladoB === true && ladoC === true) {
    triangulo = true;
  }
  return triangulo;
}

// Desafio 13
function hydrate(bebidas) {
  // seu código aqui
  let numStr = bebidas.match(/\d+/g).map(Number);
  let soma = 0;
  let result;
  for (let i = 0; i < numStr.length; i += 1) {
    soma += numStr[i];
  }
  if (soma > 1) {
    result = `${soma} copos de água`;
  } else {
    result = `${soma} copo de água`;
  }
  return result;
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
