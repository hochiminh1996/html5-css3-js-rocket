/*

    Operadores de comparação

    == : igual 
    === : comparação estrita
    != : diferente
    > : maior
    < : menor
    >=: maior ou igual a
    <=: menor ou igual a



*/




let one = 1;
let two = 2;

console.log(one == 1);//true
console.log(one == "1");//true
console.log(one === "1"); //false. Comparação e o tipo de dado

console.log(one!=two);// true
console.log(one!=1); //false
console.log(two!=2);// false



//operadores estritamento igual ou diferente

console.log(one != "1");//false. Pois ele considera que são iguais, mesmo o tipo sendo diferente

console.log(one!=1); // false. Pois são iguais

console.log(one !=="1");// true. Porque ele considera o tipo de dado

console.log(one > two);//false
console.log(one < two);//true
console.log(one >= two);//false
console.log(one<=two);//true
console.log(one!=two);// true