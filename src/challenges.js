// Desafio 1
function compareTrue(BOOLEAN1, BOOLEAN2) {

  if (BOOLEAN1 && BOOLEAN2) {
    return true
  } else {
    return false
  }

}

// Desafio 2
function calcArea(base, height) {
  area = (base * height) / 2
  return area
}

// Desafio 3
function splitSentence(str) {

  let word = ""
  let sentence = []
  let wordIndex = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      for (let j = i - 1; j >= 0; j--) {
        if (str[j] == " ") {
          break
        } else {
          word = str[j] + word
        }
      }
      sentence[wordIndex] = word
      word = ""
      wordIndex++
    }
    if (i == str.length - 1) {
      for (let j = i; j >= 0; j--) {
        if (str[j] == " ") {
          break
        } else {
          word = str[j] + word
        }
      }
      sentence[wordIndex] = word
      word = ""
    }
  }

  return sentence

}

// Desafio 4
function concatName(arrayStrings) {

  let arrayStringsInv = ""

  arrayStringsInv = arrayStringsInv + arrayStrings[arrayStrings.length - 1]
  arrayStringsInv = arrayStringsInv + ", "
  arrayStringsInv = arrayStringsInv + arrayStrings[0]

  return arrayStringsInv

}

// Desafio 5
function footballPoints(wins, ties) {
  
  let points = 0

  points += wins * 3
  points += ties * 1

  return points

}

// Desafio 6
function highestCount(arr) {
  
  let max = 0
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max && !(arr[i] < 0)) {
      max = arr[i]
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == max) {
      count++
    }
  }

  return count

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
  let dCat1 = 0
  let dCat2 = 0
  //let tie = "os gatos trombam e o rato foge"

  if (cat1 < mouse) {
    dCat1 = mouse - cat1
  } else {
    dCat1 = cat1 - mouse
  }

  if (cat2 < mouse) {
    dCat2 = mouse - cat2
  } else {
    dCat2 = cat2 - mouse
  }

  if (dCat1 > dCat2) {
    return "cat2"
  } else if (dCat1 < dCat2) {
    return "cat1"
  } else if (dCat1 == dCat2) {
    return "os gatos trombam e o rato foge"
  }

}

// Desafio 8
function fizzBuzz(arr) {
  
  let fizz = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0 && !(arr[i] % 5 == 0)) {
      fizz.push("fizz")
    } else if (arr[i] % 5 == 0 && !(arr[i] % 3 == 0)) {
      fizz.push("buzz")
    } else if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {
      fizz.push("fizzBuzz")
    } else {
      fizz.push("bug!")
    }
  }

  return fizz

}

// Desafio 9
function encode(str) {

  let newStr
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "a") {
      newStr = str.replace(/a/g, "1")
      str = newStr
    } else if (str[i] == "e") {
      newStr = str.replace(/e/g, "2")
      str = newStr
    } else if (str[i] == "i") {
      newStr = str.replace(/i/g, "3")
      str = newStr
    } else if (str[i] == "o") {
      newStr = str.replace(/o/g, "4")
      str = newStr
    } else if (str[i] == "u") {
      newStr = str.replace(/u/g, "5")
      str = newStr
    }
  }

  return str

}
function decode(str) {
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "1") {
      newStr = str.replace(/1/g, "a")
      str = newStr
    } else if (str[i] == "2") {
      newStr = str.replace(/2/g, "e")
      str = newStr
    } else if (str[i] == "3") {
      newStr = str.replace(/3/g, "i")
      str = newStr
    } else if (str[i] == "4") {
      newStr = str.replace(/4/g, "o")
      str = newStr
    } else if (str[i] == "5") {
      newStr = str.replace(/5/g, "u")
      str = newStr
    }
  }

  return str

}

// Desafio 10
function techList(arr, name) {

  let newArr = []

  if (arr == undefined || arr.length == 0 || arr[0] == 0)
    return "Vazio!" 

  arr.sort()

  for (let i in arr) {
    newArr.push({
      tech: arr[i],
      name: name
    })
  }

  return newArr

}

// Desafio 11
function generatePhoneNumber(arr) {

  let str = "("
  
  if (arr.length != 11)
    return "Array com tamanho incorreto."

  for (let i = 0; i < 10; i++) {
    let k = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == i)
        k++
      if (arr[j] <= -1)
        return "não é possível gerar um número de telefone com esses valores"
      if (arr[j] > 9)
        return "não é possível gerar um número de telefone com esses valores"
    }
    if (k >= 3)
      return "não é possível gerar um número de telefone com esses valores"
  }

  for (let i = 0; i < 2; i++) {
    str = str + arr[i]
  }

  str = str + ") "

  for (let i = 2; i < 7; i++) {
    str = str + arr[i]
  }

  str = str + "-"

  for (let i = 7; i < 11; i++) {
    str = str + arr[i]
  }

  return str

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  
  let abs

  if (lineA > (lineB + lineC)) 
    return false
  if (lineB > (lineA + lineC)) 
    return false
  if (lineC > (lineB + lineA)) 
    return false

  if (lineA < Math.abs(lineB - lineC)) 
    return false
  if (lineB < Math.abs(lineA - lineC)) 
    return false
  if (lineC < Math.abs(lineB - lineA)) 
    return false
  
  return true

}

// Desafio 13
function hydrate(str) {

  let int = 0
  let agua = ""
  
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] == "0") 
      int += 0
    if (str[i] == "1") 
      int += 1
    if (str[i] == "2") 
      int += 2
    if (str[i] == "3") 
      int += 3
    if (str[i] == "4") 
      int += 4
    if (str[i] == "5") 
      int += 5
    if (str[i] == "6") 
      int += 6
    if (str[i] == "7") 
      int += 7
    if (str[i] == "8") 
      int += 8
    if (str[i] == "9") 
      int += 9
  }

  agua = agua + int

  if (int == 1) 
    agua = agua + " copo de água"
  if (int > 1 || int == 0)
    agua = agua + " copos de água"

  return agua

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
