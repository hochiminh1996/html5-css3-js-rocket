/*

    Estrutura de controle de exceção.

    Sempre use throw, try e catch

*/


// temos uma função e dentro dela estamos criando um erro, caso o nome esteja vazio
function sayMyName(name = ""){
    if(name == ""){
        throw new Error("Nome vazio")
    }

    console.log("Após o erro");
}



// a estrutura try vai tentar executar a função. Se der tudo certo, passa. Caso ocorra algum erro, o catch captura o erro identificado
try{
    sayMyName("")
}catch(e){
    console.log(`Erro capturado ${e}`);//vai retornar nome vazio
}