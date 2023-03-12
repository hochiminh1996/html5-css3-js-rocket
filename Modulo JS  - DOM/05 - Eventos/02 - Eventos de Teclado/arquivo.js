document.addEventListener("DOMContentLoaded", main);
// adicionando um evento que irá chamar a função principal ao carregar o DOM


// keydown (ou onkeydown) -> processa quando vc aperta entrer
// keyup (ou onkeyup) -> processa quando vc solta a tecla (gostei mais desse)
// keypress (ou onkeypress) -> processa quando vc pressiona

function main() {
    const input = document.querySelector("#label-1");
    input.focus();

    //keyup -> quando você solta a tecla ele processa
    // input.onkeyup = function(){
    //     alert(input.value)
    // };

    // outra forma de adicionar o evento
    // input.addEventListener("keyup",()=>{
    //     eventos(input.value);
    // });    

    input.onkeydown = function(){
        console.log(input.value);
    }


}

function eventos(campo) {
    alert(campo)
}