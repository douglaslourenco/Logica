var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 600, 400);

    var x = 20;
    var y = 20;

    function desenhaCirculo(x, y, raio) {

        pincel.fillStyle = 'blue';
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * Math.PI);
        pincel.fill();
    }

    function limpaTela() {

        pincel.clearRect(0, 0, 600, 400);
    }

    function atualizaTela() {

        limpaTela();
        desenhaCirculo(x, y, 10);
    }

    // códigos do teclado
    var esquerda = 37;
    var cima = 38;
    var direita = 39;
    var baixo = 40;
    var space = 32;


    function leDoTeclado(evento) {
        if (evento.keyCode == esquerda) {
            x = x - 10;
            console.log('esquerda')
        } else if (evento.keyCode == direita) {
            x = x + 10;
            console.log('direita')
        } else if (evento.keyCode == cima) {
            y = y - 10;
        } else if (evento.keyCode == baixo) {
            y = y + 10;
        } else if (evento.keyCode == space) {
            x = 10;
            y = 10;
        }
    }


    document.onkeydown = leDoTeclado;

    setInterval(atualizaTela, 20);