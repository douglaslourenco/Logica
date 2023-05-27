// Prompt é uma função que recebe parâmetros e possui retornos.
var nome = prompt("Olá! Para começarmos, digite o seu nome");
var pesoInformado = prompt("Digite seu peso");
var alturaInformada = prompt("Digite sua altura");
var imc = calculaImc(pesoInformado, alturaInformada);

function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

// Função para calcular o imc
function calculaImc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

// Função para avaliar se seu imc está na média
function avaliaImc () {
    if (imc < 18) {
        mostra("Seu imc está abaixo da média");
    }else if (imc > 35) {
        mostra("Seu imc está acima da média");
    }else if (imc > 18 && imc < 35) {
        mostra("Parabéns! Seu imc está ótimo.");
    }
}

mostra(nome + ", o seu IMC é: " + calculaImc(pesoInformado, alturaInformada));
avaliaImc();
