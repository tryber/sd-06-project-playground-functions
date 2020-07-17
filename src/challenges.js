// Desafio 1
function compareTrue(aboolean, bboolean) {
  if (aboolean === true && bboolean === true) {
    return true
  }else{
  return false;
  }
}


// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;

  return result;
}

// Desafio 3
function splitSentence(word) {
  let text = word.split(' ',5)
  return text;
}

// Desafio 4
function concatName(numbers) {
  let concatenado = '';
  for (let i = 0; i < numbers.length; i += 1) {
    concatenado = numbers[numbers.length-1] +", "+ numbers[0];
  }
  return concatenado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosTotais = wins * 3 + ties;
  return pontosTotais
}

// Desafio 6
function highestCount(numbers) {
	// seu código aqui
	let highNum = numbers[0];
	let repeticao = 0;
	for (let index = 0; index < numbers.length; index += 1) {
	  if (numbers[index] > highNum) {
		highNum = numbers[index];
	  }
	}
	for (let index = 0; index < numbers.length; index += 1) {
	  if (highNum == numbers[index]) {
		repeticao += 1;
	  }
	}
	return repeticao;
  }

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for(let index in numbers){
    if(numbers[index] % 3 === 0){
      result.push("fizz");
    }else if (numbers[index] % 5 === 0){
      result.push("buzz");
    }else if (numbers[index] % 3 === 0 || numbers[index] / 5 === 0) {
      result.push("fizzBuzz");
    }else{
      result.push("bug!");
    }
  }
  return result
}

// Desafio 9
function encode(word) {
  // seu código aqui
  let newLetter = "";
  for ( let i = 0; i < word.length; i = i + 1) {
    switch (word[i]) {
      case 'a':
        newLetter = newLetter + '1';
        break;
      case 'e':
        newLetter = newLetter + '2';
        break;
      case 'i':
        newLetter = newLetter + '3';
        break;
      case 'o':
        newLetter = newLetter + '4';
        break;
      case 'u':
        newLetter = newLetter + '5';
        break;
      default:
        newLetter = newLetter + word[i];
    }
  }
  return newLetter;
}

function decode(word) {
  let newLetter = "";
  for ( let i = 0; i < word.length; i = i + 1) {
    switch (word[i]) {
      case '1':
        newLetter = newLetter + 'a';
        break;
      case '2':
        newLetter = newLetter + 'e';
        break;
      case '3':
        newLetter = newLetter + 'i';
        break;
      case '4':
        newLetter = newLetter + 'o';
        break;
      case '5':
        newLetter = newLetter + 'u';
        break;
      default:
        newLetter = newLetter + word[i];
    }
  }
  return newLetter;
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
