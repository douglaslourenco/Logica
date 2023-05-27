// Simulando uma tela de login

// O usuário só pode ter 3 tentativas.

var loginCadastrado = "alura";
var senhaCadastrada = "alura321";

var login = false;
var tentativa = 0;

while (login == false) {
    var loginInformado = prompt("Informe seu login");
    var senhaInformada = prompt("Informe sua senha");

    if( loginCadastrado == loginInformado && senhaCadastrada == senhaInformada ) {
        login = true;
        alert("Bem-vindo ao sistema " + loginInformado);
    } else {
        tentativa++;
        alert("Login inválido. Tentativa: " + tentativa);
    }

    if (tentativa == 3) {
        alert("Você digitou seu login e senha incorretos 3 vezes. BLOQUEADO!");
        break;
    }
}