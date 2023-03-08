const body = document.querySelector("body");
const main = document.querySelector("main");//área principal

const h1 = document.createElement("h1");//criando um elemento h1
const h2 = document.createElement('h2');// criando um elemento h2
const p = document.createElement("p");
const span = document.createElement("span");
const p2 = document.createElement("p");

h1.textContent = 'Felippe Marques';// populando
h2.textContent = "08/03/2023";// populando
p.textContent = "Um estudante de Análise e Desenvolvimento de Sistemas no IFSP";
span.textContent = "Brasil";
p2.textContent = "Outro parágrafo"

main.append(h1);//adicionando o h1
main.appendChild(h2);//adicionando h2

main.insertBefore(p,h2);// adicionando um p dentro do main e antes de um h2


main.insertBefore(span, h2.nextSibling);//adicionando um span após o h2


body.insertBefore(p2, document.querySelector("script")); // (elemento que será inserido, o último elemento)
//adicionando um parágrafo antes da tag script

