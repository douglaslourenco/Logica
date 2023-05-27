var input = document.querySelector('input');
var button = document.querySelector('button');
var numeros = [3, 4, 5];
var achou = false;

input.focus();
// função para verificar se o número digitado existe no array
function verifica() {
    // for para percorrer todo o array
    for (verificador = 0; verificador < numeros.length; verificador++) {
        if (input.value == numeros[verificador]) {
            alert('Você digitou o número certo!');
            achou = true;
            input.value = "";
            input.focus();
            break;
        }
    }

    if (achou == false) {
        alert('Você digitou um número incorreto!');
        input.value = "";
        input.focus();
    }

    achou = false;
}

button.onclick = verifica;