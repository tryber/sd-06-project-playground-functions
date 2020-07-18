// Desafio 1
function compareTrue(val1, val2) {
  // seu código aqui
  if (val1 && val2 === true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  return frase.split(" ");
}

// Desafio 4
function concatName(name) {
  // seu código aqui
  let resultado = "";
  resultado += name[name.length - 1] + ', ' + name[0];
  return resultado;
}


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(values) {
  // seu código aqui
  let highValue = 0

  for (let i of values) {
    if (i > highValue) {
      highValue = i;
    }
  }
  let count = 0;

  for (let i of values) {
    if (highValue === i) {
      count += 1;
    }
  }
  return count;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  distanceCat1 = cat1 - mouse;
  distanceCat2 = cat2 - mouse;

  if (distanceCat1 < 0) {
    distanceCat1 *= -1;
  }

  if (distanceCat2 < 0) {
    distanceCat2 *= -1;
  }

  if (distanceCat1 === distanceCat2) {
    return "os gatos trombam e o rato foge";
  }
  else if (distanceCat1 < distanceCat2) {
    return "cat1";
  }
  else {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(values) {
  // seu código aqui
  let answer = [];

  for (let i = 0; i < values.length; i++) {
    if ((values[i] % 3 == 0) && (values[i] % 5 == 0)) {
      answer.push("fizzBuzz");
    } else if (values[i] % 3 == 0) {
      answer.push("fizz");
    } else if (values[i] % 5 == 0) {
      answer.push("buzz");
    } else {
      answer.push("bug!");
    }
  }
  return answer;
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