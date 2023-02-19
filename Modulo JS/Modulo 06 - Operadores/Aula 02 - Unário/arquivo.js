/*
  Operador Unário : possui apenas um operando
*/

console.log(typeof "Felippe");//typeof é o nosso unário

const person = {
    nome: "Felippe",
    age: 25
}

delete person.age;// dele é o nosso operador unário. Vai apagar um atributo

console.log(person);

