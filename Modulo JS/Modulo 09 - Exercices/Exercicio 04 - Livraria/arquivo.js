/*
    Buscando e contando dados em Arrays => Sistema básico de biblioteca

    Baseado no array de livros por categoria, faça o seguinte desafio.
        -Contar o número de categorias e o número de livros em cada categoria
        -Contar o número de autores
        -Mostrar livros do autor Augusto Cury
        -Trasnformar a função acima em uma função que irá recceber o nome do autor e devolver os livros desse autor

*/
document.addEventListener("DOMContentLoaded", main);


//array de objetos 
const booksByCategory = [
    {//categoria coach
        category: "Coach da Faria Lima",
        books: [//books é um atributo do tipo array. Observe que cada livro é um objeto
            {
                title: "Os segredos de uma mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason"
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T."
            }
        ]
    },
    {
        category: "Auto-ajuda",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos",
                author: "Stephen R. Covey",
            },
        ],
    },
    {
        category: "Comunismo",
        books: [
            {
                title: "Manifesto do Partido Comunista",
                author: "Karl Marx"
            },
            {
                title: "Ideologia Alemã",
                author: "Karl Marx"
            },
            {
                title: "Do Socialismo Científico ao Socialismo Utópico",
                author: "Fredrich Engels"
            }
        ]
    }

]

//  1 - Contar o número de categorias e o número de livros em cada categoria
function countCategory() {
    console.log(`Quantidade de categorias : ${booksByCategory.length}`);//numero de categorias

}


//quantidade de livros por categoria
function totalByCategory() {
    for (let categories of booksByCategory) {
        console.log(`Total de livros da categoria [${categories.category}] : ${categories.books.length}`)
    }
}

// 2 - Contar o número de autores
function countAuthor() {
    let authors = [];//armazenará os titulos dos autores
    for (let categories of booksByCategory) {//irá percorrer o categoria
        for (let books of categories.books) {//irá percorrer o array livros
            if (authors.indexOf(books.author) == -1) {//Verificando se n tem o nome do author no array. 
                authors.push(books.author);//Se não tiver, ele joga o author dentro do nosso array
            }
        }
    }

    console.log(`Quantidade de autores : ${authors.length}`);
}
// 3 - Mostrar livros do autor Augusto Cury
function showBooksAugusto() {
    for (let categories of booksByCategory) {//acessando a categoria
        for (let augusto of categories.books) {//acessando o array livros
            if (augusto.author == "Augusto Cury") {//verificando se o author é = augusto
                console.log(`Livros do Augusto : ${augusto.title}`)//exibindo os livros do author desejado
            }
        }
    }
}


//4 - função que mostra livros por author
function showBooksByAuthor(author) {
    let books_author = []; // array de livros por author
    for (let categories of booksByCategory) {//acessando as categorias
        for (let books of categories.books) {//acessando livros
            if (books.author == author) {
                books_author.push(books.title);//adicionando no array o nome do livro
            }
        }
    }
    return books_author;//retorna o array para ser acessado na função que chama
}

// Função principal que acessa todas as funções
function main() {
    countCategory();//quantidade de categorias na livraria
    totalByCategory();//quantidade de livros por categoria
    countAuthor();//contanto a quantidade de autores
    showBooksAugusto();//livros escritos por augusto

    //buscando um livro de um autor especific
    let author = "George S. Clason";

    let array_livros = showBooksByAuthor(author);
    //passando um nome para uma função que verificará se há autores com esse nome. Se tiver ela irá jogar todos os livros dentro de um array e retornar um array


    if (array_livros.length >= 1) {//se o author tiver +1 livro
        console.log(`Livros de ${author} : ${array_livros.join(", ")}`);//exibindo o array com um seperador de caracteres
    } else {//se não tiver livro
        console.log(`Livro de ${author} não localizado`)
    }
}