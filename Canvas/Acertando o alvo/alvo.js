//Algoritmo para capturar as cordenadas do mouse e manipular com um jogo

var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
var acertou = false;
var max = 600
var min = 400

    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 600, 400);

    var raio = 10;

    function desenhaCirculo(x, y, raio, cor) {

        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * Math.PI);
        pincel.fill();
    }

    function dispara(evento) {

        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;

       // lógica de acerto?
       if (x < 310 && x > 290 && y < 210 && y > 190) {
        acertou = true
        alert('acertou');
       }

       console.log("X: "+x+"Y: "+y);
    
    }

    tela.onclick = dispara;
    
    desenhaCirculo(300,200, raio + 20, 'red'); // maior círculo
    desenhaCirculo(300,200, raio + 10, 'white');
    desenhaCirculo(300,200, raio, 'red'); // menor circulo