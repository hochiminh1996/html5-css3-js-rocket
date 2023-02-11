/*
    O tipo de dado Object (não primitivo) é uma estrutura de dados contendo atributos, ou propriedades, e métodos, ou funcionalidades. Um objeto é denotado com os caracteres { }, atributos e métodos com nome: valor . Por exemplo { nome: "João", idade: 20 }.




*/

// definição simples de objeto
let pessoa = {
    nome: "Felippe",//atribuito e valor
    idade: 25,
    sexo: "Masculino",
    cor: "Pardo",
    estudar: function () {//nosso método do objeto pessoa
        return `${this.nome} está estudando nesse exato momento`;
    }

}


// Uma estrutura de dados que representa uma entidade do mundo real. Essa entidade possui atributos, valores e métodos.

console.log(pessoa.estudar());