

/*
    Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.


*/

function sayMyName(nome) {
    console.log("Antes da Callback")
    nome();//chamando a função  
    console.log("Depois da função")

}



// estamos passando uma função anônima para outra função
sayMyName(
    () => {
        console.log("Felippe Marques");
    }
);





