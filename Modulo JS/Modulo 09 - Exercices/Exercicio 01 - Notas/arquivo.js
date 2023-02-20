/*
    Crie um algoritmo que transforme notas escolas, de valores decimais, para valores em caracteres.

    A - > Acima de 9
    B - > Entre 8 e 8.9
    C - > Entre 7 e 7.9
    D - > Entre 6 e 6.9
    F - > Menor que 6

*/




function nota(nota = 0) {
    let resultado;
    if (nota > 10) {
        resultado = `VALOR INVÁLIDO`;
    } else
        if (nota >= 9 && nota <= 10) {
            resultado = `Nota : ${nota} [A]`;
        } else if (nota >= 8) {
            resultado = `Nota : ${nota} [B]`;
        } else if (nota >= 7) {
            resultado = `Nota : ${nota} [C]`;
        } else if (nota >= 6) {
            resultado = `Nota : ${nota} [D]`;
        } else if (nota < 6 && nota >= 0) {
            resultado = `Nota : ${nota} [F]`;
        } else {
            resultado = `Nota inválida`;
        }
    return resultado;
}

console.log(nota(1));