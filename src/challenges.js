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
  return (wins * 3) + ties;
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
  dist1 = cat1 - mouse;
  dist1 = Math.abs(dist1);
  dist2 = cat2 - mouse;
  dist2 = Math.abs(dist2);
  if (dist1 > dist2) {
    return 'cat2';
  }
  if (dist1 < dist2) {
    return 'cat1';
  }
    return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(vetNumbers) {
  let array2 = [];
  for (let i = 0; i < vetNumbers.length; i += 1) {
    if (vetNumbers[i] % 3 === 0 && vetNumbers[i] % 5 != 0) {
      array2[i] = 'fizz';
    }
    else if (vetNumbers[i] % 5 === 0 && vetNumbers[i] % 3 != 0) {
      array2[i] = 'buzz';
    }
    else if (vetNumbers[i] % 5 === 0 && vetNumbers[i] % 3 === 0) {
      array2[i] = 'fizzbuzz';
    }
    else {
      array2[i] = 'bug';
    }
  }
  return array2;
}

// Desafio 9
function encode(word2) {
  const vogais = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let vet1 = [];
  for (let i = 0; i < word2.length; i += 1) {
    let char = word2.charAt(i);
    if (char in vogais) {
      vet1.push(vogais[char]);
    }
    else {
      vet1.push([char]);
    }
  }
  let retorno = vet1.join('');
  return retorno;
}

function decode(word3) {
  const numbers = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let vet1 = [];
  for (let i = 0; i < word3.length; i += 1) {
    let char = word3.charAt(i);
    if (char in numbers) {
      vet1.push(numbers[char]);
    }
    else {
      vet1.push([char]);
    }
  }
  let retorno = vet1.join('');
  return retorno;
}

// Desafio 10
function techList() {
  // seu código aqui
  function techList(array1, name) {
    let sort = array1.sort();
    let final = [];
    for(i in sort){
      final.push({"tech" : sort[i], "name" : name});
    }
    if(array1.length === 0){
      return "Vazio!";
    } else {
      return final;
    }
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
