// Desafio 1
function compareTrue(a = 1, b = 1) {
  if (a && b == 1) {
    return true;
  }
  else {
    return false;
  }
}
// Desafio 2
function calcArea(base = 10, height = 8) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(a = 'go Trybe') {
  a = a.split(' ');
  return a
}

// Desafio 4
function concatName(a = ['foguete', 'nao', 'tem', 'ré']) {
  last = a[a.length - 1] + ', ' + a[0];
  return last;
}

// Desafio 5
function footballPoints(wins = 3, ties = 1) {
  points = (wins * 3) +  (ties * 1)
  return points
}

// Desafio 6
function highestCount(a = [9, 1, 2, 3, 9, 5, 7]) {
  contHigher = 0;
  i = 0;
  for (x in a) {
    if (x > i) {
      i = a[x];
    }
  }
  for (x in a) {
    if (a[x] == i) {
      contHigher++;
    }
  }
  return contHigher;
}

// Desafio 7
function catAndMouse(mouse = 10, cat1 = 5, cat2 = 15) {
  cat1 = Math.abs(cat1 - mouse);
  cat2 = Math.abs(cat2 - mouse);

  if (cat1 == cat2) {
    return 'os gatos trombam e o rato foge';
  } else {
    if (cat1 < cat2) {
      return 'cat1';
    } else {
      return 'cat2';
    }
  }
}

// Desafio 8
function fizzBuzz(a = [2, 15, 7, 9, 45]) {
  let b = [];
  for (x in a) {
    let i = a[x];
    
    if (i % 3 == 0 && i % 5 == 0) {
      b.push('fizzBuzz');
    }
    else if (i % 3 == 0) {
      b.push('fizz');
    }
    else if (i % 5 == 0) {
      b.push('buzz');
    }
    else {
      b.push('bug!');
    }
  }
  return b;
}

// Desafio 9
function encode(a = 'hi there, this is your new house', coded = []) {
  l = a.length;
  r = 0;
  toCode = [];
  
  for (x in a) {
    j = a[x]
    toCode += j;
  }
  for (x in toCode) {
    i = toCode[x];
    if (i == 'a') {
      i = '1'
      coded += i
    }
    else if (i == 'e') {
      i = '2'
      coded += i
    }
    else if (i == 'i') {
      i = '3'
      coded += i
    }
    else if (i == 'o') {
      i = '4'
      coded += i
    }
    else if (i == 'u') {
      i = '5'
      coded += i
    }
    else {
      coded += i
    }
  }
  return coded
}

function decode(a = 'h3 th2r2!', decoded = []) {
  l = a.length;
  r = 0;
  toDecode = [];
  for ( x in a) {
    j = a[x]
    toDecode += j;
  }
  for (x in toDecode) {
    i = toDecode[x];
    if ( i == '1') {
      i = 'a'
      decoded += i
    }
    else if (i == '2') {
      i = 'e'
      decoded += i
    }
    else if (i == '3') {
      i = 'i'
      decoded += i
    }
    else if (i == '4') {
      i = 'o'
      decoded += i
    }
    else if (i == '5') {
      i = 'u'
      decoded += i
    }
    else {
      decoded += i
    }
  }
  return decoded
}

// Desafio 10
function techList(t = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], name = 'Lucas') {
  i = [];
  valid = t.length
  if (valid > 0) {
    for (x in t) {
      let obj = new Object();
      obj.tech = t[x];
      obj.name = name;
      i.push(obj);
    }

  // i.sort(function(a,b) {
  //   if(a.tech < b.tech) return -1;
  //   if(a.tech > b.tech) return 1;
  //   return 0;
  // })

      i.sort((a, b) => {
        if (a.tech < b.tech) return -1;
        if (a.tech > b.tech) return 1;
        return 0;
      })

      return i;
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber() {
}

// Desafio 12
function triangleCheck() {
}

// Desafio 13
function hydrate() {
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
