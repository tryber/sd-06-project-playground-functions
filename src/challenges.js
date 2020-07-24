// Desafio 1
function compareTrue(a, b) {
  if(a && b === true) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(false, false))

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

console.log(calcArea(5, 10))

// Desafio 3
function splitSentence(phrase) {
  let word = "";
  let result = "";

  for (let i = 0; i < phrase.length; i++) {
      word += phrase[i];
  }

  result = word.split(" ");
  return result;
}


console.log(splitSentence("go Trybe"))

// Desafio 4
function concatName(names) {
  let firstName = names[0];
  let lastName = names[names.length - 1];

  return `${lastName}, ${firstName}`
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let result;
  wins = wins * 3;
  ties = ties * 1;

  result = wins + ties;

  return result 
}

console.log(footballPoints(10, 5));

// Desafio 6
function highestCount(numbers) {
  let numberRepeat = 0;
  let highestNumber = numbers[0];

  for (index in numbers) {
      if (numbers[index] > highestNumber) {
          highestNumber = numbers[index]
      }
  }
  for (index in numbers) {
      if (numbers[index] === highestNumber) {
          numberRepeat += 1;
      }

  }
  return (numberRepeat);


}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;

  if (Math.sign(distanceCat1) < 0) {
      distanceCat1 *= -1;
  } 
  if (Math.sign(distanceCat2) < 0) {
      distanceCat2 *= -1
  }

  if (distanceCat1 < distanceCat2) {
      return "cat1";
  } else if (distanceCat2 < distanceCat1) {
      return "cat2";
  } else (distanceCat1 === distanceCat2)
  return "os gatos trombam e o rato foge";

}

console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 & numbers[i] % 5 === 0) {
      result.push("fizzBuzz");
    } else if (numbers[i] % 3 === 0) {
      result.push("fizz");
    } else if (numbers[i] % 5 === 0) {
      result.push("buzz");
    } else
      result.push("bug!");

  }
  return result

}


console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9
function encode(word) {
  let result = "";
  for (let i = 0; i < word.length; i++) {
      if (word[i] === "a") {
          result += 1;
      } else if (word[i] === "e") {
          result += 2;
      } else if (word[i] === "i") {
          result += 3;
      } else if (word[i] === "o") {
          result += 4;
      } else if (word[i] === "u") {
          result += 5;
      }
      else
          result += word[i]

  }
  return result

}
console.log(encode("hi there!"))


function decode(word) {
  let result = "";
  for (let i = 0; i < word.length; i++) {
      if (word[i] == 1) {
          result += "a";
      } else if (word[i] == 2) {
          result += "e";
      } else if (word[i] == 3) {
          result += "i";
      } else if (word[i] == 4) {
          result += "o";
      } else if (word[i] == 5) {
          result += "u";
      }
      else
          result += word[i]

  }
  return result

}
console.log(decode("h3 th2r2!"))

// Desafio 10
function techList(techs, name) {
  let list = [];

  for (let i = 0; i < techs.length; i++) {
      let finalList = {};

      finalList.tech = techs[i];
      finalList.name = name;

      list.push(finalList)
  }

  list.sort(function (a, b) {
      return a.tech < b.tech ? -1 : a.tech > b.tech ? 1 : 0;
  });
  
  if(list.length === 0){
    return "Vazio!"
}
return list

};

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));
console.log(techList([], "Lucas"));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(drinks) {
  let regex = /\d+/g;
  var matches = drinks.match(regex);
  let result = 0;

  for (let i = 0; i < matches.length; i++) {
      let numbers = Number(matches[i]);
      result += numbers;
  }
  if (result === 1 ){
    return `${result} copo de água`
  } else {
    return `${result} copos de água`
  }
  
};

console.log(hydrate("1 cachaça"));



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
