// Desafio 1
function compareTrue(a,b) {
  // seu código aqui
  if(a === true && b === true) {
    return true;
  } 
    return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2;
}

// Desafio 3

function splitSentence(string) {
  // seu código aqui
  return string.split(' ')
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let last = array.length-1;
  return  array[last]+', '+array[0];
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let vit = 3 * wins;
  let emp = ties;
  return vit + emp;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maiorNum = 0;
  let time = 0;
  for (let i in array) {
    if (array[maiorNum] < array[i]) {
      maiorNum = i;
    }
  };
  for (let c in array) {
    if(array[c] === array[maiorNum]){
      time++;
    }
  }
  return time;
} 

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let dCat1Mouse;
  let dCat2Mouse;

  if(mouse>cat1) {
     dCat1Mouse = (mouse - cat1);
  } else {
     dCat1Mouse = (cat1 - mouse);
  };
  if(mouse>cat2){
     dCat2Mouse = (mouse - cat2);
  } else {
     dCat2Mouse = (cat2 - mouse);
  };

  if(dCat1Mouse === dCat2Mouse ) {
    return "os gatos trombam e o rato foge"
  } else if (dCat1Mouse < dCat2Mouse) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let novo = [];
  for(let i = 0; i < array.length; i++){
      if(array[i]%3 === 0 && array[i]%5 === 0){
        novo.push("fizzBuzz");
      } else if(array[i]%5 === 0 && array[i]%3 !== 0) {
        novo.push("buzz");
      } else if(array[i]%3 === 0 && array[i]%5 !== 0) {
        novo.push("fizz");
      } else {
        novo.push("bug!");
      }
    }
    return novo;
  }
 
// Desafio 9

function encode(word) {
  // seu código aqui
  let vogal = [''];
  let array = [... word];
  for(let i in array) {
    if(array[i] === 'a'){
      vogal += 1;
    } else if(array[i] === 'e'){
      vogal += 2;
    } else if(array[i] === 'i'){
      vogal += 3;
    } else if(array[i] === 'o') {
      vogal += 4;
    } else if(array[i] === 'u') {
      vogal += 5;
    } else {
      vogal += array[i];
    }
  }
  return vogal;
}
console.log(encode('how are you today?'))
function decode(numero) {
  // seu código aqui
  let word = [''];
  let array = [... numero];
  for(let i in array) {
    if(array[i] === '1'){
      word += 'a';
    } else if(array[i] === '2'){
      word += 'e';
    } else if(array[i] === '3'){
      word += 'i';
    } else if(array[i] === '4') {
      word += 'o';
    } else if(array[i] === '5') {
      word += 'u';
    } else {
      word += array[i];
    }
  }
  return word;
};
console.log(decode('H4w 1r2 y45 t4d1y?'))
// Desafio 10
function techList(tech, name) {
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
