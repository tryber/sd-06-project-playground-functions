// Desafio 6
function highestCount(array) {
    maior = count = 0
    for (i in array) {
        if (array[i] >= maior){
            maior = array[i]
            count += 1
        }
    }
    return count
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))