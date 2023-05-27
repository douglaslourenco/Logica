// enquanto o usuário não digitar um número, deve ser mostrado um aviso pedindo para que a idade seja digitada.

var idade = parseInt(prompt("Digite sua idade."));

//isNaN é uma função que recebe um parâmetro e retorna true se o valor passado não for um número
//Ou seja, enquanto idade não for um número, o prompt ficara sendo executado.
while (isNaN(idade)) {
    var idade = parseInt(prompt("Digite sua idade."));
}