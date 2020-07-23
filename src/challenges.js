// Desafio 1
function compareTrue(coisa1, coisa2) {
  let comparado;
  comparado = coisa1 && coisa2;
  return comparado;
}

// Desafio 2
function calcArea(base, height) {
  let areatri;
  areatri = (base * height) / 2;
  return areatri;
}

// Desafio 3
function splitSentence(frase) {
  let dividida;
  dividida = frase.split(' ');
  return dividida;
}

// Desafio 4
function concatName(lista) {
  let extremos;
  extremos = `${lista[lista.length - 1]}, ${lista[0]}`;
  return extremos;
  // esse $ foi ideia do VScode, mas parece fazer sentido
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos;
  pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(numerosLista) {
  let numerosQuantid = 0;
  let i;
  let maiorNumero = 0;
  for (i = 0; i < numerosLista.length; i += 1) {
    if (numerosLista[i] > maiorNumero) {
      maiorNumero = numerosLista[i];
      numerosQuantid = 0;
    }
    if (numerosLista[i] === maiorNumero) {
      numerosQuantid += 1;
    }
  }
  return numerosQuantid;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let moduloCat1 = Math.abs(mouse - cat1);
  let moduloCat2 = Math.abs(mouse - cat2);
  if (moduloCat1 < moduloCat2) {
    return 'cat1';
  } else if (moduloCat2 < moduloCat1) {
    return 'cat2';
   } else { 
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(desafio8) {
  let resposta8 = [];
  for (let i8 = 0; i8 < desafio8.length; i8 += 1) {
    if (desafio8[i8] % 5 === 0 && desafio8[i8] % 3 === 0) {
      resposta8.push('fizzBuzz');
    } else if (desafio8[i8] % 5 === 0) {
      resposta8.push('buzz');
    } else if (desafio8[i8] % 5 !== 0) {
      resposta8.push('fizz');
    } else {
      resposta8.push('bug!');
    }
  }
    return resposta8;
  }

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
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
