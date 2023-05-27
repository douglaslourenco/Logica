function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

// a função Prompt() retorna os valores em formato de string, 
// então para calcular os pontos vamos usar a função parseInt()

// parseInt é uma função para converter string em número.
var vitorias = parseInt(prompt("Entre com o número de vitórias."));
var empates = parseInt(prompt("Entre com o número de empates."));
var pontos = (vitorias * 3) + empates;

function avaliarTime() {
    if (pontos < 29) {
        mostra("O seu time está pior que o ano passado.");
    } else if (pontos > 29) {
        mostra("O seu time está melhor do que o ano passado.");
    } else if (pontos == 29) {
        mostra("O seu time está igual ao ano passado.");
    }
}

mostra("Sua pontuação é: " + pontos);
avaliarTime();
mostra("FIM");