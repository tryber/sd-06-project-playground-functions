// Desafio 1
function compareTrue(a,b) {
  if (a === true && b === true){
    return true
  }else{
    return false
  }
}

// Desafio 2
function calcArea(base,height) {
  var area = (base * height)/2
  return area
}

// Desafio 3
function splitSentence(frase) {
  var strSplit = frase.split(" ")
  return strSplit
}

// Desafio 4
function concatName(array){
  primeiroUltimo= array[array.length-1] + ', ' + array[0];
  return primeiroUltimo
}

// Desafio 5
function footballPoints(a, b) {
  wins = a * 3
  ties = b
  score = wins + ties
  return score
}

// Desafio 6
function highestCount(array) {
  maior = Math.max.apply(null, array);
  count = 0
  for (i in array) {
      if (array[i] === maior){
          count += 1
      }
  }
  return count
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((mouse - cat1) == (cat2 - mouse)){
      return 'os gatos trombam e o rato foge'
  }
  else if((cat2 - mouse) < cat1){
      return 'cat2'
  }else {
  ((cat1 - mouse) < cat2)
      return "cat1"
  }
}

// Desafio 8
function fizzBuzz(array) {
  let list = []
  for (let i in array) {
      if (array[i] % 5 === 0 && array[i] % 3 === 0){
         list.push ("fizzBuzz");
      }
      else if (array[i] % 5 === 0) {
          list.push ("buzz");
      }
      else if (array[i] % 3 === 0){
          list.push ("fizz");
      }else{
          list.push ("bug!");
      }
      }
  return list
  }

// Desafio 9
function encode(str) {
  for (i in str) {   
  str2 = str.replace(/a/g, 1)
  .replace(/e/g, 2)
  .replace(/i/g, 3)
  .replace(/o/g, 4)
  .replace(/u/g, 5)
  }
  return str2
}

function decode(num) {
  for (i in num) {   
      num2 = num.replace(/1/g, 'a')
      .replace(/2/g, 'e')
      .replace(/3/g, 'i')
      .replace(/4/g, 'o')
      .replace(/5/g, 'u')
      }
      return num2 
}


// Desafio 10
function techList(tech, name){
  let techSort = tech.sort();
  let lista = [];
  for(i in techSort){
      lista.push({tech: techSort[i], name: name})
      }
  if(lista.length === 0){
      return 'Vazio!';
  }else{
      return lista
  }
}

// Desafio 11
function condiction(array){
  let count = 0
  let check = false;

  for (let i in array) {
    for (let j in array) {
    if (array[i] === array[j]){
      count += 1
    }
    if (array[i] < 0 || array[i] > 9) {
      check = true;
    }
    }
    if (count >=3){
      check = true;
    }else{
      count = 0;
    }
  }
  return check;
}

function generatePhoneNumber(array){
  var phoneNumber = '('
  if (array.length != 11){
    return "Array com tamanho incorreto."
  }
    for (let i = 0; i < array.length; i++) {
      phoneNumber += (`${array[i]}`);
      if (i === 1){
        phoneNumber += ') ';
      }
      if (i === 6){
        phoneNumber += '-';
      }
      if(condiction(array) === true){
        return 'não é possível gerar um número de telefone com esses valores'
      }
    }
    return phoneNumber
  }

// Desafio 12
function triangleCheck(a,b,c) {
  let absA = Math.abs(a);
  let absB = Math.abs(b);
  let absC = Math.abs(c);
  if((a==0 || b==0 || c==0) || (a+b<c || a+c<b || b+c<a)){
    return false

  }else{
    return true
  }
}

// Desafio 13
function hydrate(string){
    let num = string.match(/\d+/g)
    soma = 0
    for(i in num){
      soma = soma + Number(num[i])
    }
    if(soma <= 1){
        return soma + " copo de água"
    }else{
        return soma + " copos de água"
    }
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
