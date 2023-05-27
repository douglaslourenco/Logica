var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'green'
pincel.fillRect(0, 0, 400, 400);

pincel.fillStyle = 'black'
// olho esquerdo
pincel.fillRect(50, 50, 100, 100);
// olho direito
pincel.fillRect(250, 50, 100, 100)
// boca centro
pincel.fillRect(150, 150, 100, 100);
// boca canto esquerdo
pincel.fillRect(100, 200, 50, 100)
// boca canto direito
pincel.fillRect(250, 200, 50, 100);