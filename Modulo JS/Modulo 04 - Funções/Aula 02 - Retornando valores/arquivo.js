/*
    OBSERVAÇÃO : UMA FUNÇÃO SEMPRE RETORNA UM VALOR. CONTUDO, SE UMA FUNÇÃO NÃO TIVER UM "RETURN", ELA RETORNARÁ UNDEFINED.
 */

function somar(valor1, valor2) {
    return valor1 + valor2;
}



let n1 = 10, n2 = 30;

console.log(`N1 : ${n1}`);
console.log(`N2 : ${n2}`);
console.log(`A soma dos valores é : ${somar(n1, n2)}`)

