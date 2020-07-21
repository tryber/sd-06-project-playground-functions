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

function encode(vowels) {
    
    let newVowels = '';
    newVowels = vowels.split('');
    
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
      newVowelsNo[i]= 'a';
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
function techList(tech, name) {
  
  let list = [];
  let newList = tech.sort();

  if (tech.length === 0){
    return "Vazio!"
  }else {
    for(let i = 0; i < newList.length; i += 1){
      list[i]={
        tech: newList[i],
        name: name,
      }
    }
  }
  return list;
}


// Desafio 11
function generatePhoneNumber(array) {
  let cont = 0;
  let confirm = false;
  let isPhone = array.length !== 11;
  if (isPhone) {
    return "Array com tamanho incorreto.";
  }
  for (let position = 0; position <= array.length; position += 1) {
    for (let j = 0; j < array.length; j++) {
      if (array[position] === array[j]) {
        cont += 1;
      }
      if (cont === 3) {
        confirm = true;
      }
    }
    cont = 0;
  }
  for (let position = 0; position <= array.length; position += 1) {
    if (array[position] < 0 || array[position] > 9 || confirm === true) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  let ddd = [];
  for (let index = 0; index <= 1; index += 1) {
    ddd.push(array[index]);
  }
  let firstNumbers = [];
  for (let indexFirst = 2; indexFirst <= 6; indexFirst += 1) {
    firstNumbers.push(array[indexFirst]);
  }
  let secondNumbers = [];
  for (let indexSecond = 7; indexSecond <= 10; indexSecond += 1) {
    secondNumbers.push(array[indexSecond]);
  }
  let dddFormatted = ddd.join("");
  let firstNumbersFormatted = firstNumbers.join("");
  let secondNumbersFormatted = secondNumbers.join("");
  let formattedNumber = "(" + dddFormatted + ") " + firstNumbersFormatted + "-" + secondNumbersFormatted;
  return formattedNumber;

}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

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

