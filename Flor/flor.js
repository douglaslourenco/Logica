// EU SEI QUE NÃO É UMA FLOR

const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.strokeStyle = 'black'
pincel.strokeRect(0, 0, 500, 500);



function circulo(x, y, cor) {
    pincel.fillStyle = cor
    pincel.beginPath();
    pincel.arc(x, y, 50, 0, 2*3.14);
    pincel.fill();
}

function desenhaFlor() {
    circulo(250, 250, 'red');
    circulo(150, 250, 'orange');
    circulo(350, 250, 'black');
    circulo(250, 150, 'yellow');
    circulo(250, 350, 'blue');
}

desenhaFlor();