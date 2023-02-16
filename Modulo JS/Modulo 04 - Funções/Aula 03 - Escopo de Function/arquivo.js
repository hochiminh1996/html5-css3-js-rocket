/*

    hoisting(ELEVAÇÃO) DE FUNÇÃO
 */

sayMyName();

function sayMyName() {
    return ("Felippe");
}


/*
    mesmo fora de ordem. Conseguimos executar a função porque ela realiza o  hoisting (elevação). Isso porque, por baixo dos panos, o JS faz a seguinte organização :

    function sayMyName() {
        return ("Felippe");
    }

    sayMyName();

*/

// Diferente da função anônima abaixo, que resultará em erro



nome();
const nome = function () {
    console.log("Felippe");
}

// Haverá um erro porque a função anônima não sofre o hoisting. No caso, o hosting está ocorrendo na variável nome. No entanto, por "nome" ser uma função, n uma variável comum, o processo de hoisting n funciona.


// hoisting em variável acontece apenas quando usamos o definidor de função "var". Em função, com exceção da anônima, let, var, const NÃO SOFRERÃO hoisting


