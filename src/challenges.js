// Ore no Starto da!!
// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let split = string.split(" ");
  return split;
}

// Desafio 4
function concatName(array) {
  let lastFirst = array[array.length - 1] + ", " + array[0];
  return lastFirst
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let high = array [0];
  let repeat = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (high < array[i]) {
      high = array[i];
    }
  }
  for (i = 0; i < array.length; i += 1) {
    if (high === array[i]) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(cat1 - mouse);
  let positionCat2 = Math.abs(cat2 - mouse);

  if (positionCat1 < positionCat2) {
    return "cat1";
  } else if (positionCat2 < positionCat1) {
    return "cat2";
  }
  return "os gatos trombam e o rato foge";
}

// Desafio 8
function fizzBuzz(array) {
  let fbzz = [];
  for (i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      fbzz.push("fizzBuzz");
    } else if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      fbzz.push("fizz");
    } else if (array[i] % 5 === 0 && array[i] % 3 !== 0) {
      fbzz.push("buzz");
    } else {
      fbzz.push("bug!");
    }
  }
  return fbzz;
}

// Desafio 9
function encode(string) {
  let code = "";
  for (let i = 0; i < string.length; i += 1) {
    if ( string[i] === "a") {
      code += "1";
    } else if ( string[i] === "e") {
      code += "2";
    } else if ( string[i] === "i") {
      code += "3";
    } else if ( string[i] === "o") {
      code += "4";
    } else if ( string[i] === "u") {
      code += "5";
    } else {
      code += string[i];
    }
  }
  return code;
}

function decode(string) {
  let code = "";
  for (let i = 0; i < string.length; i += 1) {
    if ( string[i] === "1") {
      code += "a";
    } else if ( string[i] === "2") {
      code += "e";
    } else if ( string[i] === "3") {
      code += "i";
    } else if ( string[i] === "4") {
      code += "o";
    } else if ( string[i] === "5") {
      code += "u";
    } else {
      code += string[i];
    }
  }
  return code;
}

// Desafio 10
function techList(tech, name) {
  if (tech.length > 0) {
    tech.sort();
    let obj = [];
    for (i in tech) {
      obj.push({"name": name, "tech": tech[i]});
    }
    return obj;
  }
  return "Vazio!";
}

// Desafio 11
function generatePhoneNumber(array) {
  let result = "(";
  let cont = 1;

  if (array.length !== 11) {
    return "Array com tamanho incorreto.";
  }

  for (let i = 0; i < array.length; i += 1) {
    if (0 > array[i] || array[i] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
      break;
    }
    for (let j = 1; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        cont += 1;
      }
      if (cont >= 3) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
    j = i + 1;
    cont = 0;
  }

  if (array.length === 11) {
    for ( i = 0; i <= 1; i += 1) {
      result += array[i];
    }
    result += ") "

    for (i = 2; i <= 6; i+= 1) {
      result += array[i];
    }
    result += "-";

    for (i = 7; i <= 10; i += 1) {
      result += array[i];
    }
  return result;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  lineA = Math.abs(lineA);
  lineB = Math.abs(lineB);
  lineC = Math.abs(lineC);
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    if ( lineA > lineB - lineC && lineB > lineA - lineC && lineC > lineA - lineB) {
      return true;
    }
  }
  return false;
}

// Desafio 13
function hydrate(drink) {
  let n = drink.match(/\d+/g);
  let water = 0;
  for (let i = 0; i < n.length; i += 1) {
    water += parseInt(n[i]);
  }
  if (water > 1) {
    return water + " copos de água";
  }
  return water + " copo de água";
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
