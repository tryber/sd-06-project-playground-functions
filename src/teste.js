// Desafio 6
function highestCount(array) {
    maior = Math.max.apply(null, array);
    count = 0
    for (i in array) {
        if (array[i] === maior){
            count += 1
        }
    }
    return count
}