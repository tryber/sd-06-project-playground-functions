// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(param) {
  let palavras = [];
  let limiteDaUltimaPalavra = -1;

  for (let letra = 0; letra < param.length; letra += 1) {
    let palavra = '';

    if (param[letra] === ' ' || letra === param.length - 1) {
      for (let letraPalavra = limiteDaUltimaPalavra + 1; letraPalavra <= letra; letraPalavra += 1) {
        if (param[letraPalavra] !== ' ') {
          palavra += param[letraPalavra];
        }
      }
      palavras.push(palavra);
      limiteDaUltimaPalavra = letra;
    }
  }

  return palavras;
}

// Desafio 4
function concatName(param) {
  let resultado = `${param[param.length - 1]}, ${param[0]}`;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = (wins * 3) + (ties * 1);
  return total;
}

// Desafio 6
function highestCount(param) {
  let maiorValor = 0;
  let quantasVezes = 0;

  for (let cont1 = 0; cont1 < param.length; cont1 += 1) {
    for (let cont2 = 0; cont2 < param.length; cont2 += 1) {
      if (cont1 !== cont2 && param[cont1] > maiorValor && param[cont1] > param[cont2]) {
        maiorValor = param[cont1];
      }
    }
  }

  for (let contRepete = 0; contRepete < param.length; contRepete += 1) {
    if (maiorValor === param[contRepete]) {
      quantasVezes += 1;
    }
  }

  return quantasVezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resposta = 0;
  let goalCat1 = 0;
  let goalCat2 = 0;

  if (mouse > cat1) {
    goalCat1 = mouse - cat1;
  } else {
    goalCat1 = cat1 - mouse;
  }

  if (mouse > cat2) {
    goalCat2 = mouse - cat2;
  } else {
    goalCat2 = cat2 - mouse;
  }

  if (goalCat1 < goalCat2) {
    resposta = 'cat1';
  } else if (goalCat1 > goalCat2) {
    resposta = 'cat2';
  } else {
    resposta = 'os gatos trombam e o rato foge';
  }

  return resposta;
}

// Desafio 8
function fizzBuzz(param) {
  let resultado = [];

  for (let x = 0; x < param.length; x += 1) {
    if (param[x] % 3 === 0 && param[x] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (param[x] % 3 !== 0 && param[x] % 5 === 0) {
      resultado.push('buzz');
    } else if (param[x] % 3 === 0 && param[x] % 5 !== 0) {
      resultado.push('fizz');
    } else {
      resultado.push('bug!');
    }
  }

  return resultado;
}

// Desafio 9
function encode(param) {
  let encodada = '';

  for (let letra = 0; letra < param.length; letra += 1) {
    if (param[letra] === 'a') {
      encodada += '1';
    } else if (param[letra] === 'e') {
      encodada += '2';
    } else if (param[letra] === 'i') {
      encodada += '3';
    } else if (param[letra] === 'o') {
      encodada += '4';
    } else if (param[letra] === 'u') {
      encodada += '5';
    } else {
      encodada += param[letra];
    }
  }

  return encodada;
}
function decode(param) {
  let decodada = '';

  for (let letra = 0; letra < param.length; letra += 1) {
    if (param[letra] === '1') {
      decodada += 'a';
    } else if (param[letra] === '2') {
      decodada += 'e';
    } else if (param[letra] === '3') {
      decodada += 'i';
    } else if (param[letra] === '4') {
      decodada += 'o';
    } else if (param[letra] === '5') {
      decodada += 'u';
    } else {
      decodada += param[letra];
    }
  }

  return decodada;
}

// Desafio 10
function techList(lista, name) {
  let objetosLista = [];
  
  if (lista !== []) {
    lista = lista.sort();

    for (let x = 0; x < lista.length; x += 1){
      let novoObjeto = {tech: lista[x],
        name: name,
      };
      objetosLista.push(novoObjeto);
    }
  } else {
    objetosLista = 'Vazio!';
  }

  return objetosLista;
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
