/*
    Cria um objeto que possuirá 2 propriedades, ambas do tipo array : 
    
    * receitas[]
    * despesas[]

    Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com o saldo positivo ou negativo,seguido do valor do saldo

*/


//carregando a função
document.addEventListener("DOMContentLoaded", calcular_balanco);

// nosso objeto com métodos e atributos
let familia = {
    incomes: [0, 300, 250.43, 350.45],//nosso array de receitas
    expenses: [10, 300, 250.43, 350.45],//nosso array de despesas

    total_income: function () {//método que soma todos os valoes de income
        let total = 0;
        for (let value of this.incomes) {//this.income está acessando nosso atributo array
            total += value;
        }

        return total;
    },

    total_expensive: function () {//método que soma todos os valoes de income
        let total = 0;

        for (let value of this.expenses) {
            total += value;
        }
        return total;
    }

}

//uma função para somar valores de arrays, seja receitas ou despesas
function sum(array) {
    let total = 0;

    for (let value of array) {
        total += value;
    }
    return total;
}


//função principal
function calcular_balanco() {

    let total_income = familia.total_income(); // acessando o método totalincome que retorna o total de entrada
    
    let total_expensive = familia.total_expensive();//acessando o método total expensive que retorna o total de saida


    if (total_expensive > total_income) {
        console.log(`Vermelho : R$ ${(total_income - total_expensive).toFixed(2)}`)
    } else if (total_expensive == total_income) {
        console.log(`Zerado : R$ ${(total_income - total_expensive).toFixed(2)}`)
    } else {
        console.log(`Azul : R$ ${(total_income - total_expensive).toFixed(2)}`)
    }
}




