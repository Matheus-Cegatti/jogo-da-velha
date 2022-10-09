const quadradosJogo = document.querySelectorAll("[data-celula");
const jogo = document.querySelector("[data-jogo]");
const msgFinal = document.querySelector(".mensagem-final");
const msgVitoria = document.querySelector(".msg-vitoria");
const btnReset = document.querySelector(".reset")

let vezCirculoJogar;

const combinacoesVitoria = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const iniciandoJogo = () => {
    for (const quadrado of quadradosJogo){
        quadrado.classList.remove("x");
        quadrado.classList.remove("circulo");
        quadrado.removeEventListener("click", clickQuadrado)
        quadrado.addEventListener("click", clickQuadrado, {once: true})
    }

    vezCirculoJogar = false

    definirFocoQuadrado()

    msgFinal.classList.remove("mensagem-aparece");
}

const finalDeJogo = (empate) => {
    if(empate){
        msgVitoria.innerText = 'Empate!'
    } else {
        msgVitoria.innerText = vezCirculoJogar ? " X venceu!" : "O venceu!"
    }

    msgFinal.classList.add("mensagem-aparece");
}

const verificandoVitoria = (jogadorAtual) => {
    return combinacoesVitoria.some(combinacao => {
        return combinacao.every(index => {
            return quadradosJogo[index].classList.contains(jogadorAtual);
        });
        
    });
}

const colocandoSimbolo = (celula, adicionarClasse) => {
    celula.classList.add(adicionarClasse)
}

const definirFocoQuadrado = () => {
    jogo.classList.remove("circulo");
    jogo.classList.remove("x")

    if(vezCirculoJogar){
        jogo.classList.add("circulo")
    }else{
        jogo.classList.add("x")
    }
}

const alternandoTurno = () => {
    vezCirculoJogar = !vezCirculoJogar

    definirFocoQuadrado();
}

const clickQuadrado = (e) => {
    //colocar a marca ( x ou circulo)
    const celula = e.target;
    const adicionarClasse = vezCirculoJogar ? "circulo" :"x";
    colocandoSimbolo(celula, adicionarClasse);

    //mudar o simbolo
    alternandoTurno();

    //verificando vitoria
    const ganhou = verificandoVitoria(adicionarClasse);
    if (ganhou){
        finalDeJogo(false)
    }
}

iniciandoJogo();

btnReset.addEventListener("click", iniciandoJogo)

