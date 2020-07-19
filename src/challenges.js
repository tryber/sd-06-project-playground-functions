// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true
  } return false;
  // seu código aqui
}

console.log(compareTrue(true, false))

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area
  // seu código aqui
}

console.log(calcArea(3, 4))

// Desafio 3
function splitSentence(string) {
  let palavraSeparada = string.split(' ');
  return palavraSeparada
  // seu código aqui
}

console.log(splitSentence('go Trybe'))

// Desafio 4
let arr = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
function concatName(arrei) {
  let ultimo = arrei[arrei.length - 1];
  let primeiro = arrei[0];
  let ultimoeprimeiro = `${ultimo}, ${primeiro}`;
  return ultimoeprimeiro
  // seu código aqui
}

console.log(concatName(arr))

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos
}

console.log(footballPoints(3, 1))

// Desafio 6
function highestCount(arr2) {
  let highestNumber = arr2[0];

  for (let index = 0; index < arr2.length; index += 1) {
    if (arr2[index] > highestNumber) {
      highestNumber = arr2[index];
    }
  }

  let count = 0;
  for (let index = 0; index < arr2.length; index += 1) {
    if (highestNumber === arr2[index]) {
      count += 1;
    }
  }

  return count;
  // seu código aqui
}

let array = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(array));


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
   return 'cat2';
  } return 'os gatos trombam e o rato foge'
}
console.log(catAndMouse(0, 20, 20))


// Desafio 8
function fizzBuzz(arrei) {
  let novoarrei = [];
  for (let index = 0; index < arrei.length; index += 1) {
    if (arrei[index] % 3 === 0 && arrei[index] % 5 === 0) {
      novoarrei.push('fizzBuzz');
    } else if (arrei[index] % 3 === 0) {
      novoarrei.push('fizz');
    } else if (arrei[index] % 5 === 0) {
      novoarrei.push('buzz');
    } else {
      novoarrei.push('bug!');
    }
  }
  return (novoarrei);
}
let arr3 = [2, 15, 7, 9, 45];
console.log(fizzBuzz(arr3));

// Desafio 9
function encode(arrei) {
  let novoarreiencode = [];
  for (let index = 0; index < arrei.length; index += 1) {
    if (arrei[index] === 'a') {
      novoarreiencode[index] = '1';
    } else if (arrei[index] === 'e') {
      novoarreiencode[index] = '2';
    } else if (arrei[index] === 'i') {
      novoarreiencode[index] = '3';
    } else if (arrei[index] === 'o') {
      novoarreiencode[index] = '4';
    } else if (arrei[index] === 'u') {
      novoarreiencode[index] = '5';
    } else {
      novoarreiencode[index] = arrei[index];
    }
   } 
   return (novoarreiencode.join(''));
}

console.log(encode('hi there!'))

function decode(arrei) {
  let novoarreidecode = [];
  for (let index = 0; index < arrei.length; index += 1) {
    if (arrei[index] === '1') {
      novoarreidecode[index] = 'a';
    } else if (arrei[index] === '2') {
      novoarreidecode[index] = 'e';
    } else if (arrei[index] === '3') {
      novoarreidecode[index] = 'i';
    } else if (arrei[index] === '4') {
      novoarreidecode[index] = 'o';
    } else if (arrei[index] === '5') {
      novoarreidecode[index] = 'u';
    } else {
      novoarreidecode[index] = arrei[index];
    }
  }
   return (novoarreidecode.join(''));
}

console.log(decode('h3 th2r2!'))

// Desafio 10
function techList(tec, nome) {
  if (tec.length > 0){
    let arrei = [];
    for (let indexArrei = 0; indexArrei < tec.length; indexArrei += 1) {
      arrei.push(tec[indexArrei])
    }
    arrei.sort();
    let ordenado = [];
    for (let indexOrdenado = 0; indexOrdenado < arrei.length; indexOrdenado += 1) {
      let objeto = {
      tech: arrei[indexOrdenado],
      name: nome,
    }
    ordenado.push(objeto);
  } return ordenado
  } return 'Vazio!'
}

let tecnologia = ['React', 'Jest', 'HTML','CSS', 'JavaScript'];
let lucas = 'Lucas'

console.log(techList(tecnologia, lucas))
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
