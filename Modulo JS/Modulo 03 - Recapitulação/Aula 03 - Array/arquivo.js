/*
    Recaptulando : array é uma estrutura de dados que armezena uma série de elementos e valores. Podendo ser de tipos diferentes ou iguais, a depender da linguagem.

    array -> contém elementos,  indice e valor


*/

let countries = ["Brasil", "Rússia", "Índia", "China", "África do Sul"]; // 5 elementos. Porém, o indice vai de 0-4

console.log(countries[0])
console.log(countries.length);


// acessando todos os elementos
for(let i in countries){
    console.log(countries[i])
}

