/*
    Estrutura de repetição for :
    possui três estrutura : definição do contador, a condição e o incrementador ou decrementador

    for(declaração do contador; condição; incrementar/decrementar){
        bloco
    }
*/




function tabuada(tab) {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += `${tab} x ${i} = ${tab * i} \n`;
    }

    return result;
}

console.log(tabuada(2));