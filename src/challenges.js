// Desafio 1
function compareTrue( bool1 , bool2 ) {
  // seu código aqui
  if ( (bool1 && bool2) === true ) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea( base , height ) {
  // seu código aqui
  return base * height/2;
}

// Desafio 3
function splitSentence( str ) {
  // seu código aqui
  var txt = "";
  var strArray = [];
  var counter = 0;
  for (let i = 0; i < str.length; i = i + 1) {
    if ( str[i] != " " ) {
      txt = txt + str[i];
    } else if ( str[i] == " " && txt != ""){ 
      strArray[counter] = txt;
      txt = "";
      counter = counter + 1;
    }
  }
  return strArray;
}

// Desafio 4
function concatName( strArray ) {
  // seu código aqui
  return strArray[strArray.length-1] + ", " + strArray[0];
}

// Desafio 5
function footballPoints(wins , ties) {
  // seu código aqui
  return 3*wins + 1*ties;
}

// Desafio 6
function highestCount( numArray ) {
  // seu código aqui
  var greater = 0;
  for (let i = 0; i < numArray.length; i = i + 1) {
    if (numArray[i] > greater) {
      greater = numArray[i];
    }
  }

  var counter = 0;
  for (let i = 0; i < numArray.length; i = i + 1) {
    if (numArray[i] == greater) {
      counter = counter + 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse( mouse , cat1 , cat2 ) {
  // seu código aqui
  if ( ((cat1-mouse)**2)**0.5 < ((cat2-mouse)**2)**0.5 ) {
    return 'cat1';
  } else if ( ((cat1-mouse)**2)**0.5 > ((cat2-mouse)**2)**0.5 ) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
