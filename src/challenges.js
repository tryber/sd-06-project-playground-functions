// Desafio 1
function compareTrue(valor1,valor2) {
  // seu código aqui
  if(valor1==true && valor2==true){
   return true
  } 
  else{return false}
}

console.log(compareTrue (93663639,93663639))


// Desafio 2
function calcArea(base, height) {
  let areaTriangulo  = (base*height)/2
  return areaTriangulo}


// Desafio 3
// seu código aqui
function splitSentence(string) {
  
  return string.split(" ");
}


// Desafio 4
function concatName(array) {
  // seu código aqui
  let lastOne
  let first
  for (let i=array.length-1; i>=0;i--){
    if(i==array.length-1){
    lastOne= array[i]
    }
    else if(i==0){
    first=array[i]
    }
  }return lastOne+", "+first
  
}

// Desafio 5
function footballPoints(win,ties) {
  // seu código aqui
  let somaPontuacao =(win*3)+ties
  return somaPontuacao
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let countHighest=0
 for ( let i=0;i<array.length;i++){
  let maiorNumero=array[0]
  
   if( array[i]<array[i+1]){
     maiorNumero=array[i+1]
   }
   if(i==array.length-1){
     for (let k=0;k<array.length;k++){
       if (array[k]==maiorNumero){
         countHighest=countHighest+1
       }
     }
   }
 }
 return countHighest
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
if(Math.abs(mouse-cat1) > Math.abs(mouse-cat2) ){
  return "cat2"}
else if(
  Math.abs(mouse-cat1) < Math.abs(mouse-cat2))
  {return "cat1"
}else{return "os gatos trombam e o rato foge"}
}


// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let arrayResposta =[]
for(let i=0;i<array.length;i++){
  if(array[i]%5==0 && array[i]%3==0){
    arrayResposta.push("fizzBuzz")
  }
  else if(array[i]%3==0 && array[i]%5!=0 ){
    arrayResposta.push("fizz")
  }
  else if (array[i]%5==0 && array[i]%3!=0){
    arrayResposta.push("buzz")
  }
  else { arrayResposta.push("bug!")}
}return arrayResposta
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
