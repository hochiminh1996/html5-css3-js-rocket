document.addEventListener("DOMContentLoaded", main);

// O querySelector é útil porque ele pode buscar qualquer tipo de elemento

// pegando seletores com o querySelector
function main() {
    let element = document.querySelector("#titulo3");//busca um id
    let element2 = document.querySelector("h1");//busca uma tag
    let element3 = document.querySelector(".btn");//busca uma class

    element.textContent = "Felippe";//modificando
    element2.textContent = "C#";//modificando
    console.log(element2);//exibindo a tag no console

    
    //criando um função anônima com base na busca de uma classe via querySelector
    element3.addEventListener("click",()=>{
        alert(`${element3.value}`)
    })

}




