const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.fillStyle = 'green';
pincel.fillRect(0, 0, 700, 500);

pincel.fillStyle = 'yellow';
pincel.beginPath();
pincel.moveTo(350, 100);
pincel.lineTo(100, 250);
pincel.lineTo(600, 250);
pincel.fill();

pincel.fillStyle = 'yellow'
pincel.beginPath();
pincel.moveTo(350, 400);
pincel.lineTo(100, 250);
pincel.lineTo(600, 250);
pincel.fill();

pincel.fillStyle = 'darkblue'
pincel.beginPath();
pincel.arc(350, 250, 100, 0, 2 * 3.14);
pincel.fill();