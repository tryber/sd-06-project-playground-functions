// Desafio 1
function compareTrue(val1, val2) {
  if (val1 === true && val2 === true) {
    return true;
  } else {
    return false;
  } 
}

// Desafio 2
function calcArea(base, height) {
  let calc = (base * height)/2;
  return calc;


}
// Desafio 3
function splitSentence(str) {
  return str.split(" ")

}

// Desafio 4
function concatName(array) {
  for (const key in array) {
    return array[array.length - 1] +", "+ array[0];
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(array) {
  let hNumber = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > hNumber){
    hNumber = array[index]
    } 
  }
  let aux = 0;
  for (const key in array) {
    if (hNumber === array[key]) {
    aux += 1 
    }
  }
  return aux;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posC1, posC2, posMouse;
  if (cat1 <= mouse) {
    posC1 = mouse - cat1;
  }else{
    posC1 = cat1 - mouse;
  }
  if (cat2 <= mouse) {
    posC2 = mouse - cat2;
  } else {
    posC2 = cat2 - mouse;
  }
  if (posC1 > posC2) {
    return "cat2"
  } else if(posC2 > posC1){
    return "cat1"
  } else{
    return "os gatos trombam e o rato foge"
  }
}
// Desafio 8
function fizzBuzz(array) {
  array2 = [];
  for (const key in array) {
    if (array[key]%3 === 0) {
      array2.push('fizz');
    }else if (array[key] % 5 === 0){
      array2.push('buzz');
    }else if(array[key]%3 === 0 || array[key] % 5 === 0){
      array2.push('fizzBuzz')
    }else if(array[key]%3 != 0 && array[key] % 5 != 0){
      array2.push('bug!')
    }
  }
  return array2;
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
