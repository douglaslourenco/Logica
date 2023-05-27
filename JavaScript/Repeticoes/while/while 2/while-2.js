// Imprimir todos os números de 20 a 0.

function pulaLinha() {

    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

contador = 20;

while (contador >= 0) {
    mostra(contador);
    contador--;
}

mostra("FIM");