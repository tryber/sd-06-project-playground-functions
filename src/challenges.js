// Desafio 1
function compareTrue(c1, c2) {
if (c1 === true && c2 === true){
return true;
} 
return false;
}
// Desafio 2
function calcArea(base, height) {
return base * height/2;
}

// Desafio 3
function splitSentence(a) {
return a.split(" ");
}


// Desafio 4
function concatName(b) {
let i = b.length-1
let piriri = b[i]
piriri = piriri + ", " + b[0];
return piriri 
}

// Desafio 5
function footballPoints(wins, ties) {
let vitoria = 3
let empate = 1
return (wins * vitoria) + (ties * empate);
}

// Desafio 6
function highestCount(n) {
let maior = Math.max.apply(null, n);
let contador = 0
for (let index = 0; index < n.length; index++) {
  let element = n[index];
  if(element === maior){
  contador++  
  } 
}return contador
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dcat1;
  if (cat1 < mouse) {
    dcat1 = mouse - cat1;    
  } else{
    dcat1 = cat - mouse;
  }
  let dcat2 = cat2 - mouse;
  if (cat2 < mouse) {
    dcat2 = mouse - cat2;    
  } else{
    dcat2 = cat - mouse;
  }
  if (dcat1 < dcat2){
    return "cat1";
  } else if (dcat1 > dcat2){
    return "cat2"
  } else {
    return "os gatos trombam e o rato foge"
  }
}



// Desafio 8
function fizzBuzz(n) {
let fizzBuzz = [];
n.forEach(element => {
  if (element % 3==0 && element % 5==0) {
    fizzBuzz.push("fizzBuzz");
  } else if (element % 3==0){
    fizzBuzz.push("fizz");
  } else if (element % 5==0){
    fizzBuzz.push("buzz");
  }
    else{
      fizzBuzz.push("bug!")
    }
}); 
return fizzBuzz;
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
