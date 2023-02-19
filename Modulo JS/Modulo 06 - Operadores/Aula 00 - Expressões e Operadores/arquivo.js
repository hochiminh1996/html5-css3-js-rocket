/*
  Expressões e operadores
  
  - Expressões 
  - Operadores
    Binary : n1 + n2 (dois valores e um operador) : Um operador binário é um operador que recebe dois operandos e realiza uma operação entre eles,       retornando um resultado.
    
    Unitary : n++, typeof(variavel)
    Ternary : idade>=18? "Maior de idade" : "Menor de idade" 
*/

let number = 1; //expressão
let idade = 18;


//Exemplo de uma função auto executável, expressão.
(function(){
  console.log("Olá")
})(); 


console.log(idade>=18? "Maior de idade" : "Menor de idade"); // ternário : 3 expressões