var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
var cores = ['red', 'green', 'blue'];
var indiceCores = 0;
var raio = 10;
var desenha = false;
var cor = 'black';
const input = document.getElementById('input');
const submit = document.getElementById('submit');

//Preenchendo nossa tela
pincel.fillStyle = 'gray'
pincel.fillRect(0, 0, 600, 400);

//Função para mudar a cor do circulo sempre que chamar o evento oncontextmenu(clicar com botao direito no elemento especificado)
function mudaCor() {
    indiceCores++
    if (indiceCores === 3) {
        indiceCores = 0
    }
    console.log(cores[indiceCores]);

}


//Função para desenhar um circulo
function desenhaCirculo(evento) {
    // offsetLeft e offsetTop são métodos que retornam as distâncias do elemento atual ao invés do elemento pai
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if (desenha) {
        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * 3.14);
        pincel.fill();
    }


    if (evento.shiftKey) {
        if (raio < 40) {
            raio = raio + 10
        }
        pincel.fillStyle = cores[indiceCores];
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * 3.14);
        pincel.fill();
    }

    if (evento.altKey) {
        if (raio > 0) {
            raio = raio - 10
        }
    }

};

// o evento oncontextmenu é acionado quando o usuário clica com o botão DIREITO do mouse em um elemento;

tela.onclick = desenhaCirculo;
tela.oncontextmenu = mudaCor;
tela.onmousemove = desenhaCirculo;

// habilitando a função desenha
tela.onmousedown = function() {desenha = true}
// desabilitando a função desenha
tela.onmouseup = function () {desenha = false}
// pegando o valor do input a partir do clik no botao 'enviar' e atribuindo como argumento para cor da minha função
submit.onclick = function () {cor = input.value}