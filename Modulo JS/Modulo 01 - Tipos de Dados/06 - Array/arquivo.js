/*
    O tipo de dados Array, ou vetor, também é uma estrutura de dados, e consiste em uma lista de dados agrupados, um Array é denotado com os caracteres [ ] , por exemplo: [ "Leite", "Ovos", "Manteiga", 1, 2 ] .


    

 */

let paises = ["Brasil", "Rússia", "Índia", "China"];// 4 elementos. Cada elemento tem o seu valor. Coincidentemente, o nome do elemento coincide o valor. Por exemplo, o elemento Brasil tem o valor Brasil, o elemento Rússia tem o elemento Rússia

console.log(paises[3]);//china


// array de obj
let pessoa = [
    { nome: "Felippe", idade: 25 },
    { nome: "Pedro", idade: 20 },
    { nome: "Manuela", idade: 21 }
];

// Por exemplo, esse array tem 3 objetos. O nome do elemento n concide com os valores, isso porque ele tem dois atributos :nome e idade. Diferente da estrutura inicial do array, onde o nome do elemento pode concidir com o seu valor.

// acessando
console.log(pessoa[0].nome);//felippe
console.log(pessoa[1].idade);// 20









