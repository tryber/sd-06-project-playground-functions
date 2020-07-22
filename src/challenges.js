// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true){
    return true;
  }
   else{
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let word = "";
  let stringArray = [];
  for (i in string){
    if (string[i] !== " "){
      word += string[i];
    }
    else if (string[i] == " "){
      stringArray.push(word);
      word = "";
    }
  }
  stringArray.push(word);
  return stringArray;
}


// Desafio 4
function concatName(array) {
  lastFirst = array[array.length-1] + ", " + array[0] ;
  return lastFirst;
}


// Desafio 5
function footballPoints(wins, ties) {
return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(arr) {
  // seu código aqui
    let highestNumber = arr[0];
    let count = 0

    for (let i = 0; i < arr.length; i+= 1){
      if (arr[i] > highestNumber) {
        highestNumber = arr[i];
      }
    }

    for (let i = 0; i < arr.length; i+= 1){

      if (arr[i] == highestNumber) {
        count += 1;}
     
      }
      return count
    }

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let turnPositiveArray = [cat1, cat2, mouse];
    for (let i in turnPositiveArray) {
      if (turnPositiveArray[i] < 0) {
      turnPositiveArray[i] *= -1;
    }
  }

  function closerToMouse(predator, prey) {
    if (predator > prey) {
      return predator - prey;
    } else if (prey > predator) {
      return prey - predator;
    }

    return 0;
  }

  if (closerToMouse(cat1, mouse) === closerToMouse(cat2, mouse)) {
    return 'cats gonna colide';
  } else if (closerToMouse(cat1, mouse) < closerToMouse(cat2, mouse)) {
    return 'cat1';
  }

  return 'cat2';
}

// Desafio 8
function fizzBuzz(arrayNumber) {
  let arrayString = [];
  for (i=0; i<arrayNumber.length; i++) {
    
    if ((arrayNumber[i] % 3 === 0)&& (arrayNumber[i] % 5 === 0)) {
    arrayString.push("fizzBuzz")
  }  //do if
  else if (arrayNumber[i] % 3 === 0) {
    arrayString.push("fizz")
}  // primeiro else if
else if (arrayNumber[i] % 5 === 0) {
  arrayString.push("buzz")
} // segundo else if
else {
  arrayString.push("bug!") 
} //else

  } // for
} // function

// Desafio 9
function encode() {
 
    let resultado = string.split('')

      for (let i = 0; i < resultado.length; i += 1) {

       if (resultado[i] === 'a') {
         resultado[i] = '1';
       } else if (resultado[i] === 'e') {
         resultado[i] = '2';
       } else if (resultado[i] === 'i') {
         resultado[i] = '3';
       } else if (resultado[i] === 'o') {
         resultado[i] = '4';
       } else if (resultado[i] === 'u') {
         resultado[i] = '5';
       }
      }
  
      let resultadoFinal = resultado.join('');
      return resultadoFinal;
    }

function decode() {

  let novaString = '';

  for (let caracter in string) {

    if (string[caracter] === '1') {
      novaString += 'a';
    } else if (string[caracter] === '2') {
      novaString += 'e';
    } else if (string[caracter] === '3') {
      novaString += 'i';
    } else if (string[caracter] === '4') {
      novaString += 'o';
    } else if (string[caracter] === '5') {
      novaString += 'u';
    } else {
      novaString += string[caracter];
    }
  }

  return novaString;


}

// Desafio 10
function techList(tecArray, nameUser) {
  if (tecArray.length === 0) {
    return 'The array is empty';
  }

  tecArray.sort();

  let newTecArray = [];

   for (let i = 0; i < tecArray.length; i += 1) {
    let object = {
      tech: tecArray[i],
      name: nameUser,
    };
    newTecArray.push(object);
  }
  return newTecArray;
}

// Desafio 11
function generatePhoneNumber() {

    let isValidNumber = [];
      if (array.length !== 11){
      return "Array de tamnanho incorreto";
    
      let dddArray = [];
        for (let index = 0; index <=10; index +=1){
          let firstPart = [];
            for (let index = 2; index <=6; index +=1){
              firstPart.push(array[index]);
    }
    
    
    let secondPart = [];
    for (let index = 7; index <=10; index +=1){
      secondPart.push(array[index]);
    }
    }
    
    let dddFormated = dddArray.join("");
    let firstPartFormatted = firstPartFormatted.join("");
    let secondPartFormatted = secondPartFormatted.join("");
    let formattedNumber = "(" +dddFormated+") "+ firstPartFormatted + "-" + secondPartFormatted;
    return formattedNumber;
    }
    let phone = [3, 1, 9, 9, 9, 9, 9, 0, 0, 0, 0];
    console.log(generatePhoneNumber(phone));
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