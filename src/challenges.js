// Desafio 1
function compareTrue(valor1,valor2) {
  // seu código aqui
  if(valor1 != valor2){
    console.log(false)
}else{console.log(true)}
}

compareTrue (93663639,93663639)


// Desafio 2
function calcArea(base, height) {
  let areaTriangulo  = (base*height)/2
  return areaTriangulo}

console.log(calcArea(2,3))
// Desafio 3
// seu código aqui
function splitSentence(string) {
  
  return string.split(" ");
}
console.log(splitSentence("todos amigos"))

// Desafio 4
function concatName(array) {
  // seu código aqui
  let arrayResposta=[]
  for (let i=array.length-1; i>=0;i--){
    if(i==array.length-1 || i==0){
    arrayResposta.push(array[i])
    }
  }return arrayResposta
  
}
console.log(concatName(["Lucas","João","Pedro"]))
// Desafio 5
function footballPoints(win,ties) {
  // seu código aqui
  let somaPontuacao =(win*3)+ties
  return somaPontuacao
}console.log(footballPoints(3,1))

// Desafio 6
function highestCount() {
  // seu código aqui
 
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))
// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
if(mouse-cat1 > mouse-cat2 ){
  return "cat2"}
else if(
  mouse-cat1 < mouse-cat2)
  {return "cat1"
}else{return "os gatos trombam e o rato foge"}
}

console.log(catAndMouse(2,1,3))
// Desafio 8
function fizzBuzz() {
  // seu código aqui

}
console.log(fizzBuzz())

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
