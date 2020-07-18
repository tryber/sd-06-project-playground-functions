// Desafio 1
function compareTrue(var1, var2) {
  if(var1=== true && var2=== true)  {
    return true;
  }
  //
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area;
  area= ( base * height ) / 2;
  return area;
}

// Desafio 3
function splitSentence(word) {
  return word.split(' ');
}

// Desafio 4
function concatName(d) {
  let word_1= '';
  word_1= d[d.length-1]+', '+d[0];
  return word_1;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points= 0;
  wins= wins*3;
  points= wins+ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let maior= array[0];
  let cont= 0;
  
  for(let i= 0; i<array.length; i+= 1) {
    if(array[i]=== maior)  {
      cont+= 1;
    }
    if(array[i]>maior)  {
      maior= array[i];
      cont= 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1= 0;
  let dist2= 0;
  dist1= cat1-mouse;
  dist1= Math.abs(dist1);
  dist2= cat2-mouse;
  dist2= Math.abs(dist2);
  if(dist1>dist2)  {
    return 'cat2';
  }
  if( dist1 === dist2 )  {
    return 'os gatos trombam e o rato foge';
  }
  if(dist1<dist2)  {
    return 'cat1';
  }
}

// Desafio 8
function fizzBuzz(array_1) {
  let array_2= [];
  for(let i= 0; i<array_1.length; i+= 1) {
    if(array_1[i]%3=== 0)  {
      array_2[i]+='fizz';
    }
    if(array_1[i]%5=== 0)  {
      array_2[i]+='buzz';
    }
    if(array_1[i]%5=== 0 && array_1[i]%3=== 0)  {
      array_2[i]+='fizzbuzz';
    }
    else  {
      array_2[i]+='bug';
    }
  }
}

// Desafio 9
function encode(word_2) {
  let aux= '';
  let cont= 0;
  let pala= '';
  
  for(let i= 0; i<word_2.length; i+= 1) {
    cont=0;
    if(word_2[i]=== 'a')  {
      pala= 1;
      cont= 1;
    }
    if(word_2[i]=== 'e')  {
      pala= 2;
      cont= 1;
    }
    if(word_2[i]=== 'i')  {
      pala= 3;
      cont= 1;
    }
    if(word_2[i]=== 'o')  {
      pala= 4;
      cont= 1;
    }
    if(word_2[i]=== 'u')  {
      pala= 5;
      cont= 1;
    }
    if(cont===1)  {
      aux+= pala;
    }
    else {
      aux+= word_2[i];
    }
  }
  return aux;
}

function decode(word_2) {
  let aux= '';
  let cont= 0;
  let pala= '';
  for(let i= 0; i<word_2.length; i+= 1) {
    cont=0;
    if(word_2[i]=== 1)  {
      pala= 'a';
      cont= 1;
    }
    if(word_2[i]=== 2)  {
      pala= 'e';
      cont= 1;
    }
    if(word_2[i]=== 3)  {
      pala= 'i';
      cont= 1;
    }
    if(word_2[i]=== 4)  {
      pala= 'o';
      cont= 1;
    }
    if(word_2[i]=== 5)  {
      pala= 'u';
      cont= 1;
    }
    if(cont=== 1)  {
      //espaco sinal 
      aux += pala;
    }
    else {
      //espaco resp
      aux+= word_2[i] ;
    }
  }
  return aux;
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
