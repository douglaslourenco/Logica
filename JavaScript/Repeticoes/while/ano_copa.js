function pulaLinha() {

    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

var limite = parseInt(prompt("Digite o ano limite: "));
var ano = 1930;

while (ano < limite) {
    ano = ano + 4
    mostra(ano);
}

mostra("FIM");