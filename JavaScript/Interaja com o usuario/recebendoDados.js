var input = document.querySelector('input');
var button = document.querySelector('button');

var numero = Math.round(Math.random() * 10);
console.log(numero);

function verifica() {
    if (input.value == numero) {
        alert('Parabéns, você acertou!')
    } else {
        alert('Você errou!')
    }
    input.value = null;
    input.focus();
}

button.onclick = verifica;