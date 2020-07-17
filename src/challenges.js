// Desafio 1
function compareTrue(para1,para2) {
  if (para1 === true && para2 === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
}

// Desafio 4
function concatName(names) {
  let resultadoNome = "";
  resultadoNome = names[names.length -1] + ", " + names[0];
  return resultadoNome
}

// Desafio 5
function footballPoints(wins,ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let highNumber = numbers[0];
  let count = 0;
  for (i in numbers){
    if (highNumber < numbers [i]){
      highNumber = numbers[i];
    }
  }
  for (j in numbers){
    if (numbers[j] === highNumber){
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  if (mouse > cat1){
    distanciaCat1 = mouse - cat1;
  } else {
    distanciaCat1 = cat1 - mouse;
  }
  if (mouse > cat2){  
    distanciaCat2 = mouse - cat2;
  } else {
    distanciaCat2 = cat2 - mouse;
  }
  if (distanciaCat1 > distanciaCat2){
    return ("cat2");
  } else if (distanciaCat1 < distanciaCat2){
    return ("cat1");
  } else {
    return ("os gatos trombam e o rato foge");
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let arrayFinal = [];
  for (i in numbers){
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0){
      arrayFinal.push("fizzBuzz");
    } else if (numbers[i] % 5 === 0){
      arrayFinal.push("buzz");
    } else if (numbers[i] % 3 === 0){
      arrayFinal.push("fizz");
    } else {
      arrayFinal.push("bug!");
    }
  }
  return arrayFinal;
}

// Desafio 9
function encode(param1) {
  param1 = param1.replace(/a/g, "1");
  param1 = param1.replace(/e/g, "2");
  param1 = param1.replace(/i/g, "3");
  param1 = param1.replace(/o/g, "4");
  param1 = param1.replace(/u/g, "5");

  return param1;
}

function decode(param2) {
  param2 = param2.replace(/1/g, "a");
  param2 = param2.replace(/2/g, "e");
  param2 = param2.replace(/3/g, "i");
  param2 = param2.replace(/4/g, "o");
  param2 = param2.replace(/5/g, "u");

  return param2;
}

// Desafio 10
function techList(tech,name) {
  let resultado = [];
  if (tech.length !== 0){
    tech.sort();  
    for (i in tech){
        resultado.push({"tech": tech[i], "name": name})
    }
  } else {
    resultado = "Vazio!"
  }
  return resultado
}

// Desafio 11
function generatePhoneNumber(cellnumber) {
  let resultado = 0;
  let count = 0;
  let repetido = cellnumber[0];

  for (let k in cellnumber){
    for (let j in cellnumber){
      if (repetido === cellnumber[j] && count < 3){
        count += 1;
      } else if (count >= 3) {
        break
      }
    }
    if (count >= 3){
      break
    } else {
    repetido = cellnumber[k];
    count = 0;
  }
  } 


  if (cellnumber.length !== 11){
    resultado = "Array com tamanho incorreto.";
  } else {
    for (i in cellnumber){
      if (cellnumber[i] > 9 || cellnumber[i] < 0 || count === 3){
        resultado = "não é possível gerar um número de telefone com esses valores";
        break
      } else {
        resultado = "(" + cellnumber[0] + cellnumber[1] + ") " + cellnumber[2] + cellnumber[3] + cellnumber[4] + cellnumber[5] + cellnumber[6] + "-" + cellnumber[7] + cellnumber[8] + cellnumber[9] + cellnumber[10];
      }
    }
  }
  return resultado;
}

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  let check = false;
  let lado1 = false;
  let lado2 = false;
  let lado3 = false;

  if (lineA > (Math.abs(lineB - lineC)) && lineA < lineB + lineC){
    lado1 = true;
  } else if (lineB > (Math.abs(lineA - lineC)) && lineB < lineA + lineC){
    lado2 = true;
  } else if (lineC > (Math.abs(lineB - lineA)) && lineC < lineB + lineA){
    lado3 = true;
  }
  if (lado1 === lado2 === lado3 === true){
    check = true;
  }
  return check;
}

// Desafio 13
function hydrate(bebidas) {
  let numbers = bebidas.match(/\d+/g);
  let soma = 0;
  for (i in numbers){
    soma += Number(numbers[i]);
  }
  return soma + " copo de água"
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
