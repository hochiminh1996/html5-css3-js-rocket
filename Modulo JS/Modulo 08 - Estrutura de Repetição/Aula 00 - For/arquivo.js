/*
    Estrutura de repetição for :É uma estrutura de controle de fluxo que executa um bloco de código enquanto a condição satisfeita, ou verdadeira. Não sendo mais satisfeita a condição, sendo false, ele encerra o loop.


    FOR possui três estrutura : definição do contador, a condição e o incrementador ou decrementador

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