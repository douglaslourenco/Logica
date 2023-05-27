function pulaLinha() {

    document.write("<br>");
}

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}


for (var i = 1; i <= 3; i++) {
    for (var estrela = 1; estrela <= 10; estrela++) {
        document.write("*");
    }
    pulaLinha();
}