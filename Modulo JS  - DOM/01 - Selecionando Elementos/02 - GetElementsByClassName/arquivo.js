document.addEventListener("DOMContentLoaded", main);


// pegando seletores do tipo name
function main() {
    const titulo = document.getElementsByClassName("titulo");
    //  a busca por seletor class, que possui vários, retorna um coleção de html : [n é um array]

    for (let i in titulo) {
        
        if (titulo[i].textContent != undefined) {//verifica se não retorna um undefined, já que se trata de uma coleção html
            alert(titulo[i].textContent)
        }
        
    }


}




