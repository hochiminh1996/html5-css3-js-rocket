
document.addEventListener("DOMContentLoaded", main);


function main(){
    let nome = "Felippe";
    let principal = document.querySelector("#principal");
    
    let h1 = document.createElement("h1");
    let p = document.createElement("p");

    h1.innerHTML = `Nome : ${nome} <strong>Marques</strong>`;
    h1.style.background = "#09f";
    h1.style.padding = "10px 3px";
    h1.style.color = "#e9e7ea";
    h1.style.fontFamily = "Arial";


    p.textContent = "lorem lorem lorem lorem lorem lorem lorem lorem lorem ";



    principal.appendChild(h1);
    principal.appendChild(p);
}