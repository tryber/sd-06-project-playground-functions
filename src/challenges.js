// Desafio 1 - testando um commit

function compareTrue(a, b) {
  if ((a === true) && (b === true)) {
    return true;
  }
    return false;
}
let a = false;
let b = true;
let resultado = compareTrue(a, b);
console.log(resultado);

// Desafio 2 -  Área do triângulo

function calcArea(base, altura) {
  return ((base * altura) / 2);
}
let area = calcArea(15, 4);
console.log(area);

// Desafio 3 - Go Trybe
function splitSentence(nome) {
  let verifica = nome.split(' ');
  return (verifica);
}
let resultSplit = splitSentence('Go Trybe');
console.log(resultSplit);

// Desafio 4 - Concatenação de strings

function concatName(arrayNomes)){
 return arrayPrimeiroUltimo = (arrayNomes[arrayNomes.length - 1]) + ', ' + arrayNomes[0];
}
let arrayNomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
concatenarNomes = concatName(arrayNomes);
console.log(concatenarNomes);

// Desafio 5 - Pontos no futebol
function footballPoints(wins, ties) {
  let pontuacao = (wins * 3) + (ties * 1);
  return pontuacao;
}
pontuação = footballPoints(3,2);
console.log(pontuação);

// Desafio 6
/* Repetição do maior número
Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.
Exemplo: caso o parâmetro de highestCount seja uma array com valores [9, 1, 2, 3, 9, 5, 7], a função deverá retornar 2, que é a quantidade de vezes que o número 9
(maior número do array) se repete. */

function highestCount(lista) {
let maior = lista[0];
for (let indice of lista){
  if (indice > maior){
     maior = indice;
    }
  }
let contador = 0;
  for (let indice of lista){
    if (indice === maior){
      contador += 1;
    }
  }
  return contador;
}
let numbers = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(numbers));


// Desafio 7 -  Caça ao rato

function catAndMouse(mouse, cat1, cat2) {
   let positioncat1 = Math.abs(cat1 - mouse);
   let positioncat2 = Math.abs(cat2 - mouse);
   let positon;
   if (positioncat1 > positioncat2) {
      position = "cat2";
   } else if (positioncat1 < positioncat2) {
     position = "cat1";
   } else {
    position = "os gatos trombam e o rato foge";
   }
   return position;
  }
  catAndMouse(45,30,30);
  console.log(position);

// Desafio 8 - FizzBuzz
let arrayNumeros=[2, 3, 5, 15];
  function fizzBuzz(arrayNumeros) {
    let newArrayNumeros=[];
    for ( let indice in arrayNumeros ){
      if (arrayNumeros[indice] % 3 === 0 && arrayNumeros[indice] % 5 === 0) {
        newArrayNumeros[indice] = 'fizzBuzz';
      } else if(arrayNumeros[indice] % 3 === 0) {
        newArrayNumeros[indice] = 'fizz';
      } else if (arrayNumeros[indice] % 5 === 0) {
        newArrayNumeros[indice] = 'buzz';
      } else {
        newArrayNumeros[indice] = 'bug!';
      }
    }
    return newArrayNumeros;
  }
    console.log(fizzBuzz(arrayNumeros));

// Desafio 9
/* Codifique e Decodifique
Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro, deverá trocar
 todas as vogais minúsculas por números, de acordo com o formato a seguir:
a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
Ou seja, caso o parâmetro de encode seja "hi there!", o retorno deverá ser "h3 th2r2!".
A segunda função deverá se chamar decode e faz o contrário de encode - ou seja, recebe uma string contendo números no lugar
de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode
  seja "h3 th2r2!", o retorno deverá ser "hi there!"). */

function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
/* - Lista de tecnologias
Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro chamado name com um nome.
Para cada tecnologia no array, crie um objeto com a seguinte estrutura:
{
  tech: "NomeTech",
  nome: name
}
Estes objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo tech no objeto.
A saída da sua função deve ser uma lista de objetos ordenada pelo campo tech dos objetos com o formato acima.
Exemplo:
Entradas da função:
["React", "Jest", "HTML", "CSS", "JavaScript"]
"Lucas"
// Saída:
[
  {
    tech: "CSS",
    name: "Lucas"
  },
  {
    tech: "HTML",
    name: "Lucas"
  },
  {
    tech: "JavaScript",
    name: "Lucas"
  },
  {
    tech: "Jest",
    name: "Lucas"
  },
  {
    tech: "React",
    name: "Lucas"
  }
]
Caso o array venha vazio sua função deve retornar 'Vazio!' */

function techList() {
  // seu código aqui
}

// Desafio 11
/* Número de telefone
Crie uma função chamada generatePhoneNumber que receba uma array com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços.

Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], generatePhoneNumber deverá retornar (12) 34567-8901.

Se a função receber um array com tamanho diferente de 11, a mesma deve retornar "Array com tamanho incorreto.".

Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, generatePhoneNumber deverá retornar a string
 "não é possível gerar um número de telefone com esses valores" */
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
/* Condição de existência de um triângulo
Um triângulo é composto de três linhas: lineA, lineB e lineC. Crie uma função chamada triangleCheck que deverá receber as três linhas como parâmetro e retornar se é
possível formar um triângulo com os valores apresentados de cada linha
Para tanto, tenha em mente algumas considerações:
Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor
absoluto da diferença entre essas medidas.
Para obter o valor absoluto de um número em JavaScript, pesquise pela função Math.abs.
O retorno da sua função deverá ser um booleano.
Exemplo: o retorno de triangleCheck(10, 14, 8) deverá ser true */


function triangleCheck(lineA, lineB, lineC) {
  if (lineA < Math.abs(lineB + lineC) && lineA > Math.abs(lineB - lineC)){
    return true;
  }else if(lineB < Math.abs(lineA + lineC) && lineB > Math.abs(lineA - lineC)){
    return true;
  }else if(lineC < Math.abs(lineA + lineB) && lineC > Math.abs(lineA - lineB)){
    return true;
  }
  return false;
}
 desafio = triangleCheck(1,2,2);
console.log(desafio);

// Desafio 13
/* Bem vindo ao Bar da Trybe!
Segundo as regras desse bar, a cada bebida deve-se beber um copo de água para que não se tenha ressaca.
Crie a função hydrate que recebe uma string, e retorne a sugestão de quantos copos de água você deve beber. Exemplos:
String recebida:
  "1 cerveja"
String retornada:
  "1 copo de água"
String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"
String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"
Notas
Para simplificar, consideraremos que qualquer coisa com um número à frente é uma bebida e que a sua string sempre virá com o formato quantidade (em número) + tipo da bebida.
O número na frente de cada bebida está no intervalo entre 1 e 9.
Dica: pesquise por algo similar a get all integers inside a string js. */

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
