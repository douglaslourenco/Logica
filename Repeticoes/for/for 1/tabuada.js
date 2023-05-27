function pulaLinha() {

    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

var multiplicador = 1;

mostra("Tabuada do 5 com for:");
// SINTAXE FOR: for(inicialização; condição; expressão final){declaração}
for (multiplicador = 1; multiplicador <= 10; multiplicador++) {
    mostra("5 * "+ multiplicador + " = " + (5 * multiplicador));
}
mostra("FIM");