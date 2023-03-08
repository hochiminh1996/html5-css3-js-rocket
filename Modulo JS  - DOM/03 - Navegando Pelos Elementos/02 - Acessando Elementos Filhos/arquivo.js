/*
    Acessando elementos filho

*/

const pai = document.querySelector("body");


console.log(pai.children);//retorna uma coleção html (coleção não rodam o foreach)

console.log(pai.firstElementChild); // retorna o primeiro filho daquele elemento. No caso, será o header

console.log(pai.lastElementChild);// retorna o último elemento. No caso, script
