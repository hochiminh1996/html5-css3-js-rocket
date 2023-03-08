/*
    Adicionando elementos

*/

const div = document.createElement("div");
const h1  = document.createElement("h1");
const p  = document.createElement("p");
const p1 = document.createElement("p");


div.setAttribute("id", "principal");
h1.textContent = "Olá, mundo";
p.textContent = "Olá, amigos";
p1.textContent = "Adicionando antes";

document.querySelector("body").append(div);//adicionando a div
div.appendChild(h1);
div.appendChild(p);

div.prepend(p1);//adiciona antes do nosso elemento div






