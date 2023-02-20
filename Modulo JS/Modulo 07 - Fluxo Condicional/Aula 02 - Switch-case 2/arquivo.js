/*

    switch : estrutura de controle de fluxo.
    Usado quando sabemos exatamente quantos fluxos teremos

*/

document.addEventListener("DOMContentLoaded", principal)


function principal() {
    console.log(`Resultado da Operação : ${calc(10, 10, "+")}`)

}

function calc(n1, n2, operador) {

    let resultado = 0;
    switch (operador) {
        case "*":
            resultado = n1 * n2;
            break;
        case "/":
            resultado = n1 / n2;
            break;
        case "+":
            resultado = n1 + n2;
            break;
        case "-":
            resultado = n1 - n2;
            break;
        case "**":
            resultado = n1 ** n2;
            break;
        default: return "Operação inválida";
    }

    return resultado;
}
