// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(nomeCompleto) {
  let nome = nomeCompleto[nomeCompleto.length-1] + ', ' + nomeCompleto[0];
  return nome;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3)+ties;
}

// Desafio 6
function highestCount(numeros) {
  let maior = numeros[0];
  let cont = 0;
  for(index in numeros){
    if(numeros[index] > maior){
      maior = numeros[index];
    }
  }
  for(index in numeros){
    if(maior === numeros[index]){
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = 0;
  let dist2 = 0;
  if(mouse < cat1){
    dist1 = cat1 - mouse;
  }else{
    dist1 = mouse - cat1;
  }
  if(mouse < cat2){
    dist2 = cat2 - mouse;
  }else{
    dist2 = mouse - cat2;
  }
  if(dist1 < dist2){
    return "cat1";
  }else
  if(dist2 < dist1){
    return "cat2";
  }else{
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let result =[];
  for(index in numeros){
    if(numeros[index] % 3 === 0 && numeros[index] % 5 !== 0){
      result.push("fizz");
    }else
    if(numeros[index] % 3 !== 0 && numeros[index] % 5 === 0){
      result.push("buzz");
    }else
    if(numeros[index] % 3 === 0 && numeros[index] % 5 === 0){
      result.push("fizzBuzz");
    }else{
      result.push("bug!");
    }
  }
  return result;
}

// Desafio 9
function encode(str) {
  let aux = str.split('');
  for(index in aux){
    if(aux[index] === 'a'){
      aux[index] = '1';
    }else
    if(aux[index] === 'e'){
      aux[index] = '2';
    }else
    if(aux[index] === 'i'){
      aux[index] = '3';
    }else
    if(aux[index] === 'o'){
      aux[index] = '4';
    }else 
    if(aux[index] === 'u'){
      aux[index] = '5';
    }
  }
  str = '';
  for(index in aux){
    str += aux[index];
  }
  return str;
}
function decode(str) {
  let aux = str.split('');
  for(index in aux){
    if(aux[index] === '1'){
      aux[index] = 'a';
    }else
    if(aux[index] === '2'){
      aux[index] = 'e';
    }else
    if(aux[index] === '3'){
      aux[index] = 'i';
    }else
    if(aux[index] === '4'){
      aux[index] = 'o';
    }else 
    if(aux[index] === '5'){
      aux[index] = 'u';
    }
  }
  str = '';
  for(index in aux){
    str += aux[index];
  }
  return str;
}

// Desafio 10
function techList(techList, name) {
  if (techList.length === 0) {
    return 'Vazio!';
  }
  let tecnologias = [];
  techList.sort();
  for (index in techList) {
    let tech = techList[index];
    tecnologias.push({ tech, name });
  }
  return tecnologias;
}

// Desafio 11
function generatePhoneNumber(number) {
  let cont = 0;
  let numberFormat = '(';
  if(number.length !== 11){
    return "Array com tamanho incorreto.";
  }
  for(let i = 0; i < number.length; i += 1){
    if(i === 2){
      numberFormat += ') ' + number[i];
    }else
    if(i === 7){
      numberFormat += '-' + number[i];
    }else{
      numberFormat += number[i]
    }
    if(number[i] < 0 || number[i] > 9){
      return "não é possível gerar um número de telefone com esses valores";
    }
    for(let l = 0; l < number.length; l += 1){
      if(number[i] === number[l]){
        cont +=1;
      }
    }
    if(cont > 2){
      return "não é possível gerar um número de telefone com esses valores";
    }
    cont = 0;
  }
  return numberFormat;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if((Math.abs(lineB - lineC) > lineA || lineA > lineB + lineC) 
  || (Math.abs(lineA - lineC) > lineB || lineB > lineA + lineC) 
  || (Math.abs(lineB - lineA) > lineC || lineC > lineB + lineA)){
      return false;
    }else{
      return true;
    }
}


// Desafio 13
function hydrate(drinks) {
  let num = drinks.match(/\d+/g).map(Number);
  let cont = 0;
  for(index in num){
    if(parseInt(num[index]) < 1 || parseInt(num[index]) > 9){
      return 'número inválido!'
    }
    cont += parseInt(num[index]); 
  }
  if(cont === 1){
    return cont + " copo de água";
  }
  return cont + " copos de água";
}

console.log('Exercício 1: ' + compareTrue(true, true));

console.log('Exercício 2: ' + calcArea(30,30));

console.log('Exercício 3: ' + splitSentence('go Trybe'));

console.log('Exercício 4: ' + concatName(['Vagner','Pereira','de','Sousa']));

console.log('Exercício 5: ' + footballPoints(8,4));

console.log('Exercício 6: ' + highestCount([9, 1, 2, 3, 9, 5, 7]));

console.log('Exercício 7: ' + catAndMouse(10, 12, 8));

console.log('Exercício 8: ' + fizzBuzz([2, 15, 7, 9, 45]));

console.log('Exercício 9: ' + encode('hi there!'));

console.log('Exercício 9: ' + decode('h3 th2r2!'));

console.log('Exercício 10: ' + techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Vagner"));

console.log('Exercício 11: ' + generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

console.log('Exercício 12: ' + triangleCheck(10, 14, 8));

console.log('Exercício 13: ' + hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));



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
