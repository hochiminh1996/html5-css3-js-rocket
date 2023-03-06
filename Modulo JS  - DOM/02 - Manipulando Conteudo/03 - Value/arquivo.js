
document.addEventListener("DOMContentLoaded", main);


function main() {

    let principal = document.querySelector("#principal");
    let input = document.querySelector("input");
    let btn = document.createElement("button");


    input.placeholder = "Adicionando via placeholder";
    input.style.padding = "10px";
    input.style.border = "1px solid #d9d9d9";
    input.style.outline = "none";
    input.style.borderRadius = "5px";
    input.setAttribute("id", "txt")

    btn.innerHTML = "Botão";
    btn.setAttribute("id", "btn")
    btn.style.cursor = "pointer";
    btn.style.padding = "10px";

    principal.appendChild(btn);

    document.querySelector("#btn").addEventListener("click", () => {
        validar(document.querySelector("#txt").value, principal);
    })

}


function validar(valor, principal) {
    if (valor.length > 0) {
        document.querySelector("#txt").value = "";
        document.querySelector("#txt").focus();


        if (!document.querySelector("#res")) {
            let p = document.createElement("p");
            p.setAttribute("id", "res");
            p.innerHTML = `Valor : ${valor}`;

            principal.appendChild(p);
        }

        document.querySelector("#res").innerHTML = `Valor : ${valor}`;

    } else {
        document.querySelector("#txt").focus();

        if (!document.querySelector("#res")) {
            let p = document.createElement("p");
            p.setAttribute("id", "res");
            p.textContent = "Vazio";
        }

        document.querySelector("#res").textContent = "Vazio";
    }
}