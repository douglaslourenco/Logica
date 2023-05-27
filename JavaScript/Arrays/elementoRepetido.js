var ingredientes = [];

    var quantidade = parseInt(prompt("Quantos ingredientes você vai adicionar?"));

    var contador = 1;

    while( contador <= quantidade) {

        var ingrediente = prompt("Informe o ingrediente " + contador);
        var repetido = false;

        for (i = 0; i < ingredientes.length; i++) {
            if (ingrediente == ingredientes[i]) {
                repetido = true;
            }
        }

        if (repetido == false) {
            ingredientes.push(ingrediente);
            contador++;
        }

    }

    document.write(ingredientes);
    console.log(ingredientes);