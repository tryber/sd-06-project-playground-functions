// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(array1) {
  return `${array1[array1.length - 1]}, ${array1[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array2) {
  let maior = array2[0];
  let count = 0;

  for (let i = 0; i < array2.length; i++) {

    if (array2[i] === maior) {
      count += 1;
    }

    if (array2[i] > maior) {
      maior = array2[i]
      count = 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = cat1 - mouse;
  let distance2 = cat2 - mouse;

  function convertNegativeNumbers(a) {
    if (a < 0) {
      a *= -1
    }
    return a;
  }

  distance1 = convertNegativeNumbers(distance1);
  distance2 = convertNegativeNumbers(distance2);

  if (distance1 > distance2) {
    return "cat2"
  } else if (distance2 > distance1) {
    return "cat1"
  }

  return "os gatos trombam e o rato foge"
}

// Desafio 8
function fizzBuzz(array3) {
  let phrase = []

  for (let i = 0; i < array3.length; i++) {

    if (array3[i] % 3 === 0 && array3[i] % 5 === 0) {
      phrase.push("fizzBuzz")
    }
    else if (array3[i] % 3 === 0) {
      phrase.push("fizz")
    }
    else if (array3[i] % 5 === 0) {
      phrase.push("buzz")
    }
    else {
      phrase.push("bug!")
    }
  }

  return phrase;
}

// Desafio 9
function encode(phrase) {
  return replaceString(phrase, true);
}

function decode(phrase) {
  return replaceString(phrase, false);
}

function replaceString(string, swap) {
  const vowels = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let index = 0;

  for (const [key, value] of Object.entries(vowels)) {

    swap ? index = string.indexOf(key) : index = string.indexOf(value);

    if (index !== -1) {
      swap ? string = string.split(key).join(value) :
      string = string.split(value).join(key);
    }

  }

  return string;
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
