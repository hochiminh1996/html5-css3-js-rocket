/*
    var = escopo global : local e global
    let = escopo local ou de bloco


    var está caindo em desuso.
*/


{
    let nome = "Felippe";
    // escopo de bloco
}
console.log(nome); // haverá um erro. Pois o escopo de nome é de bloco

{
    var sobrenome = "Marques";
}
console.log(sobrenome);//será possível acessar já que var tem escopo global


// exemplo de hosting (elevação)
console.log(nome); // chamando uma variável que ainda não foi criada

{
    var nome = "Felippe";
    /*
        No entanto, o var tem um comportamento diferenciado. Ele joga a variável para o topo, sem valor (undefined), e dps lê como undefined
    */
}