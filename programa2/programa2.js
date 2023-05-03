var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgray'
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, c) {
    pincel.fillStyle = 'blue'
    pincel.beginPath();
    pincel.arc(x, y, c, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
}



var a = 20
function atualizaTela () {
    limpaTela();
    a ++;
    desenhaCirculo(a, 20, 10);
}

setInterval(atualizaTela, 10)