const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

function desenhaQuadrado(x, y, cor) {
    // Passando a cor do pincel
    pincel.fillStyle = cor
    // Passando as medidas
    pincel.fillRect(x, y, 50, 50);

    // Passando a cor da borda
    pincel.strokeStyle = 'black'
    pincel.strokeRect(x, y, 50, 50);

};

desenhaQuadrado(0, 0, 'green');
desenhaQuadrado(50, 0, 'green');
desenhaQuadrado(100, 0, 'green');
desenhaQuadrado(150, 0, 'white');