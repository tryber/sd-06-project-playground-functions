let inteiros = [2, 3, 6, 7, 10, 1];

function pegandoMaiorIndice(inteiros){
    let indiceMaior = 0;
    let contador = 0;

    for (let indice in inteiros) {
        if(inteiros[indiceMaior] < inteiros[indice]){
            indiceMaior = indice;
        }
    }
    
    for (let i in inteiros) {
        if (inteiros[indiceMaior] === inteiros[i]) {
            contador += 1;
        }
    }
    return contador;
}

console.log(pegandoMaiorIndice(inteiros));