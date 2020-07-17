// Desafio 1
function compareTrue(boolean1, boolean2) {
  return boolean1 && boolean2;
}

// Desafio 2
function calcArea(base, height) {
  return base * height/2;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let string = `${array[array.length -1]}, ${array[0]}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let maiorNumero = numbers[0]
  let contador = 0
  for(let i= 1; i < numbers.length; i++) {
    if(numbers[i] > maiorNumero){
      maiorNumero = numbers[i]
    };
  };
  for(n in numbers){
    if(numbers[n] === maiorNumero) {
      contador++
    };
  };
  return contador
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1;
  let distancia2;
  if(cat1 >= mouse){
    distancia1 = cat1 - mouse;
  } else {
    distancia1 = mouse - cat1;
  }
  if(cat2 >= mouse){
    distancia2 = cat2 - mouse;
  } else {
    distancia2 = mouse - cat2;
  }
  if(distancia1 > distancia2){
    return 'cat2';
  } else if (distancia2 > distancia1){
    return 'cat1';
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let arrayFinal = [];
  for(n in numbers) {
    if(numbers[n] % 3 === 0 && numbers[n] % 5 === 0) {
      arrayFinal[n] = "fizzBuzz";
    } else if (numbers[n] % 3 === 0 && numbers[n] % 5 != 0) {
      arrayFinal[n] = "fizz";
    } else if (numbers[n] % 3 != 0 && numbers[n] % 5 === 0){
      arrayFinal[n] = "buzz";
    } else {
      arrayFinal[n] = 'bug!';
    }
  }
  return arrayFinal
}

// Desafio 9
function encode(string) {
  const vogais = {
    a : 1,
    e : 2,
    i : 3,
    o : 4,
    u : 5,
  };
  let array = [];
  for(let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    if(char in vogais) {
      array.push(vogais[char]);
    } else {
      array.push([char]);
    }
  }
  let final = array.join('');
  return final;
}
function decode(fraseNumerada) {
  const numeros = {
    1 : 'a',
    2 : 'e',
    3 : 'i',
    4 : 'o',
    5 : 'u',
  };
  let array = [];
  for(let i = 0; i < fraseNumerada.length; i++) {
    let char = fraseNumerada.charAt(i);
    if(char in numeros) {
      array.push(numeros[char]);
    } else {
      array.push([char]);
    }
  }
  let final = array.join('');
  return final;
}

// Desafio 10
function techList(array, name) {
  let ordenado = array.sort();
  let final = [];
  for(i in ordenado){
    final.push({"tech" : ordenado[i], "name" : name});
  }
  if(array.length === 0){
    return "Vazio!";
  } else {
    return final;
  }
}

// Desafio 11
function generatePhoneNumber(numbers) {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let final = true;
  if(lineA > (lineB + lineC) || lineA < Math.abs(lineB - lineC)){
    final = false;
  }
  else if(lineB > (lineA + lineC) || lineB < Math.abs(lineA - lineC)){
    final = false;
  }
  else if(lineC > (lineB + lineA) || lineC < Math.abs(lineB - lineA)){
    final = false;
  }
  return final;
}

// Desafio 13
function hydrate(string) {
  let numbers = string.match(/\d+/g).map(Number);
  console.log(numbers)
  let soma = numbers[0]
  for(let i = 1; i < numbers.length; i++){
    soma += numbers[i]
  }
  return `${soma} copos de água`
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
