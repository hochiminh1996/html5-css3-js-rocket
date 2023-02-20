/*
    Operadores lógicos

    && : E -> AMBAS AS CONDIÇÕES PRECISAM SER VERDADEIRA
    || : OU-> APENAS UMA CONDIÇÃO PRECISA SER VERDADEIRA
    ! : NOT-> NEGAÇÃO DOS VALORES. SE FOR TRUE, VIRA FALSE E VICE VERSA


*/

let a = true, b = true, x = false;


console.log(a && b); // retorna true, ambas as condições foram satisfeita
console.log(!a && b);// retorna false, apenas uma condição foi satisfeita
console.log(!a && !b); // retorna false, nenhuma condição foi satisfeita

console.log(!a || b); // retorna true, uma condição foi satisfeita
console.log(!a || !b); // retorna false, nenhuma condição foi satisfeita

console.log(!a); //retorna false, Pois o booleano foi invertido
console.log(!x);// retorna true, pois o booleano false foi invertido