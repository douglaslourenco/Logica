// <canvas width="600" height="400"></canvas>

const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.fillStroke = 'black'
pincel.strokeRect(0, 0, 600, 400);

function quadrado(x, y, cor) {
    pincel.fillStyle = cor
    pincel.fillRect(x, y, 50, 50);
    pincel.strokeRect(x, y, 50, 50);
}
/*
var x = 0
while (x < 600) {
    quadrado(x, 0, 'green');
    quadrado(x, 50, 'red');
    quadrado(x, 100, 'blue');
    x = x + 50;

    if (x === 600) {
        console.log("limite alcançado!");
    }
}
*/

for (x = 0;x < 600; x = x + 50) {
    quadrado(x, 0, 'green');
    quadrado(x, 50, 'red');
    quadrado(x, 100, 'blue');
}

quadrado(0, 0, 'green');
quadrado(50, 50, 'red');
quadrado(100, 100, 'blue');