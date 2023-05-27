function pulaLinha() {

    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

var numeroPensado = Math.round(Math.random() * 10);
console.log(numeroPensado);
var tentativas = 0;

//0         //3
while (tentativas <= 3) {
    if (chute == numeroPensado) {
        mostra("Você acertou!");
        break;
    } else if (tentativas == 3) {
        mostra("Você errou, o número pensado é: " + numeroPensado);
        break;
    }
    var chute = parseInt(prompt("Digite um número entre 1 e 10."));
    tentativas++;
    
}