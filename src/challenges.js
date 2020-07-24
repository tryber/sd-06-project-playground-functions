// Desafio 1
function compareTrue(value1, value2) {
  if(value1==true && value2==true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTriang;
  areaTriang = (base*height)/2;
  return areaTriang;
}

// Desafio 3
function splitSentence(string) {
  let arrayString = [];
  arrayString = string.split(" ");
  return arrayString;
}

// Desafio 4
function concatName(name1) {
  let n = name1.length-1;
  let name2 = name1[n] +", "+ name1[0];
  return name2;
}


// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(arra) {
let higherNumber = arra[0];
let qtdNumber = 0;
let bigger = 0;

  for(let index = 0; index <= arra.length -1; index +=1 ){
   if(arra[index]>higherNumber){
     bigger = arra[index];
   } 
   if(higherNumber == arra[index]){
     qtdNumber += 1;
   }
  }
  return qtdNumber;
  
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let difPosition1 = Math.abs(mouse - cat1);
  let difPosition2 = Math.abs(mouse - cat2);
  if(difPosition1 < difPosition2){
    return "cat1";
  }else if(difPosition2 < difPosition1){
    return"cat2";
  }else{
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let array2 = [];
  for(let index = 0 ; index <= array.length-1; index += 1){
    if((array[index] % 3 == 0) && (array[index] % 5 == 0)){
      array2[index]= "fizzBuzz";
    }else if((array[index] % 3 == 0) && (array[index] % 5 != 0)){
      array2[index]=  "fizz";
    }else if((array[index] % 3 != 0) && (array[index] % 5 == 0)){
      array2[index]= "buzz";
    }else{
      array2[index]=  "bug!";
    }
  }
return array2;
}

// Desafio 9
function encode(phrase) {
  let newPhrase1 = "";
  for(let index = 0; index <= phrase.length -1 ; index +=1){
    if(phrase[index] == 'a'){
      newPhrase1 += "1";
    }else if(phrase[index] == 'e'){
      newPhrase1 += "2";
    }else if(phrase[index] == 'i'){
      newPhrase1 += "3";
    }else if(phrase[index] == 'o'){
      newPhrase1 += "4";
    }else if(phrase[index] == 'u'){
      newPhrase1 += "5";
    }else{
      newPhrase1 += phrase[index];
    }
  }
  
  return newPhrase1;
}

function decode(phrase) {
  let newPhrase1 = "";
  for(let index = 0; index <= phrase.length -1 ; index +=1){
    if(phrase[index] == '1'){
      newPhrase1 += "a";
    }else if(phrase[index] == '2'){
      newPhrase1 += "e";
    }else if(phrase[index] == '3'){
      newPhrase1 += "i";
    }else if(phrase[index] == '4'){
      newPhrase1 += "o";
    }else if(phrase[index] == '5'){
      newPhrase1 += "u";
    }else{
      newPhrase1 += phrase[index];
    }
  }
  
  return newPhrase1;
}


// Desafio 10
function techList(techno1, name) {
  let techno2 ={
    tech: "",
    nome: "",
  };
  for(let index = 0; index <= techno1.length-1; index+=1){
  
  }

    return techno2[indice];
  
}

// Desafio 11
function generatePhoneNumber(possiblePhone) {
  let phoneNumber = "(";
  let count = 1;
  let possibleNumberClone = possiblePhone.slice(); //slice copia array sem precisar de um for
  possibleNumberClone.sort(); //sort coloca array em ordem crescente 
  if(possiblePhone.length != 11 ){
    return "Array com tamanho incorreto."
  }else {
    
    for(let index = 0; index <= possibleNumberClone.length -1 ; index+= 1){
      if(possibleNumberClone[index] == possibleNumberClone[index + 1]){  //compara a possição index com a posição da frente
        count+=1;
        if(count >=3){
          return "não é possível gerar um número de telefone com esses valores"
        }
      }else{
        count = 1;
      }
      
    }

  for(let index = 0; index <= possiblePhone.length -1 ; index+= 1){
    if((possiblePhone[index] < 0) || (possiblePhone[index] > 9)){
      return "não é possível gerar um número de telefone com esses valores"
   }else if(index == 2){
      phoneNumber += ")"
      phoneNumber += possiblePhone[index];
   }else if(index == 7){
      phoneNumber += "-"
      phoneNumber += possiblePhone[index];
    }else{
      phoneNumber += possiblePhone[index];
    }

  }
}
return phoneNumber;
}
let tel = [1, 2, 3, 3, 5, 3, 7, 8, 9, 0, 1];
console.log(generatePhoneNumber(tel));
//Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], generatePhoneNumber deverá retornar (12) 34567-8901.
//Caso algum dos números da array seja menor que 0-ok, maior que 9 ou se repita 3 vezes ou mais, generatePhoneNumber deverá retornar a string "não é possível gerar um número de telefone com esses valores".

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
 let sumSides1 = lineA + lineB;
 let sumSides2 = lineA + lineC;
 let sumSides3 = lineB + lineC;
 let dif1 = Math.abs(lineA - lineB);
 let dif2 = Math.abs(lineA - lineC);
 let dif3 = Math.abs(lineB - lineC);
 let answer = false;

 if((lineA < sumSides3) && (lineB < sumSides2) && (lineC < sumSides1)&& (lineA > dif3) && (lineB > dif2) && (lineC > dif1)){
 answer = true;
 }
 return answer;
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
