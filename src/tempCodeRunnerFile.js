let array = [2, 3, 2, 5, 8, 2, 3, 2, 2, 2, 8, 8, 9, 10, 10, 1000, 1000, 1000, 1000];

function highestCount(array) {
  let maiorNumero = 0;
  let freq = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > array[i - 1]) {
      if (array[i] > maiorNumero) {
        maiorNumero = array[i];
      }
    }
  }
  for (let j = 0; j < array.length; j += 1) {
    if (array[j] === maiorNumero) {
      freq += 1;
    }
  }
  return freq
}

console.log(highestCount(array));