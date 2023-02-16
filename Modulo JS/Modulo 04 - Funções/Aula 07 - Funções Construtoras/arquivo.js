/*
    Função construtora é bem útil para criar um tipo especifico para o objeto desejado

    * expressão new
    * criar um novo objeto
    * this palavra chave
*/

function Person(nome) {//observe a letra maiúscula em Person (boa prática). Ele será um modelo para nosso objeto
    this.name = nome;//atributo


    // seria nosso método
    this.andar = function () {
        return `${this.name} está andando`
    }

    // USE sempre o this. Ele indica a referência de cada objeto. Podendo ter N objetos do mesmo tipo
}


const felippe = new Person("Felippe");//criando um objeto com base no construtor person
const pedro = new Person("Pedro")


console.log(felippe.name)
console.log(felippe.andar())

console.log(pedro.name)
console.log(pedro.andar())