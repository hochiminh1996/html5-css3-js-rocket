document.addEventListener("DOMContentLoaded", main);


function main() {
    const buttonOpenModal = document.querySelector("button#openModal");
    //capturando o elemento btn

    const modalWrapper = document.querySelector(".modal-wrapper");
    //capturando o modal invisible, que importamos com o tailwindcss

    //adicionando event de click
    buttonOpenModal.addEventListener("click", () => {
        modalWrapper.classList.remove("invisible")
    })

    //adicionando evento de mouse
    document.addEventListener("keyup", (event) => {
        const isEscKey = event.key === "Escape";
        //verifica se foi apertado a tecla esc ou escape.
        //O parâmetro event retorna todas as informações de um evento. Como nome, tipo de evento e etc.

        //se retornar true, ou seja, se encontrar o Escape digitado, ele adiciona a classe invisible.
        if (isEscKey) {
            modalWrapper.classList.add("invisible");
        }

    }
    )

}