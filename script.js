const quadradosJogo = document.querySelectorAll("[data-celula");
const jogo = document.querySelector("[data-jogo]");
const msgFinal = document.querySelector(".mensagem-final");
const msgVitoria = document.querySelector(".msg-vitoria");
const btnReset = document.querySelector(".reset")

let vezCirculoJogar;

const combinacoesVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const iniciandoJogo = () => {
    for (const quadrado of quadradosJogo) {
        quadrado.classList.remove("x");
        quadrado.classList.remove("circulo");
        quadrado.removeEventListener("click", clickQuadrado)
        quadrado.addEventListener("click", clickQuadrado, { once: true })
    }

    vezCirculoJogar = false

    definirFocoQuadrado()

    msgFinal.classList.remove("mensagem-aparece");
}

const finalDeJogo = (empate) => {
    if (empate) {
        msgVitoria.innerText = 'Empate!'
    } else {
        msgVitoria.innerText = vezCirculoJogar ? " O venceu!" : "X venceu!"
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

const verificandoEmpate = () => {
    return [...quadradosJogo].every(celula => {
        return celula.classList.contains("x") || celula.classList.contains("circulo")
    })
}

const colocandoSimbolo = (celula, adicionarClasse) => {
    celula.classList.add(adicionarClasse)
}

const definirFocoQuadrado = () => {
    jogo.classList.remove("circulo");
    jogo.classList.remove("x")

    if (vezCirculoJogar) {
        jogo.classList.add("circulo")
    } else {
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
    const adicionarClasse = vezCirculoJogar ? "circulo" : "x";
    colocandoSimbolo(celula, adicionarClasse);



    //verificando vitoria
    const ganhou = verificandoVitoria(adicionarClasse);

    const empate = verificandoEmpate();
    //verificando empate

    if (ganhou) {
        finalDeJogo(false);
    } else if (empate) {
        finalDeJogo(true);
    } else {
        //mudar o simbolo
        alternandoTurno();
    }
}

iniciandoJogo();

btnReset.addEventListener("click", iniciandoJogo)

