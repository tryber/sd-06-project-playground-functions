// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let acumulador = '';
  let novaLista = [];
  for (let i = 0; i < frase.length; i += 1) {
    let elemento = frase[i]
    if (elemento !== ' ') {
      acumulador += elemento;
    } else {
      novaLista.push(acumulador);
      acumulador = '';
    }
  }
  novaLista.push(acumulador)
  return novaLista;
}

// Desafio 4
function concatName(listaNomes) {
  // seu código aqui
  let ultimoNome = listaNomes.slice().pop();
  let primeiroNome = listaNomes.slice().shift();

  return `${ultimoNome}, ${primeiroNome}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = (wins * 3) + (ties);

  return points;
}

// Desafio 6
function highestCount(arrayNumeros) {
  // seu código aqui
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
function catAndMouse(mousePos, cat1Pos, cat2Pos) {
  // seu código aqui
  let distMouseCat1 = Math.abs(mousePos - cat1Pos);
  let distMouseCat2 = Math.abs(mousePos - cat2Pos);
  if (distMouseCat1 === distMouseCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (distMouseCat1 < distMouseCat2) {
    return 'cat1';
  } else if (distMouseCat2 < distMouseCat1) {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  // seu código aqui
  let novaArray = [];
  for (let i = 0; i < arrayNumeros.length; i += 1) {
    let numero = arrayNumeros[i];
    if (numero % 3 === 0 && numero % 5 === 0) {
      novaArray.push('fizzBuzz');
    } else if (numero % 3 === 0) {
      novaArray.push('fizz');
    } else if (numero % 5 === 0) {
      novaArray.push('buzz');
    } else {
      novaArray.push('bug!');
    }
  }
  return novaArray;
}

// Desafio 9
function swapVogals(letter) {
  switch (letter) {
    case 'a':
      return 1;
    case 'e':
      return 2;
    case 'i':
      return 3;
    case 'o':
      return 4;
    case 'u':
      return 5;
    default:
      return letter;
  }
}

function swapNumbers(letter) {
  switch (letter) {
    case '1':
      return 'a';
    case '2':
      return 'e';
    case '3':
      return 'i';
    case '4':
      return 'o';
    case '5':
      return 'u';
    default:
      return letter;
  }
}

function encode(frase) {
  // seu código aqui
  let novaFrase = [];
  for (let i = 0; i < frase.length; i += 1) {
    let letra = frase[i];
    let conversao = swapVogals(letra);
    novaFrase.push(conversao);
  }
  return novaFrase.join('');
}

function decode(frase) {
  // seu código aqui
  let novaFrase = [];
  for (let i = 0; i < frase.length; i += 1) {
    let letra = frase[i];
    let conversao = swapNumbers(letra);
    novaFrase.push(conversao);
  }
  return novaFrase.join('');
}

// Desafio 10
function techList(tecnologias, nome) {
  // seu código aqui
  if (tecnologias.length === 0) {
    return 'Vazio!';
  }
  tecnologias.sort();
  let novaLista = [];
  for (let i = 0; i < tecnologias.length; i += 1) {
    let objeto = {
      tech: tecnologias[i],
      name: nome,
    };
    novaLista.push(objeto);
  }
  return novaLista;
}

// Desafio 11
function verificaTamanhoArray(lista) {
  let tamanhoValido = lista.length === 11;
  return tamanhoValido;
}

function verificaNumerosInvalidos(lista) {
  let valorInvalido = false;
  for (let i = 0; i < lista.length; i += 1) {
    let elemento = lista[i];
    if (elemento < 0 || elemento > 9) {
      valorInvalido = true;
    }
  }
  return valorInvalido;
}

function verificaExcessoOcorrencias(lista) {
  let maxOcorrencias = 3;
  for (let indice = 0; indice < lista.length; indice += 1) {
    let ocorrencias = 0;
    for (let indiceAux = 0; indiceAux < lista.length; indiceAux += 1) {
      if (lista[indice] === lista[indiceAux]) {
        ocorrencias += 1;
        if (ocorrencias === maxOcorrencias) {
          return true
        }
      }
    }
  }
  return false;
}

function generatePhoneNumber(numeros) {
  // seu código aqui
  // Verifica se tamanho do array é diferente de 11
  let tamanhoValido = verificaTamanhoArray(numeros);
  if (!tamanhoValido) {
    return 'Array com tamanho incorreto.';
  }
  // Verifica número menor que 0 ou maior que 9
  let valorInvalido = verificaNumerosInvalidos(numeros);
  if (valorInvalido) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  // Verifica a ocorrência de 3 números iguais
  let excessoRepeticoes = verificaExcessoOcorrencias(numeros);
  if (excessoRepeticoes) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  // Criação do número
  let ddd = numeros.slice(0, 2).join('');
  let prefixo = numeros.slice(2, 7).join('');
  let sufixo = numeros.slice(7).join('');
  let numeroPronto = `(${ddd}) ${prefixo}-${sufixo}`;
  return numeroPronto;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let primeiraCondicao = false;
  let segundaCondicao = false;
  // Primeira condicao
  // A medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois)
  if ((lineA < lineB + lineC) &&
      (lineB < lineA + lineC) &&
      (lineC < lineA + lineB)
  ) {
    primeiraCondicao = true;
  }
  // Segunda condição
  // A medida de qualquer um dos lados é maior que o valor absoluto
  // da diferença entre essas medidas (as outras).
  if (
    (lineA > Math.abs(lineB - lineC)) &&
    (lineB > Math.abs(lineA - lineC)) &&
    (lineC > Math.abs(lineA - lineB))
  ) {
    segundaCondicao = true;
  }
  return primeiraCondicao && segundaCondicao;
}

// Desafio 13
function hydrate(bebidas) {
  // seu código aqui
  let regex = /\d+/g;
  let string = bebidas;
  let quantidades = string.match(regex).map(Number);
  let total = 0;
  for (let i = 0; i < quantidades.length; i += 1) {
    total += quantidades[i];
  }
  let copos = '';
  if (total === 1) {
    copos = 'copo';
  } else {
    copos = 'copos';
  }
  return `${total} ${copos} de água`;
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
