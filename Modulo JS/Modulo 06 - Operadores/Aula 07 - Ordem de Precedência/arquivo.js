/*
    Ordem de precedência dos operadores

    1 : grupo ()
    2 : negação e incremento ! e ++,--
    3 : multiplicação e divisão *,/
    4 : adição e subtração +,-
    5 : relacional >, <, >=, <=
    6 : igualdade =, !=, ===, !==
    7 : AND &&
    8 : OR  ||
    9 : condicional ?:
    10: assigment (atribuição) =, +=, -=, *=
*/

console.log(10+2/2);//11
console.log((10+2)/2);//6
console.log(10>2 && 2<10);//true. Executou primeiro os relacionais dps o lógico