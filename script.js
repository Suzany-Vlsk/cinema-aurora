// ==========================================
// CINEMA AURORA - SCRIPT.JS
// ==========================================


// ==========================================
// PÁGINA 1 - PROGRAMAÇÃO
// ==========================================

let sessoes = [
    "10:00 - Devoradores de Estrelas",
    "14:00 - O Eternauta",
    "16:30 - Segredos do Tempo",
    "19:00 - Star Wars",
    "21:30 - O Eternauta"
];

function mostrarProgramacao() {

    let texto = "";

    for (let i = 0; i < sessoes.length; i++) {
        texto = texto + sessoes[i] + "\n";
    }

    let programacao = document.getElementById("programacao");

    if (programacao) {
        programacao.textContent = texto;
    }
}


// ==========================================
// DESTAQUE POR PERÍODO
// ==========================================

function mostrarDestaque() {

    let periodo = document.getElementById("periodo").value;
    let destaque = document.getElementById("destaque");

    if (periodo == "manha") {

        destaque.textContent =
            "Destaque da manhã: Devoradores de Estrelas! Uma ótima opção para começar o dia.";

        destaque.style.backgroundColor = "#1d3557";
        destaque.style.color = "#ffffff";

    } else if (periodo == "tarde") {

        destaque.textContent =
            "Destaque da tarde: O Eternauta! Uma aventura cheia de mistério e emoção.";

        destaque.style.backgroundColor = "#457b9d";
        destaque.style.color = "#ffffff";

    } else {

        destaque.textContent =
            "Destaque da noite: Star Wars! Prepare-se para uma grande aventura.";

        destaque.style.backgroundColor = "#e9c46a";
        destaque.style.color = "#1d1d1d";
    }
}


// ==========================================
// PÁGINA 2 - CLASSIFICAÇÃO
// ==========================================

function verificarClassificacao() {

    let idade = Number(document.getElementById("idade").value);
    let classificacao =
        Number(document.getElementById("filmeClassificacao").value);

    let resultado =
        document.getElementById("resultadoClassificacao");

    if (idade < 0 || idade > 120) {

        resultado.textContent =
            "Erro: informe uma idade entre 0 e 120 anos.";

        resultado.style.backgroundColor = "#c1121f";
        resultado.style.color = "#ffffff";

    } else if (idade >= classificacao) {

        resultado.textContent =
            "Você pode assistir a este filme! Sua idade atende à classificação indicativa.";

        resultado.style.backgroundColor = "#2a9d8f";
        resultado.style.color = "#ffffff";

    } else {

        resultado.textContent =
            "Você não pode assistir a este filme, pois a classificação indicativa é maior que sua idade.";

        resultado.style.backgroundColor = "#e76f51";
        resultado.style.color = "#ffffff";
    }
}


// ==========================================
// PÁGINA 3 - AVALIAÇÃO
// ==========================================

function calcularAvaliacao() {

    let filme = document.getElementById("nomeFilme").value;

    let historia =
        Number(document.getElementById("notaHistoria").value);

    let visual =
        Number(document.getElementById("notaVisual").value);

    let trilha =
        Number(document.getElementById("notaTrilha").value);

    let resultado =
        document.getElementById("resultadoAvaliacao");


    // Validação das notas
    if (
        historia < 0 || historia > 10 ||
        visual < 0 || visual > 10 ||
        trilha < 0 || trilha > 10
    ) {

        resultado.textContent =
            "Erro: todas as notas devem estar entre 0 e 10.";

        resultado.style.backgroundColor = "#c1121f";
        resultado.style.color = "#ffffff";

        return;
    }


    // Cálculo da média
    let media = (historia + visual + trilha) / 3;

    let classificacao;


    if (media >= 9) {

        classificacao = "Excelente";

        resultado.style.backgroundColor = "#2a9d8f";
        resultado.style.color = "#ffffff";

    } else if (media >= 7) {

        classificacao = "Bom";

        resultado.style.backgroundColor = "#457b9d";
        resultado.style.color = "#ffffff";

    } else if (media >= 5) {

        classificacao = "Regular";

        resultado.style.backgroundColor = "#e9c46a";
        resultado.style.color = "#1d1d1d";

    } else {

        classificacao = "Fraco";

        resultado.style.backgroundColor = "#e76f51";
        resultado.style.color = "#ffffff";
    }


    resultado.textContent =
        "Filme: " + filme +
        " | Média: " + media.toFixed(1) +
        " | Classificação: " + classificacao;
}


// ==========================================
// PÁGINA 4 - QUIZ
// ==========================================

function corrigirQuiz() {

    let pontos = 0;


    let resposta1 =
        document.getElementById("pergunta1").value;

    let resposta2 =
        document.getElementById("pergunta2").value;

    let resposta3 =
        document.getElementById("pergunta3").value;

    let resposta4 =
        document.getElementById("pergunta4").value;


    // Cada pergunta possui seu próprio IF
    if (resposta1 == "correta") {
        pontos = pontos + 1;
    }

    if (resposta2 == "correta") {
        pontos = pontos + 1;
    }

    if (resposta3 == "correta") {
        pontos = pontos + 1;
    }

    if (resposta4 == "correta") {
        pontos = pontos + 1;
    }


    let resultado =
        document.getElementById("resultadoQuiz");

    let mensagem;


    if (pontos == 4) {

        mensagem =
            "Excelente! Você é um verdadeiro especialista em cinema.";

        resultado.style.backgroundColor = "#2a9d8f";
        resultado.style.color = "#ffffff";

    } else if (pontos >= 2) {

        mensagem =
            "Muito bom! Você conhece bastante sobre cinema.";

        resultado.style.backgroundColor = "#457b9d";
        resultado.style.color = "#ffffff";

    } else {

        mensagem =
            "Você pode melhorar! Que tal assistir a mais alguns filmes?";

        resultado.style.backgroundColor = "#e76f51";
        resultado.style.color = "#ffffff";
    }


    resultado.textContent =
        "Você fez " + pontos + " de 4 pontos. " + mensagem;
}


// ==========================================
// CURIOSIDADES
// ==========================================

let curiosidades = [
    "O primeiro filme da história foi exibido em 1895 pelos irmãos Lumière.",
    "A palavra cinema vem de uma abreviação de cinematógrafo.",
    "Star Wars estreou nos cinemas em 1977.",
    "Filmes podem utilizar centenas de profissionais em uma única produção."
];

let indiceCuriosidade = 0;


function mostrarCuriosidade() {

    let resultado =
        document.getElementById("curiosidade");

    resultado.textContent =
        curiosidades[indiceCuriosidade];

    indiceCuriosidade++;

    if (indiceCuriosidade >= curiosidades.length) {
        indiceCuriosidade = 0;
    }
}