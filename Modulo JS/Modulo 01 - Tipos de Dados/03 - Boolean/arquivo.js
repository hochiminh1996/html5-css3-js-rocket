/*
    Tipo de dados Boolean: para valores lógicos verdadeiro ou falso.


    true or false

    Em JavaScript, as seguintes operações retornam valores booleanos (true ou false):

    Operadores de comparação: >, <, >=, <=, ===, !==, etc.

    Operador de negação (not): !
    
    Operador de igualdade lógica (and): &&
    
    Operador de disjunção lógica (or): ||
    
    Condicional ternário: (condição) ? true : false
    
    Instrução if-else: se uma condição é avaliada como verdadeira, o código dentro do bloco if é executado e o valor retornado é true, caso contrário, o código dentro do bloco else é executado e o valor retornado é false.

*/
let a = 1;
let b = 0;

if(a==b){//false, pois  a!=b
    console.log(`É igual ${a==b}`);
}else{//true, pois a!b
    console.log(`É diferente ${a!=b}`);
}

