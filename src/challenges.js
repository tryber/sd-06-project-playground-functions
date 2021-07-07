// Desafio 1
function compareTrue(a = true, b = false) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base = 10, height = 8) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(a = 'go Trybe') {
  a = a.split(' ');
  return a
}

// Desafio 4
function concatName(a = ['foguete', 'nao', 'tem', 'ré']) {
  let last = a[a.length - 1];
  let first = a[0];
  return `${last}, ${first}`;
}

// Desafio 5
function footballPoints(wins = 3, ties = 1) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount(numbers = [9, 1, 2, 3, 9, 5, 7]) {
  let max = Math.max(...numbers);
  let count = 0;
  for (let x = 0; x < numbers.length; x += 1) {
    if (numbers[x] === max) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse = 10, cat1 = 5, cat2 = 15) {
  cat1 = Math.abs(cat1 - mouse);
  cat2 = Math.abs(cat2 - mouse);

  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  } if (cat1 < cat2) {
    return 'cat1';
  } return 'cat2';
}

// Desafio 8
function fizzBuzz(array = [2, 15, 7, 9, 45]) {
  let out = [];
  for (let i = 0; i < array.length; i += 1) {
    let number = array[i];
    out.push(((number % 15 === 0 ? 'fizzBuzz' : '') || (number % 3 === 0 ? 'fizz' : '') ||  (number % 5 === 0 ? 'buzz' : '') || 'bug!'))
  }
  return out;
}

// Desafio 9
function encode(a = 'hi there, this is your new house') {
  let code = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  a = a.replace(/[aeiou]/g, m => code[m]);
  return a;
}

function decode(b = 'h3 th2r2! wh1ts 5p') {
  let code = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  b = b.replace(/[12345]/g, m => code[m]);
  return b;
}

// Desafio 10
function techList(t = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], name = 'Lucas') {
  let valid = t.length;
  let i = [];
  if (valid > 0) {
    for (let x = 0; x < t.length; x += 1) {
      let obj = {};
      obj.tech = t[x];
      obj.name = name;
      i.push(obj);
    }
    i.sort((a, b) => {
      if (a.tech < b.tech) return -1;
      if (a.tech > b.tech) return 1;
      return 0;
    })
    return i;
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]) {
  let arrayLenght = numbers.length;
  
  // se o Array tiver tamanho diferente de 11, retornar  "Array com tamanho incorreto."
  if (arrayLenght != 11) {
    return 'Array com tamanho incorreto.';
  } 

// caso algum numero > 9 e < 0; erro "não é possível gerar um número de telefone com esses valores"
  for (let i = 0; i < arrayLenght; i += 1) {
    let number = numbers[i];
    if (number < 0 || number > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }  

// caso algum numero se repita três vezes erro "não é possível gerar um número de telefone com esses valores"
  for (let i = 0; i < arrayLenght; i += 1) {
    let count = 0;
    let number = numbers[i];
    for (let i2 = 0; i2 < arrayLenght; i2 += 1) {
      let number2 = numbers[i2];
      if (number === number2) {
        count += 1;
      }
    }
  
  if (count >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
}

// retornar um numero no modelo (12) 34567-8901
let ddd = '' + numbers[0] + numbers[1];
let firsts = '' + numbers.slice(2,7);
let lasts = '' + numbers.slice(7,);
firsts = firsts.replace(/[,]/g, ''); 
lasts = lasts.replace(/[,]/g, ''); 

return `(${ddd}) ${firsts}-${lasts}`;

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let aB = Math.abs(lineA + lineB);
  let bC = Math.abs(lineB + lineC);
  let cA = Math.abs(lineC + lineA);
  if (lineC <= aB && lineA <= bC && lineB <= cA) {
    return true;
  } return false;
}
triangleCheck(10,13,2)
// Desafio 13
function hydrate() {
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
