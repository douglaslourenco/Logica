const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.strokeStyle = 'black';
pincel.strokeRect(0, 0, 500, 500);


var chrome = 'yellow'
var firefox = 'red'
var safari = 'green'
var outros = 'blue'

function desenhaRetangulo(x, y, cor) {
   
    

    pincel.font ='20px Georgia'
    pincel.fillStyle='black'
    pincel.fillText('2015', 100, 30);

    pincel.fillStyle = cor;
    pincel.fillRect(100, y, 50, x);
}

function texto(texto, y) {
    pincel.font = '15px Sans-serif'
    pincel.fillStyle = 'black'
    pincel.fillText(texto, 20, y);
}


texto('Chrome', 130);
desenhaRetangulo(225, 50, chrome);
desenhaRetangulo(112.50, 225, firefox);
desenhaRetangulo(90, 337.50, safari);
desenhaRetangulo(9, 427.50, outros);