const quadradosJogo = document.querySelectorAll("[data-celula");

let vezCirculoJogar;

const colocandoSimbolo = (celula, adicionarClasse) => {
    celula.classList.add(adicionarClasse)
}

const clickQuadrado = (e) => {
    //colocar a marca ( x ou circulo)
    const celula = e.target;
    const adicionarClasse = vezCirculoJogar ? "circulo" :"x";
    colocandoSimbolo(celula, adicionarClasse)
}

for (const quadrado of quadradosJogo){
    quadrado.addEventListener("click", clickQuadrado, {once: true})
}

