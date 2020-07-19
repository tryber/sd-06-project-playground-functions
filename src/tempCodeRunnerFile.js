function techList(tech, name) {
    let techSort = tech.sort();
    let tecnologias = [];
    for(index in techSort){
      tecnologias.push(techSort[index] = {tech: techSort[index], nome : name,});
    }
    if(tecnologias.length === 0){
      return 'Vazio!';
    }
    return tecnologias;
  }