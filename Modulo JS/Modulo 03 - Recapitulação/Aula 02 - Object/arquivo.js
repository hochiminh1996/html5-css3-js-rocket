

let pessoa = {
    nome: "Felippe",
    idade: 25,
    cor: "Branco",
    nacionalidade: "Brasileiro",
    escolaridade: "Cursando Superior",
    status: true,

    estudar: function () {
        return `${this.nome} está estudando Javascript`;
    },

    imprimir_dados: function () {
        return `Nome : ${this.nome}, idade: ${this.idade} anos, cor: ${this.cor},
                nacionalidade: ${this.nacionalidade}, escolaridade, ${this.escolaridade}
        `
    }
}


console.log(pessoa.imprimir_dados());
console.log(pessoa.status)
// temos um objeto pessoa. Sendo que esse objeto possui alguns atributos e métodos