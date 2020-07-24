// Desafio 1
function compareTrue(param1, param2) {
  return (param1 === true && param2 === true) ? true : false;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura / 2);
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(itens) {
  return `${itens[itens.length - 1]}, ${itens[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(valores) {
  let maiorNumero = 0;
  let quantasVezesMaior = 0;
  for (let indice = 0; indice < valores.length; indice += 1) {
    if (valores[indice] > maiorNumero) {
      maiorNumero = valores[indice];
    }
  }
  for (let posicao = 0; posicao < valores.length; posicao += 1) {
    if (valores[posicao] === maiorNumero) {
      quantasVezesMaior += 1;
    }
  }
  return quantasVezesMaior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posicaoCat1 = Math.abs(mouse - cat1);
  let posicaoCat2 = Math.abs(mouse - cat2);
  let pegaOuNaoPega = '';
  if (posicaoCat2 > posicaoCat1) {
    pegaOuNaoPega = 'cat1';
  } else if (posicaoCat1 > posicaoCat2) {
    pegaOuNaoPega = 'cat2';
  } else {
    pegaOuNaoPega = 'os gatos trombam e o rato foge';
  }// quem poderia pegar o rato ou se nenhum pega
  return pegaOuNaoPega;
}

// Desafio 8
function fizzBuzz(valoresFizzBuzz) {
  let novoFizzBuzz = [];
  let fizzBuzzStr = '';
  for (let indice = 0; indice < valoresFizzBuzz.length; indice += 1) {
    switch (true) {
      case (valoresFizzBuzz[indice] % 3 === 0 && valoresFizzBuzz[indice] % 5 === 0):
        fizzBuzzStr = 'fizzBuzz';
        break;
      case (valoresFizzBuzz[indice] % 3 === 0):
        fizzBuzzStr = 'fizz';
        break;
      case (valoresFizzBuzz[indice] % 5 === 0):
        fizzBuzzStr = 'buzz';
        break;
      default:
        fizzBuzzStr = 'bug!';
        break;
    }
    novoFizzBuzz.push(fizzBuzzStr);
  }
  return novoFizzBuzz;
}

// Desafio 9
function encode(fraseParaNumero) {
  let arrayFraseNum = fraseParaNumero.split('');
  for (let indice = 0; indice < arrayFraseNum.length; indice += 1) {
    switch (arrayFraseNum[indice]) {
      case 'a':
        arrayFraseNum[indice] = 1;
        break;
      case 'e':
        arrayFraseNum[indice] = 2;
        break;
      case 'i':
        arrayFraseNum[indice] = 3;
        break;
      case 'o':
        arrayFraseNum[indice] = 4;
        break;
      case 'u':
        arrayFraseNum[indice] = 5;
        break;
      default:
        break;
    }
  }
  let stringNumeros = arrayFraseNum.join('');
  return stringNumeros;
}

function decode(numeroParaFrase) {
  let arrayNumFrase = numeroParaFrase.split('');
  for (let indice = 0; indice < arrayNumFrase.length; indice += 1) {
    switch (arrayNumFrase[indice]) {
      case '1':
        arrayNumFrase[indice] = 'a';
        break;
      case '2':
        arrayNumFrase[indice] = 'e';
        break;
      case '3':
        arrayNumFrase[indice] = 'i';
        break;
      case '4':
        arrayNumFrase[indice] = 'o';
        break;
      case '5':
        arrayNumFrase[indice] = 'u';
        break;
      default:
        break;
    }
  }
  let stringFrase = arrayNumFrase.join('');
  return stringFrase;
}

// Desafio 10
function techList(tecnologias, aluno) {
  if (tecnologias.length === 0) {
    return 'Vazio!';
  }
  let aprenderTecnologias = [];
  // ordenar as tecnologias (alfabeticamente)
  for (let indice = 0; indice < tecnologias.length; indice += 1) {
    for (let comparador = 0; comparador < indice; comparador += 1) {
      if (tecnologias[indice] < tecnologias[comparador]) {
        let alocaDado = tecnologias[indice];

        tecnologias[indice] = tecnologias[comparador];
        tecnologias[comparador] = alocaDado;
      }
    }
  }
  // cria um objeto para cada tecnologia e seu aluno
  for (let techs in tecnologias) {
    let criarObjeto = {
      tech: tecnologias[techs],
      name: aluno,
    };
    aprenderTecnologias.push(criarObjeto);
  }
  return aprenderTecnologias;
}

// Desafio 11
function generatePhoneNumber(numerosTelefone) {
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
};
