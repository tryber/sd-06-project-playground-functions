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
    if (array[key]%3 === 0 && array[key] % 5 === 0){
      array2.push('fizzBuzz')
    }else if (array[key] % 5 === 0){
      array2.push('buzz');
    }else if (array[key] % 3 === 0){
      array2.push('fizz')
    }else{
      array2.push('bug!')
    }
  }
  return array2;
}

// Desafio 9
function encode(str) {
  let aux = str.split("");
  let aux2 = []; 
  for (const key in aux) {
    if (aux[key] === 'a') {
      aux2 = aux2 + '1';
    }else if(aux[key] === 'e'){
      aux2 += '2';
    }else if (aux[key] === 'i'){
      aux2 = aux2 + '3';
    }else if (aux[key] === 'o'){
      aux2 += '4';
    }else if (aux[key] === 'u'){
      aux2 += '5'
    }else{
      aux2 += aux[key];
    }
  }
  return aux2;
}

function decode(str) {
  let aux = str.split("");
  let aux2 = []; 
  for (const key in aux) {
    if (aux[key] === '1') {
      aux2 = aux2 + 'a';
    }else if(aux[key] === '2'){
      aux2 += 'e';
    }else if (aux[key] === '3'){
      aux2 = aux2 + 'i';
    }else if (aux[key] === '4'){
      aux2 += 'o';
    }else if (aux[key] === '5'){
      aux2 += 'u'
    }else{
      aux2 += aux[key];
    }
  }
  return aux2;
  
}
console.log(decode("h3 th2r2"))

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
