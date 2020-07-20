function fizzBuzz(arrayNumbers) {
  let arrayFizzBuzz = [];
  for (let i in arrayNumbers) {
    if ((arrayNumbers[i] % 3)===0 && (arrayNumbers[i] % 5)===0) {
        arrayFizzBuzz.push('fizzBuzz!');
    } else if ((arrayNumbers[i] % 5)===0 && (arrayNumbers[i] % 3)!==0) {
        arrayFizzBuzz.push('buzz!');
    } else if ((arrayNumbers[i] % 3)===0 && (arrayNumbers[i] % 5)!==0) {
        arrayFizzBuzz.push('fizz!');
    } else {
        arrayFizzBuzz.push('bug!');
    }
  }
  return console.log(arrayFizzBuzz);
}

fizzBuzz([1,2,5,60,20,15,3,7,15]);
