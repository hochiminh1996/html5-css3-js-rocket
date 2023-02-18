/*

    Separando string
    
    Separa um array que o contem espaços em um novo array onde cada texto é uma posição do array. Depois transforme o array em um texto e onde era espaço adicione um _

*/


let texto = "Eu quero ser um astronauta";

let array = texto.split(" "); //Vai cortar toda vez que encontrar um espaço. Ao encontrar o espaço, ele vai transformar cada palavra em um array com indice. Por exemplo : array[0] = "Eu", array[4] = astronauta;


let montar_texto = array.join("_");// monta a frase novamente. Porém, irá incrementar o separador (_) : Eu_quero_ser_um_astronauta.



