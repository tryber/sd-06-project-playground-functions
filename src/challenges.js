// Desafio 1
function compareTrue(a = 1, b = 1) {
  if (a && b == 1){
    return true
  }
  else 
    return false
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
function concatName( a = ['Lucas', 'Anderson', 'Maria', 'Paulo'] ) {
  last = a [a.length -1] 
  return (last + ', ' + a[0])
}

// Desafio 5
function footballPoints( wins = 3, ties = 1) {
  points = wins * 3 +  ties * 1
  return points
}

// Desafio 6
function highestCount(a = [9, 1, 2, 3, 9, 5, 7]) {
  contHigher = 0;
  i = 0;
  for (x in a){
    if (x > i){
      i = a[x];
    }
  }
  for (x in a){
    if ( a[x] == i){
      contHigher ++
    }
  }
  return contHigher
}

// Desafio 7
function catAndMouse(mouse = 0, cat1 = 3, cat2 = 2) {
  cat1Mouse = cat1 - mouse;
  cat2Mouse = cat2 - mouse;
  
  if (cat1Mouse - cat2Mouse == 0){
    return 'os gatos trombam e o rato foge'
  }
  else
    if (cat1Mouse < cat2Mouse){
      return 'cat1'
    }
    else
      return 'cat2'
}


// Desafio 8
function fizzBuzz() {
}

// Desafio 9
function encode() {
}
function decode() {
}

// Desafio 10
function techList() {
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
