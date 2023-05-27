// Uma aplicação que exiba a média de números fornecidos pelo usuário.
// Neste caso, exibir a média de idade dos familiares.

function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var totalFamilia = parseInt(prompt("Quantas pessoas existem na sua família?"));
var contador = 1;
var totalIdade = 0;
var media = 0;

while (contador <= totalFamilia) {
    var idade = parseInt(prompt("Digite a idade dos familiares"));
    totalIdade = totalIdade + idade;
    contador++;
}

var media = totalIdade / totalFamilia;

mostra("Total familia: " + totalFamilia);
mostra("Contador" + contador);
mostra("Total idade: " + totalIdade);
mostra("Média: " + media);
mostra("FIM");