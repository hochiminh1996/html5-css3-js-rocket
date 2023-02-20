/*
    Estrutura de controle de fluxo : if/else

    Mudará o curso de nossa estrutura de acordo com a condição acionada.
    Além disso, a estrutura de controle de fluxo IF sempre retornará um booleano
*/



let temperatura = 7;


if (temperatura >= 37.5) {
    console.log("Febre")
} else if (temperatura >= 37 && temperatura < 37.5) {
    console.log("Febre moderada");
} else {
    console.log("Temperatura normal");
}


// podemos usar o ternário :
temperatura >= 37 ? console.log("Febre") : console.log("Temperatura normal");