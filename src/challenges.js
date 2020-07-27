// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2){
    return true;
  } else {
    return false;
  }
}
console.log("exercicio 1: " + compareTrue(false,true));

// Desafio 2
function calcArea(base,height) {
  var calculoArea= (base*height)/2;
  return calculoArea
}
console.log("exercicio 2: " + calcArea(10,20));

// Desafio 3
function splitSentence(str){
  var res = str.split(" ");
  return res
  }
  console.log("exercicio 3: " + splitSentence("Eu sou Tryber"));

// Desafio 4
function concatName (nomescompleto) {
  let nomes = nomescompleto[nomescompleto.length-1] +', '+ nomescompleto[0];
  return nomes;
}
  console.log("Exercicio 4: " + concatName(['veruska','lucas','lara']));
   

// Desafio 5
function footballPoints(wins,ties) {
  let vitorias = (3 * wins);
  let empate = (1* ties);
  let pontuacao = (vitorias + empate);
  return pontuacao
}
console.log("Exercicio 5: " + footballPoints(20,10));

// Desafio 6
function highestCount(numbers) {
  let maiornumero = numbers[0];
  let contagem = 0;
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > maiornumero) 
      maiornumero = numbers[i];
  }
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] === maiornumero){
    contagem +=1
    }
  }
  return contagem
}
console.log("Exercicio 6: " + highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let dist1 = 0;
  let dist2 = 0;
  if(mouse > cat1){
  dist1=mouse-cat1
  } else{
 dist1=cat1-mouse
 }
 if(mouse>cat2){
  dist2=mouse-cat2
  }else {
 dist2=cat2-mouse
  }
  if(dist1>dist2){
   return "cat2"
 } else if(dist2>dist1){
   return "cat1"
  } else {
    return "os gatos trombam e o rato foge"
  }
}
console.log("Exercicio 7: " + catAndMouse(10,11,20))

// Desafio 8
function fizzBuzz(numbers){
  let resultado=[];
  for(i in numbers){
    if(numbers[i] % 3 === 0 && numbers[i] % 5 !== 0){
      resultado.push("fizz");
    }else if(numbers[i] % 5 === 0 && numbers[i] % 3 !== 0){
      resultado.push("buzz");
    }else if(numbers[i] % 3 === 0 && numbers[i] % 5 === 0){
      resultado.push("fizzBuzz");
    }else{
     resultado.push("bug!");
    }
  }
  return resultado;
}
console.log("Exercicio 8: " + fizzBuzz([2,15,7,9,45]));

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
