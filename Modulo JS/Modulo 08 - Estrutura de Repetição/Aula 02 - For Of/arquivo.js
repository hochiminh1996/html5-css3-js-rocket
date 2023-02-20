/*
    Estrutura de repetição e controle de fluxo : for of


    for of -> usado para percorrer strings e arrays
*/


let nome = "Felippe";
let array_nomes = ["Felippe", "Lucas", "Pedro", "Natália", "Marina", "Leila"];


// Irá percorrer letra por letra da string nome: "f", "e", "l","i","p","p","e
for(let letra of nome){
    console.log(letra);
}


// irá percorrer o array de nomes : [0] = "Felippe", [1] = "Lucas", [2] = "Pedro"...
for(let names of array_nomes){
    console.log(names);
}


