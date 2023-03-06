
document.addEventListener("DOMContentLoaded", main);


function main(){
    let principal = document.querySelector("#principal");
    let titulo = document.createElement("h1");

    if(!document.querySelector("#titulo")){
        titulo.textContent = "Olá, mundo";//adicionando texto
        principal.appendChild(titulo);
    }

}