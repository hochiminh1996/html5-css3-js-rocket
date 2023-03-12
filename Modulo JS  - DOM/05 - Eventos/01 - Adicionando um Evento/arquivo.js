document.addEventListener("DOMContentLoaded", main);
// adicionando um evento que irá chamar a função principal ao carregar o DOM



function main() {
    const main = document.querySelector("#principal");

    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const input = document.createElement("input");
    const btn = document.createElement("input");




    h1.setAttribute("id", "titulo-01");
    h1.textContent = "Olá, mundo";
    h2.textContent = "Título N2";
    input.placeholder = "Digite um valor";
    input.style.padding = "10px";
    input.style.border = "1px solid #d9d9d9";
    input.style.borderRadius = "5px";
    input.style.outline = "none";
    btn.type = "button";
    btn.value = "Botão";
    btn.style.padding = "10px";
    btn.style.border = "1px solid #d9d9d9";
    btn.style.borderRadius = "5px";
    btn.style.cursor = "pointer";

    main.append(h1);//adicionando um elemento
    main.insertBefore(h2, h1.nextSibling);//adicionando um elemento após o h1

    main.appendChild(input);
    main.appendChild(btn);

    // adicionando um evento do tipo de mouse 
    btn.addEventListener("mouseover", () => {
        eventos();
    })

  

   


}

function eventos() {
    alert("Olá, amigo. Você ativou um evento");
}