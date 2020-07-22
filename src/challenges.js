// Desafio 1

function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2

function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3

function splitSentence(phrase) {
  return phrase.split(" ");
}

// Desafio 4

function concatName(word) {
  return (word[word.length - 1] + ", " + word[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties);
  return points;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  function catAndMouse(mouse, cat1, cat2) {
    let run;
    let pino1;
    let pino2;
    if (mouse > cat1 && mouse > cat2) {
      pino1 = mouse - cat1;
      pino2 = mouse - cat2;
    } else if (mouse < cat1 && mouse < cat2) {
      pino1 = cat1 - mouse;
      pino2 = cat2 - mouse;
      console.log("Pino1 : " + pino1)
      console.log("pino2 : " + pino2)
    } else if (mouse > cat2 && mouse < cat1) {
      pino2 = mouse - cat2;
      pino1 = cat1 - mouse;
    } else if (mouse < cat2 && mouse > cat1) {
      pino2 = cat2 - mouse;
      pino1 = mouse - cat1;
    }
    if (pino1 === pino2) {
      run = "os gatos trombam e o rato foge";
    } else if (pino1 > pino2) {
      run = "cat2";
    } else {
      run = "cat1";
    }
    return run;
  }
}

// Desafio 8

function fizzBuzz(numb) {
  let newArray = []

  for (i in numb) {
    if (numb[i] % 3 === 0 && numb[i] % 5 != 0) {
      newArray.push("fizz");
    } else if (numb[i] % 5 === 0 && numb[i] % 3 != 0) {
      newArray.push("buzz");
    } else if (numb[i] % 3 === 0 && numb[i] % 5 === 0) {
      newArray.push("fizzBuzz")
    } else {
      newArray.push("bug!")
    }
  }
  return (newArray)
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
