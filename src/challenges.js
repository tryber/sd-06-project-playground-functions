// Desafio 1
function compareTrue(v1, v2) {
  // seu código aqui
  if (v1 == true && v2 == true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  return frase.split (" ");
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let ultimoPrimeiro = "";
  ultimoPrimeiro += array[array.length - 1] + ', ' + array[0]
  return ultimoPrimeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let vitoria = wins * 3;
  let empate = ties;
  return vitoria + empate;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let highest = 0;
  for (let number of array) {
    if (number > highest) {
      highest = number;
    }
  }
  let times = 0;

  for (let number of array) {
    if (highest === number) {
      times += 1;
    }
  }
  return times;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return "os gatos trombam e o rato foge"
  } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return "cat1"
  } else (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)); {
    return "cat2"
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let arrayResultado = [];
  for (let i = 0; i < array.length; i++) {
    if ((array[i] % 3 == 0) && (array[i] % 5 == 0)) {
    arrayResultado.push('fizzBuzz');
    } else if (array[i] % 3 == 0) {
    arrayResultado.push('fizz');
    } else if (array[i] % 5 == 0) {
    arrayResultado.push('buzz');
    } else {
    arrayResultado.push('bug!');   
    }
  }
  return arrayResultado;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let listaDeObjetos = []
  for (i=0; i<tech.length; i++) {
    return {
      tech:tech[i],
      name:name
    }
  }
}
let tech = ["CSS", "Java", "Phyton"]
let name = "Tiago"
console.log(techList(tech, name))


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


