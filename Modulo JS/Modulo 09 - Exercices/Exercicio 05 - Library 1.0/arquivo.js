document.addEventListener("DOMContentLoaded", main);//ativando a nossa função principal



const library = [//array library
    {// objeto categoria
        category: "Comunismo",
        books: [//array de livros
            {//cada livro é um objeto
                title: "O Manifesto do Partido Comunista",
                author: "Karl Marx e Fredrich Engles"
            },

            {//objeto livro
                title: "Do Socialismo Científico ao Socialismo Utópico",
                author: "Fredrich Engels"
            },

            {//objeto livro
                title: "O Capital",
                author: "Karl Marx"
            },

            {//objeto livro
                title: "A sagrada família",
                author: "Karl Marx"
            },

            {
                title: "Manuscritos econômico-filosóficos",
                author: "Karl Marx"
            }
        ]
    },

    {//objeto categoria 2
        category: "Política",
        books: [//array de livros
            {//objeto livro
                title: "Direita e Esquerda",
                author: "Norberto Bob"
            }
        ]
    },

    {
        category: "Computação",
        books: [
            {
                title: "Entendendo Algoritmos",
                author: "Aditya Y. Bhargava"
            }
        ]
    }
]


//livros disponíveis
function books_available() {
    for (let categorias of library) {
        for (let livros of categorias.books) {
            console.log(`${livros.title} - ${livros.author}`)
        }
    }
}

// Quantidade de categorias
function countCategory() {
    console.log(`Número de categorias : ${library.length}`)
    for (let categories of library) {
        console.log(`Categoria : ${categories.category}`)
    }
}

//Buscar author e livros
function findAuhor(author) {
    let booksByAuthor = [];

    for (let categorias of library) {//acessando o primeiro nível : categoria
        for (let books of categorias.books) {
            if (books.author === author) {
                booksByAuthor.push(books.title);
            }
        }
    }

    return booksByAuthor;//retorna o array
}


// Quantidade autores
function amountAuthor() {
    let authors = [];//autores

    for (let categorias of library) {//acessando o 1º nível :categoria
        for (let autor of categorias.books) {//acessando o segundo nível : books
            if (authors.indexOf(autor.author) == -1) {//se não localizar o nome do autor dentro do nosso array, ele joga o author pro array
                authors.push(autor.author)
            }
        }
    }

    return authors;

}

//função principal
function main() {
    let arrayAuthor = amountAuthor();//variável do escopo amountAuthor. Retorna um array dos autores existentes
    let author = "Karl Marx";//author buscado 
    let arrayBooksByAuthor = findAuhor(author);// função que passa o nome do autor e retorna um array com suas obras

    countCategory();//categorias da biblioteca
    books_available();//livros disponíveis na library


    //condição usada para validar a existência de um array com os livros do author pesquisado
    if (arrayBooksByAuthor.length > 0) {
        console.log(`Livros de ${author} :\n ${arrayBooksByAuthor.join(", ")}`)
    } else {
        console.log(`Não foi encontrado livros do author ${author}`)
    }

    //   autores de livros da nossa biblioteca
    console.log(`Autores de nossa biblioteca : ${arrayAuthor.join(", ")}`)
}
