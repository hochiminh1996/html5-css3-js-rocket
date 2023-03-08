/* adicionando elemento no meio de dois */

const header = document.querySelector("header");

const p = document.createElement("p");//criando elemento
const p2 = document.createElement("p");

p.textContent = "Olá amigos do Brasil";// populando elemento
p2.textContent = "Estamos aprendendo javascript"



const p1 = document.querySelector("header p");
// esse elemento será a nossa referência. Ou seja, ele vai buscar um 'p' dentro de um 'header'. Ele será a referência do último elemento quando formos adicionar um novo elemento ao meio.  


header.insertBefore(p, p1);
//dois argumentos : o 1º é o elemento que será inserido, o 2º é o último elemento. E, como você pode observar, um novo elemento foi adicionado entre o header e o p1.


//inserindo um elemento 
header.insertBefore(p2, p1.nextSibling);
//O 1º argumento é o que queremos inserir, o 2º é o último elemento. Ou seja, iremos adicionar um novo elemento após o p1. Ai pecisamos chamar o atributo nextSibling








