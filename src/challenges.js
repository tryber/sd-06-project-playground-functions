// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  let resultado;
  if (a === true && b === true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(nome) {
  // seu código aqui
  let resultado = nome.split(' ');
  return resultado;
}

// Desafio 4
function concatName(arr) {
  // seu código aqui
  let primeiro = arr[0];
  let ultimo = arr[arr.length - 1];
  let str = ultimo + ', ' + primeiro;
  return str;
}

// Desafio 5
function footballPoints(vitoria, empate) {
  // seu código aqui
  vitoria *= 3;
  empate *= 1;
  return vitoria + empate;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaC1 = Math.abs(mouse - cat1);
  let distanciaC2 = Math.abs(mouse - cat2);
  let msg;
  if (mouse) {
  }
  if (distanciaC1 > distanciaC2) {
    msg = "cat2";
  } else if (distanciaC2 > distanciaC1) {
    msg = "cat1";
  } else {
    msg = "os gatos trombam e o rato foge";
  }
  return msg;
}

// Desafio 8
function fizzBuzz(arr) {
  // seu código aqui
  let resultados = [];
  for ( let i in arr ) {
    if ( (arr[i] % 3 === 0) && (arr[i] % 5 === 0) ) {
      resultados.push('fizzBuzz');
    } else if ( arr[i] % 3 === 0 ) {
        resultados.push('fizz');
    } else if ( arr[i] % 5 === 0 ) {
        resultados.push('buzz');
    } else {
      resultados.push('bug!');
    }
  }
  return resultados;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(arr, nome) {
  // seu código aqui
  let resultados = [];
  let msg = 'Vazio!';
  if ( arr.length > 0) {
    for ( let i in arr ) {
      resultados.push( {tech: arr[i], name: nome} );
    }
    resultados.sort(function (a, b) {
	
    return (a.tech > b.tech) ? 1 : ((b.tech > a.tech) ? -1 : 0);
     
    });
    return resultados;
  } else {
    return msg;
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
