 // Desafio 1
  function compareTrue(a,b) {
  
   if ( a && b) {
    return true;}
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
   let area = (base*height)/2;
   return area;
}

// Desafio 3

function splitSentence(phrase) {
  return phrase.split(" ");
  
}

// Desafio 4 
function concatName(string) {
  
  let first = string[0];
  let last = string[string.length -1];
  let join = last + ', ' + first;
  
  return join;
  
}

// Desafio 5

function footballPoints(wins, ties) {

  let result = (wins * 3) + ties;
  return result;
}

// Desafio 6 
 
function highestCount(array) {  
   
  let position = 0;
  let cont = 0;

for (let newArray in array){ 
  if (array[position] < array[newArray]){   
    position = newArray;
  }
}
for (let newArray in array){
  if (array[position] == array[newArray]){   
    cont = cont +1;
  }
}
return cont;
}

// Desafio 7 

function catAndMouse(mouse, cat1, cat2) {
  
 let distance1 = cat1 - mouse;
 let distance2 = cat2 - mouse;

 if (distance1<0){
   distance1 = -(distance1);}
 if (distance2<0){
   distance1 = -(distance1);
 };

if (distance1 < distance2) {
  return 'cat1'; 
}else if (distance1> distance2){
  return 'cat2';
}else {
   return 'os gatos trombam e o rato foge';
}
}



// Desafio 8 

function fizzBuzz(arrayNew) {
  
  let newFizz = [];

  for (i = 0; i<arrayNew.length; i +=1 ){
    if ((arrayNew[i]%3==0) && (arrayNew[i]%5!==0)){
      newFizz[i] = 'fizz';
    }else if ((arrayNew[i]%5==0) && (arrayNew[i]%3!==0)){
      newFizz[i] = 'buzz';
    }else if ((arrayNew[i]%3==0) && (arrayNew[i]%5==0)){
      newFizz[i] = 'fizzBuzz';
    }else {
      newFizz[i] = 'bug!';
    }
  }
return newFizz;
}


// Desafio 9
/*Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

Ou seja, caso o parâmetro de encode seja "hi there!", o retorno deverá ser "h3 th2r2!".

A segunda função deverá se chamar decode e faz o contrário de encode - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode seja "h3 th2r2!", o retorno deverá ser "hi there!").*/

function encode(vowels) {
    
    let newVowels = '';
    newVowel = vowels.split('');
    
    for (let i = 0; i < newVowels.length; i+= 1){
     if (newVowels[i]==='a'){
        newVowels[i]= '1';
     }else if (newVowels[i]==='e'){
        newVowels[i]= '2';
     }else if (newVowels[i]==='i'){
        newVowels[i]= '3';
     }else if (newVowels[i]==='o'){
        newVowels[i]= '4';
     }else if (newVowels[i]==='u'){
        newVowels[i]= '5';
     }else {
        newVowels[i]= newVowels[i];
     }
}
  return newVowels.join('');
}


function decode(noVowels) {
  
  let newVowelsNo = '';
  newVowelsNo = noVowels.split('');
    
  for (let i = 0; i < newVowelsNo.length; i+= 1){
   if (newVowelsNo[i]==='1'){
      newVowels[i]= 'a';
   }else if (newVowelsNo[i]==='2'){
      newVowelsNo[i]= 'e';
   }else if (newVowelsNo[i]==='3'){
      newVowelsNo[i]= 'i';
   }else if (newVowelsNo[i]==='4'){
      newVowelsNo[i]= 'o';
   }else if (newVowelsNo[i]==='5'){
      newVowelsNo[i]= 'u';
   }else {
      newVowelsNo[i]= newVowelsNo[i];
   }
}
return newVowelsNo.join('');
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

