// Agora queremos que esses números do array sejam gerados automaticamente.

var input = document.querySelector('input');
var button = document.querySelector('button');
var achou = false;

// Função para gerar um número aleatório
function sorteia() {
    return (Math.round(Math.random() * 10));
}

// Função para gerar múltiplos números aleatórios
function sorteiaNumeros(quantidade) {
    var lista = [];
    var numero = 1;

    while (numero <= quantidade) {
        numeroAleatorio = sorteia();
        var achou = false;

        // Vamos verificar se o número já existe na lista
        for (i = 0; i < lista.length; i++) {
            if (numeroAleatorio == lista[i]) {
                achou = true;
                break;
            }
            if (numeroAleatorio == 0) {
                achou = true;
                break
            }
        }

        if (achou == false) {
            lista.push(numeroAleatorio);
            numero++;   
        }
        
    }

    return lista;
}

var segredos = sorteiaNumeros(4);
console.log(segredos);

input.focus();
// função para verificar se o número digitado existe no array
function verifica() {
    // for para percorrer todo o array
    for (verificador = 0; verificador < segredos.length; verificador++) {
        if (input.value == segredos[verificador]) {
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