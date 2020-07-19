// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    if ((mouse - cat1) == (cat2 - mouse)){
        return 'os gatos trombam e o rato foge'
    }
    else if((cat2 - mouse) < cat1){
        return 'cat2'
    }else {
    ((cat1 - mouse) < cat2)
        return "cat 1"
    }
  }
  console.log(catAndMouse(0, 3, 2))
