// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let arrayResponse = sentence.split(' ');
  return arrayResponse;
}

// Desafio 4
function concatName(teste) {
  let primeira = teste[0];
  let ultima = teste[(teste.length -1)];
  let arrayResponse = '';
  arrayResponse = ultima.concat(', ').concat(primeira);
  return arrayResponse;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(a) {
  let maior = 0;
  let cont = 0;

  a.forEach(e => {
   if(e > maior) {
        maior = e;
    }
  });
  a.forEach(e => {
   if( e === maior ) {
     cont += 1;
    }
  });
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {   
    
  if (mouse < cat1 && mouse < cat2  ) {
      let catDist1 = cat1 + mouse;
      let catDist2 = cat2 + mouse;

      if (catDist1 > catDist2) {
          return 'cat2'
      } else if (catDist1 < catDist2) {
          return 'cat1'
      }
  } else if (mouse > cat1 && mouse > cat2){
      let catDist1 = mouse - cat1;
      let catDist2 = mouse - cat2;

      if (catDist1 > catDist2) {
          return 'cat2'
      }else if (catDist1 < catDist2) {
          return 'cat1'
      }
  }else if (cat1 < mouse && mouse < cat2) {
      let catDist1 = mouse - cat1;
      let catDist2 = cat2 - mouse;

      if (catDist1 > catDist2) {
          return 'cat2'
      }else if (catDist1 < catDist2) {
          return 'cat1'
      }

  } else if (cat2 < mouse && mouse < cat1){
      let catDist1 = mouse - cat1;
      let catDist2 = cat2 - mouse;

      if (catDist1 > catDist2) {
          return 'cat2'
      }else if (catDist1 < catDist2) {
          return 'cat1'
      }
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(bArray) {
  let newArray =[];

  for (let index = 0; index < bArray.length; index +=1) {
    if (bArray[index] %3 === 0 && bArray[index] %5 === 0) {
      newArray.push('fizzBuzz');
    }else {
      if (bArray[index] %3 === 0) {
        newArray.push('fizz');
      }else if (bArray[index] %5 === 0) {
        newArray.push('Buzz');
      }else {
        newArray.push('bug!');  
      }             
    }              
  }
  return newArray;
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
