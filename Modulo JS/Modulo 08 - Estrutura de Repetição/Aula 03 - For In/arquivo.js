/*
    Estrutura de repetição e controle de fluxo : for in


    for in : for...in é usado para percorrer as propriedades enumeráveis de um objeto.
*/



let pessoa = {
    nome: "Felippe",
    peso: 50,
    idade: 25,
}


// acessando o nome de cada propriedade (atributos) ou métodos do objeto pessoa
for (let props in pessoa) {
    console.log(props);//acessando o nomes das propriedades
    console.log(pessoa[props]);//acessando os valores das propriedades
}




