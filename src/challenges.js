// Desafio 1
function compareTrue(a = 1, b = 1) {
  if (a && b == 1){
    b = true
  }
  else 
    b = false
}

// Desafio 2
function calcArea(base = 10, height = 8) {
  b = (base * height) / 2
}

// Desafio 3
function splitSentence(a = 'go Trybe') {
  a = a.split(' ');
  b = a
}

// Desafio 4
function concatName( a = ['Lucas', 'Anderson', 'Maria', 'Paulo'] ) {
  last = a [a.length -1] 
  b = (last + ', ' + a[0])
}

// Desafio 5
function footballPoints( wins = 3, ties = 1) {
  points = wins * 3 +  ties * 1
  b = points
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
  b = contHigher
}

// Desafio 7
function catAndMouse(mouse = 10, cat1 = 5, cat2 = 15) {
  cat1 = Math.abs(cat1 - mouse)
  cat2 = Math.abs(cat2 - mouse)

  if ( cat1 == cat2 ){
    b = 'os gatos trombam e o rato foge'
  }
  else
    if ( cat1 < cat2){
      b = 'cat1'
    }
    else
      b = 'cat2'
}

// Desafio 8
function fizzBuzz(a = [2, 15, 7, 9, 45]) {
  let b = []
  for ( x in a){
    let i = a[x]
    
    
    if(i % 3 == 0 && i % 5 == 0){
      b.push('fizzBuzz')
    }
    else if (i % 3 == 0){
      b.push('fizz')
    }
    else if (i % 5 == 0){
      b.push('buzz')
    }
    else
      b.push('bug!')
  }
return b
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
