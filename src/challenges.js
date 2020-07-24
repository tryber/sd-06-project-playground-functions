// Desafio 1
function compareTrue(valor1 , valor2){
  let resultado_boleano;
  if(valor1 && valor2){
    resultado_boleano = true;
  }
  else{
    resultado_boleano = false;
  }
  return resultado_boleano;
}

// Desafio 2
function calcArea(base, heigth) {
  let calculo_area;
  calculo_area = (base * heigth) / 2;
  return calculo_area;
}

// Desafio 3
function splitSentence(frase) {
  let resultado_split;
  resultado_split = frase.split(' ');
  return resultado_split;  
}

// Desafio 4
function concatName(arraystrings) {
  let resultado_strings;
  let primeiro = arraystrings[0];
  let ultimo = arraystrings[arraystrings.length-1].concat(", ");
  resultado_strings = ultimo.concat(primeiro);
  return resultado_strings;
}

// Desafio 5
function footballPoints(wins, ties) {
  let total_pontos = 0;
  total_pontos = wins*3 + ties*1;
  return total_pontos;
}

// Desafio 6
function highestCount(lista) {
  let maior = lista[0];
  for (let i = 0; i < lista.length; i++) {
    if ( lista[i] > maior ) {
        maior = lista[i];
     }
  }
  let contador = 0;
  for (let i = 0; i < lista.length; i++) {
     if(maior === lista[i]){
       contador = contador+1;
     }
  }
  return contador;
}

/// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1-mouse);
  let dist2 = Math.abs(cat2-mouse);
  let msg = "os gatos trombam e o rato foge";
  if (dist1<dist2){
    msg = "cat1";
  }else if (dist2<dist1){
    msg = "cat2";
  }
  return msg;
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for(let i=0; i<array.length; i++){
    let n = array[i];    
    if(n%3===0 && n%5===0){
      result.push('fizzbuzz');
    }else if (n%3===0){
      result.push('fizz');
    }else if (n%5===0){
      result.push('buzz');
    }else{
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(codigo) {
  let vogais = {'a':1, 'e':2,'i':3,'o':4,'u':5};
  code=[];
  for(let i=0; i<codigo.length; i++){
    let letra='';
    if(string[i] in vogais){
      letra = vogais[string[i]];
    }else
      letra = codigo[i];
    code.push(codigo);
  }
  return code.join('');
}
function decode(codigo) {
  let vogais = {'1':'a','2':'e','3':'i','4':'o','5':'u'};
  code=[];
  for(let i=0; i<codigo.length; i++){
    let letra='';
    if(codigo[i] in vogais){
      letra = vogais[codigo[i]];
    }else
      letra = codigo[i];
    code.push(letra);
  }
  return code.join('');
}

// Desafio 10
function techList(tech, name) {
  listaObjetos=[];
  for(let i=0; i<tech.length; i++){
    let tecnologia = { tech: tech[i], nome: name};
    listaObjetos.push(tecnologia);
  }
  return listaObjetos;
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
