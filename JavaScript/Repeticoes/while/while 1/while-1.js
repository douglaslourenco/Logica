// OBJETIVO: Imprimir todos os números entre 30 a 40, exceto 33 e 37!

function pulaLinha() {

    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

var contador = 30;

while (contador <= 40) {
    if (contador == 33 || contador == 37){
        contador++;
    }
    mostra(contador);
    contador ++;
}

mostra("FIM");