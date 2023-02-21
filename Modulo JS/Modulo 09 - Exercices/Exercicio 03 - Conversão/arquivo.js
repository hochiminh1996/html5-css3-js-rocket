/*
    Celcius em fahrenheit

    Cria uma função que recebe uma string em celsius ou fahrenheit e faça a transformação para a outra e vice versa
*/

document.addEventListener("DOMContentLoaded", main);


function conversao(valor) {
    let formula = 0;

    if (valor.toLowerCase().indexOf("c") > 0) {//Se houver o "c". Já transforma em minúsculo
        let c = Number(valor.toLowerCase().replaceAll("c", ""));//remove a letra, já transformando em miníscula, senão da NAN, porque ele não vai encontrar N. Lembre-se : o tolower não modifica a variável, apenas modifica o seu conteúdo no momento especifico

        formula = c * 9 / 5 + 32;//De fahrenheit para Celcius
        console.log(`${c}C = ${formula.toFixed(2)}F`);

    } else if (valor.toLowerCase().indexOf("f") > 0) {//Se houver o f. Já transforma em minúsculo para n ter problema de case sensitive
        let f = Number(valor.toLowerCase().replaceAll("f", ""));// remove o F do valor, obrigando ser um valor minísculo. Lembre-se : o valor.lowerCase do IF não modifica o valor da variável, apenas força que dentro da condição seja minúscula. É necessário aplicar o lower novamente para evitar que isso produza um resultado NAN. Tire o lower da variável F, troque o valor de entrada para 10F e vc verá um NAN 

        formula = (f - 32) * 5 / 9;// De graus para fahrenheit
        console.log(`${f}F = ${formula.toFixed(2)}C`);

    } else {
        console.log(`Valor não encontrado : preencha corretamente`)
    }
}

function main() {
    conversao("10c")
    conversao("50f")
    conversao("")
}