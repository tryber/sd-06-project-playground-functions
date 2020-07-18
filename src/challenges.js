// Desafio 1
function compareTrue(x, y) {
  return x===true&&y===true; 
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(string) {
  string = string.split(' ');

  return string;
}

// Desafio 4
function concatName(array) {
  array=array[array.length-1]+", " + array[0];
  return array;
}

// Desafio 5
function footballPoints(win, ties) {
  let points=0;
  for (let i = 1; i <= win; i +=1) {
    points += 3;
  }
  for (j = 1; j <= ties; j +=1) {
    points+=1;
  }
  return points;
}

// Desafio 6
function highestCount(array) {
  let greater=0;
  let count=0;
  for (let i = 0; i < array.length; i +=1) {
    if (array[i]>greater) {
      greater=array[i];
    }
  }
  for (let j = 0; j < array.length; j +=1) {
    if (array[j]===greater) {
      count+=1; 
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1=Math.abs(mouse-cat1);
  let distanceCat2=Math.abs(mouse-cat2);
  if (distanceCat1<distanceCat2) {
    return "cat1";
  } else if (distanceCat1>distanceCat2) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let phrase = []
  for (let i = 0; i < array.length; i +=1) {
    if (array[i]%3==0&&array[i]%5==0) {
      phrase.push("fizzBuzz");
    }
    else if (array[i]%3==0) {
      phrase.push("fizz");
    }
    else if (array[i]%5==0) {
      phrase.push("buzz");
    }
    else {
      phrase.push("bug!");
    }
  }
  return phrase;
}

// Desafio 9
function encode(string) {
  let phrase=string.split('');
  for (let i = 0; i < phrase.length; i +=1) {
    if (phrase[i]=="a") {
      phrase[i]=1;
    } else if (phrase[i]=="e") {
      phrase[i]=2;
    } else if (phrase[i]=="i") {
      phrase[i]=3;
    } else if (phrase[i]=="o") {
      phrase[i]=4;
    } else if (phrase[i]=="u") {
      phrase[i]=5
    }
  }
  phrase=phrase.join('');

  return phrase;
}

function decode(string) {
  let phrase2 = string.split('');
  for (let i = 0; i < phrase2.length; i +=1) {
    if (phrase2[i] == 1) {
      phrase2[i] = "a";
    } else if (phrase2[i] == 2) {
      phrase2[i] = "e";
    } else if (phrase2[i] == 3) {
      phrase2[i] = "i";
    } else if (phrase2[i] == 4) {
      phrase2[i] = "o";
    } else if (phrase2[i] == 5) {
      phrase2[i] = "u";
    }
  }
  phrase2 = phrase2.join('');

  return phrase2;
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
