/*
    Casas decimais

    Observação : ao usar o toFixed() ele converte o número em string para cortar as casas decimais. Para voltar ao tipo normal, você precisa usar um Number()

    Além disso, o método replace só FUNCIONA em strings


*/

let n = 120.22344;

console.log(n.toFixed(2));; //120.22   -> Isso vai fazer o retorno ser uma string

console.log(n.replace(".",","));//Aqui ocorrerá um erro, já que o replace só funciona em string

console.log(n.toFixed(2).replace(".","."));//aqui vai funcionar a troca de "." por "," porque o toFixed vai retornar uma string.

//É possível fazer assim tb :
console.log(String(n).replace(".",","))