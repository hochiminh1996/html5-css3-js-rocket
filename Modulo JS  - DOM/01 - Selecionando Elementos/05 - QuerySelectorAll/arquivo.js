document.addEventListener("DOMContentLoaded", main);

// O querySelector é útil porque ele pode buscar qualquer tipo de elemento

// pegando seletores com o querySelectorAll
function main() {
    let elements = document.querySelectorAll(".titulo");
    //retorna todos os seletores que tiver essa classe. Vai retornar um NodeList, que diferente de uma de lista da coleção html. Com o quarySelectorAll, você consegue percorrer de forma mais simples os elementos do q se fosse uma coleção html.

    
    // O foreach não funciona para uma coleção html que foi gerada pelo getElementsByClassName. Apenas se for uma nodelist

    elements.forEach(els => console.log(els))
}




