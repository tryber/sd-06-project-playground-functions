// Desafio 1
function compareTrue(valor1, valor2) {
  let resultado = false;
  if ((valor1 === true) && (valor2 === true)) {
    resultado = true;
  }
  else {  
    resultado;
  }
  return resultado;
}
console.log(compareTrue(true, true));


// Desafio 2
  let a = 10;
  let b = 5;
function calcArea(base, height) {
  let resultadoArea = (base * height) / 2;
  return resultadoArea;
} 
console.log(calcArea(a, b));


// Desafio 3
function splitSentence(frase) {
  let espaco = frase.split(' ');
  return espaco; 
}
console.log(splitSentence('Keila Julia Matheus')) //teste


// Desafio 4
let myArray = ['Keila', 'Matheus', 'Julia'] //teste p/ saber se está rodando 
function concatName(parametro) {
  let numberArray = parametro.length -1
  console.log(parametro[numberArray] + ", " + parametro[0]); //teste
  return(parametro[numberArray] + ", " + parametro[0]);
}
concatName(myArray); //teste


// Desafio 5
let vitorias = 5;
let empate = 5;
function footballPoints(wins, ties) {
  let resultadoVitoria = wins * 3;
  let resultadoEmpate = ties;
  console.log((resultadoVitoria) + (resultadoEmpate));
  return((resultadoVitoria) + (resultadoEmpate));
}
footballPoints(vitorias, empate);


// Desafio 6
let arrayNumeros = [8, 9, 3, 4, 11, 10, 11];

function highestCount(meuNumero) {
  let maiorNumero = 0;
  let contador = 0;
//for p/ saber qual o maior n°
  for(let i = 0; i < meuNumero.length; i += 1) { 
    if(maiorNumero <= meuNumero[i]) {
      maiorNumero = meuNumero[i];
    }
  } 
  console.log(maiorNumero);
//for p/ ver quantas vezes se repete 
  for(let j = 0; j <meuNumero.length; j += 1) {
    if(maiorNumero === meuNumero[j]) {
      contador += 1;
    }
  }
  console.log(contador);
  return(contador);
}
  highestCount(arrayNumeros);
 

// Desafio 7
let rato = 10;
let gato1 = 2;
let gato2 = 1;
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = Math.abs(mouse - cat1); //9
  let distanciaGato2 = Math.abs(mouse - cat2); //8
  if(distanciaGato1 > distanciaGato2) {
    console.log("cat2")
    return "cat2";
  
  } else if (distanciaGato2 > distanciaGato1) {
    console.log("cat1")
    return "cat1";

  } else {
    console.log("os gatos trombam e o rato foge");
    return('os gatos trombam e o rato foge');
  }
  }
  catAndMouse(rato, gato1, gato2);


// Desafio 8
let arrayNumbers = [2, 15, 7, 9, 45];
function fizzBuzz(array) {
  let retornoArray = [];

  for(let i = 0; i < array.length; i += 1) {
    if((array[i] % 3) === 0 && (array[i] % 5) ===0) {
      retornoArray.push("fizzBuzz") 

    } else if((array[i] % 5) ===0) {
      retornoArray.push("buzz")

    } else if ((array[i] % 3) === 0) {
      retornoArray.push("fizz") 

    } else {
      retornoArray.push("bug!");
    }
    
  }
  return retornoArray; 
}
console.log(fizzBuzz(arrayNumbers));


// Desafio 9
function encode(letrasVogais) {
  let vogaisNumeros = letrasVogais.replace(/a/gi, 1);
  vogaisNumeros = vogaisNumeros.replace(/e/gi, 2);
  vogaisNumeros = vogaisNumeros.replace(/i/gi, 3);
  vogaisNumeros = vogaisNumeros.replace(/o/gi, 4);
  vogaisNumeros = vogaisNumeros.replace(/u/gi, 5);

  return vogaisNumeros;
} 

function decode(numeros) {
  let trocandopNumeros = numeros.replace(/1/gi, 'a');
  trocandopNumeros = trocandopNumeros.replace(/2/gi, 'e');
  trocandopNumeros = trocandopNumeros.replace(/3/gi, 'i');
  trocandopNumeros = trocandopNumeros.replace(/4/gi, 'o');
  trocandopNumeros = trocandopNumeros.replace(/5/gi, 'u');

  return trocandopNumeros;
}

// Desafio 10
let teste10 = ["React", "Jest", "HTML", "CSS", "JavaScript"];
function techList(tech, name) {
  let array10 = [];
  let listaOrdenada = tech.sort()
  if(tech.length >= 1) {
    for(let i = 0; i < listaOrdenada.length; i += 1) {
      array10.push({
        tech: tech[i], 
        name: name
      })
    } return array10;
  } else {
    return "Vazio!"
  }
  
}
console.log(techList(teste10, "Keila"));
techList(teste10, "Keila"); 


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  
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
