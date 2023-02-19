/*

    Manipulando arrays

 */

let techs = ["html", "css", "javascript", "c", "java"];

techs.push("Python");// adicionando um elemento no final do array
console.log(techs);

techs.unshift("HTML5");// adicionando um elemento no inicio do array
console.log(techs);

techs.pop();//removendo o ultimo elemento do array
console.log(techs);

techs.shift();//removendo do inicio
console.log(techs)

console.log(techs.slice(2, 3)); 
//vai pegar o elemento 2, mas não o 3. Isso porque o fim é exclusivo.

techs.splice(0,2); // vai remover 2 elementos contando o 0 : html e css. Vai sobrar JS, C e java.

