var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 600, 400);

    function desenhaCirculo(x, y, raio, cor) {

        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * Math.PI);
        pincel.fill();
    }

    function limpaTela() {

        pincel.clearRect(0, 0, 600, 400);
    }


    var min = 20;
    var max = 30;
    raio = 10;
    sentido = 1;
    function pulsar () {
        limpaTela();
        if (raio > max) {
            sentido--;
        } else if (raio < min) {
            sentido++;
        }
        desenhaCirculo(100, 100, raio, 'black');
        raio = raio + sentido;
    }

    setInterval(pulsar, 20)