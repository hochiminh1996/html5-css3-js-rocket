

let subject; //undefineid

function createThink(){
    subject = "Criando um pensamento";
    // OBS : se não definir o LET ou CONST, a variável subject será escopo global, já tem outra fora.

    return subject;
}
console.log(subject);// retorna undefined
console.log(createThink())//retorna "criando um pensamento";
console.log(subject); // retorna "criando um pensamento"