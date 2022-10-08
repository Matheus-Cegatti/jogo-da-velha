const quadradosJogo = document.querySelectorAll("[data-celula");
const jogo = document.querySelector("[data-jogo]")


let vezCirculoJogar;

const iniciandoJogo = () => {
    for (const quadrado of quadradosJogo){
        quadrado.addEventListener("click", clickQuadrado, {once: true})
    }

    vezCirculoJogar = false

    jogo.classList.add("x")
}

const colocandoSimbolo = (celula, adicionarClasse) => {
    celula.classList.add(adicionarClasse)
}

const alternandoTurno = () => {
    vezCirculoJogar = !vezCirculoJogar

    jogo.classList.remove("circulo");
    jogo.classList.remove("x")

    if(vezCirculoJogar){
        jogo.classList.add("circulo")
    }else{
        jogo.classList.add("x")
    }
}

const clickQuadrado = (e) => {
    //colocar a marca ( x ou circulo)
    const celula = e.target;
    const adicionarClasse = vezCirculoJogar ? "circulo" :"x";
    colocandoSimbolo(celula, adicionarClasse);


    //mudar o simbolo
    alternandoTurno();
}

iniciandoJogo();


