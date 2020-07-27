// Desafio 1
function compareTrue(bol1, bol2) {
  if (bol1 && bol2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let result = sentence.split(' ');
  return result;
}

// Desafio 4
function concatName(names) {
  let first = names[0];
  let last = names[names.length - 1];
  let concat = last + ', ' + first;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let win = wins * 3;
  let tie = ties * 1;
  let points = win + tie;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  // Descobrir o maior e criar um contador para ele
  let bigger = numbers[0];
  let count = 0;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > bigger) {
      bigger = numbers[i];
    }
  }
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === bigger) {
      count ++;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 < distanceCat2) {
    return "cat1";
  } else if (distanceCat2 < distanceCat1) {
    return "cat2";
  } else if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  // Percorrer o array e criar as condições para posição do array
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 !== 0) {
      numbers[i] = "fizz";
    } else if (numbers[i] % 5 === 0 && numbers[i] % 3 !== 0) {
      numbers[i] = "buzz"
    } else if (numbers[i] % 3 === 0 || numbers[i] % 5 === 0) {
      numbers[i] = "fizzBuzz"
    } else {
      numbers[i] = "bug!";
    }
  }
  return numbers;
}

// Desafio 9
function encode(word) {
  let palavra = word.split("");
  for (let i = 1; i <= word.length; i++) {
    if (palavra[i] === 'a') {
      palavra[i] = '1';
    } else if (palavra[i] === 'e') {
      palavra[i] = '2';
    } else if (palavra[i] === 'i') {
      palavra[i] = '3';
    } else if (palavra[i] === 'o') {
      palavra[i] = '4';
    } else if (palavra[i] === 'u') {
      palavra[i] = '5';
    }
 }
 return palavra.join('');
}

function decode(word) {
  let palavra = word.split("");
  for (let i = 1; i <= word.length; i++) {
    if (palavra[i] === '1') {
      palavra[i] = 'a';
    } else if (palavra[i] === '2') {
      palavra[i] = 'e';
    } else if (palavra[i] === '3') {
      palavra[i] = 'i';
    } else if (palavra[i] === '4') {
      palavra[i] = 'o';
    } else if (palavra[i] === '5') {
      palavra[i] = 'u';
    }
  }
  return palavra.join('');
}

// Desafio 10
function techList(list, name) {
  let orderedArray = list.sort();
  let outPut = [];
  for (let i = 0; i < orderedArray.length; i++) {
    outPut.push(orderedArray[i], name);
  }
  return outPut;
  // for (let i = 0; i < orderedArray.length; i++) {
  //   if (orderedArray !== {}) {
  //     outPut.tech = orderedArray[i];
  //     outPut.name = name;
  //     return outPut;
  //   } else {
  //     return "Vazio!";
  //   }
  // }
}
console.log (techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  //
  if (lineA < (lineB + lineC) && lineA > (Math.abs(lineB - lineC))) {
    return true;
  } else if (lineB < (lineA + lineC) && lineB > (Math.abs(lineA - lineC))) {
    return true;
  } else if (lineC < (lineA + lineB) && lineC > (Math.abs(lineA - lineB))) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(pedido) {
  // seu código aqui
  let int = pedido.replace(/\D/g, "");
  console.log (int);

}
hydrate("1 agua e 1 coca");

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
