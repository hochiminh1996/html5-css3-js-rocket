/*

    Criando um array com base em uma string. Ou seja, cada letra será um elemento do array.


*/

let palavra = "Computação";

let elementos = Array.from(palavra);//Fazendo um array da variável palavra

console.log(elementos); // "C", "o","m","p","u","t","a","ç","ã","o"
console.log(elementos[7])// => ç


// última palavra :
console.log(elementos[elementos.length-1])