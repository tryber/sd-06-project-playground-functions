// Desafio 1
function compareTrue(var1, var2) {
  if (var1 === true && var2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(word) {
  return word.split(' ');
}

// Desafio 4
function concatName(d) {
  let ultimo = d[d.length - 1];
  let primeiro = d[0];
  let ultmoPrimeiro = `${ultimo}, ${primeiro}`;
  return ultmoPrimeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  wins = wins * 3;
  points = wins + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let cont = 0;
  
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === maior) {
      cont += 1;
    }
    if (array[i] > maior) {
      maior = array[i];
      cont = 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = 0;
  let dist2 = 0;
  dist1 = cat1-mouse;
  dist1 = Math.abs(dist1);
  dist2 = cat2-mouse;
  dist2 = Math.abs(dist2);
  if (dist1 > dist2) {
    return 'cat2';
  }
  if ( dist1 === dist2 ) {
    return 'os gatos trombam e o rato foge';
  }
  if (dist1 < dist2) {
    return 'cat1';
  }
}

// Desafio 8
function fizzBuzz(array_1) {
  let array_2 = [];
  for (let i = 0; i < array_1.length; i += 1) {
    if (array_1[i] % 3 === 0 && array_1[i] % 5 !== 0) {
      array_2[i] = 'fizz';
    }
    if (array_1[i] % 5 === 0 && array_1[i] % 3 !== 0) {
      array_2[i] = 'buzz';
    }
    if (array_1[i] % 5 === 0 && array_1[i] % 3 === 0) {
      array_2[i] = 'fizzbuzz';
    }
    else {
      array_2[i] = 'bug';
    }
  }
  return array_2;
}

// Desafio 9
function encode(word_2) {
  const vogais = {
    a : 1,
    e : 2,
    i : 3,
    o : 4,
    u : 5,
  };
  let vet_1 = [];
  
  for (let i = 0; i < word_2.length; i += 1) {
    let char =word_2.charAt(i);
    if (char in vogais){
      vet_1.push(vogais[char]);
    }
    else {
      vet_1.push([char]);
    }
  }
  let retorno = vet_1.join('');
  return retorno;
}

function decode(word_3) {
  const numbers = {
    1 : 'a',
    2 : 'e',
    3 : 'i',
    4 : 'o',
    5 : 'u',
  };
  let vet_1 = [];
  
  for (let i = 0; i < word_3.length; i += 1) {
    let char = word_3.charAt(i);
    if(char in numbers){
      vet_1.push(numbers[char]);
    }
    else {
      vet_1.push([char]);
    }
  }
  let retorno = vet_1.join('');
  return retorno;
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
