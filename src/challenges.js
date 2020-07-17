// Desafio 1
function compareTrue(BOOLEAN1, BOOLEAN2) {
  if (BOOLEAN1 && BOOLEAN2) {
    return true;
  } else {
    return false;
  }

}

// Desafio 2
function calcArea(base, height) {
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {

  let word = 0;
  let sentence = [];
  for (let i = 0; i < str.lenght; i++) {
    if (str[i] == " " && str[0] == " ") {
      sentence[word] = getWord(i-1);
      word++;
    }
  }

  return sentence;

  function getWord(i) {
    let word;
    for (j = i; j = 0; j--) {
      if (str[j] == " ") {
        return word;
      }
      word.unshift(str[i])
    }
  }
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
