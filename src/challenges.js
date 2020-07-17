// Desafio 1
function compareTrue(value, value2) {
  if (value === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}


// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return (`${array[array.length - 1]}, ${array[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(numbers) {
  let highNumber = 0;
  let index = 0;
  let count = 0;
  for (i in numbers){
    if (numbers[index] <= numbers [i]){
      highNumber = numbers[i];
      index = i;
    }
  }
  for (j in numbers){
    if (numbers[j] === highNumber){
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse > cat1) {
    cat1 = mouse - cat1;
  }
  else{
    cat1 = cat1 - mouse;
  }
  if (mouse > cat2) {
    cat2 = mouse - cat2;
  }
  else {
    cat2 = cat2 - mouse;
  }
  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1 < cat2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  let newArray =[];
  for(num in array) {
    if (array[num] % 3 === 0 && array[num] % 5 === 0) {
      newArray.push('fizzBuzz');
    }else if (array[num] % 3 === 0) {
      newArray.push('fizz');
    }else if (array[num] % 5 === 0) {
      newArray.push('buzz');
    }else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(string) {
  let string2 = "";
  
  for (indice in string) {
    
    if (string[indice] === 'a') {
      string2 += '1';
    } else if(string[indice] === 'e') {
      string2 += '2';
    } else if(string[indice] === 'i') {
      string2 += '3';
    } else if(string[indice] === 'o') {
      string2 += '4';
    } else if(string[indice] === 'u') {
      string2 += '5';
    } else {
      string2 += string[indice];
    }
  }
  return string2;
}
function decode(string) {
  let string2 = "";
  
  for (indice in string) {
    
    if (string[indice] === '1') {
      string2 += 'a';
    } else if(string[indice] === '2') {
      string2 += 'e';
    } else if(string[indice] === '3') {
      string2 += 'i';
    } else if(string[indice] === '4') {
      string2 += 'o';
    } else if(string[indice] === '5') {
      string2 += 'u';
    } else {
      string2 += string[indice];
    }
  }
  return string2;
}
// let code = encode('hi there!');
// console.log(code);
// let descode = decode(code);
// console.log(descode);
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
