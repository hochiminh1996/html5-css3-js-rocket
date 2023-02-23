document.addEventListener("DOMContentLoaded", main); // acionando nossa função principal


//nosso array de objetos => library
const library = [
    {//temos um objeto chamado categoria
        category: "Ficção Científica",
        books: [//aqui temos um array de livros. Cada livro é um objeto
            {
                title: "Revolução dos Bichos",
                author: "George Orwell"
            },

            {
                title: "A Máquina do Tempo",
                author: "H.G Wells"
            },

            {
                title: "A Guerra Dos Mundos",
                author: "H.G Wells"
            },

            {
                title: "1984",
                author: "George Orwell"
            }
        ]
    },

    //categoria 2
    {
        category: "Política",
        books: [
            {
                title: "O Novo Iluminismo: Em defesa da razão, da ciência e do humanismo",
                author: "Steven Pinker"
            },

            {
                title: "Raízes do Brasil",
                author: "Sérgio Buarque de Holanda"
            },

            {
                title: "Diplomacia",
                author: "Henry Kissinger"
            }
        ]
    },

    //categoria 3
    {
        category: "Comunismo",
        books: [
            {
                title: "O Manifesto do Partido Comunista",
                author: "Karl Marx e Fredrich Engles"
            },

            {
                title: "Do Socialismo Científico ao Socialismo Utópico",
                author: "Fredrich Engels"
            },

            {
                title: "O Capital",
                author: "Karl Marx"
            },

            {
                title: "Manuscritos econômico-filosóficos",
                author: "Karl Marx"
            },

            {
                title: "O Estado e a Revolução",
                author: "Vladimir Lenin"
            }
        ]
    }
]


//exibir livros da biblioteca
function viewBooks() {
    for (let categorias of library) {//
        for (let books of categorias.books) {
            console.log(`Categoria : [${categorias.category}] : ${books.title}`);
        }
    }
}

//conta a quantidade categorias
function countCategory() {
    console.log(`Quantidad de categorias : ${library.length}`);//faz um count dentro do nosso array

    for (let categorias of library) {
        console.log(`Categoria : ${categorias.category}`)
    }
}

// Encontrar livros do author
function findAuthor(author) {
    let booksByAuthor = [];// vai armazenar os livros do author. Se houver


    for (let categorias of library) {//vai percorrer o nosso array que é constituito de objetos

        for (let books of categorias.books) {//vai acessar os arrays books do objeto categoria
            if (author.toLowerCase() == books.author.toLowerCase()) {//já adicionando o tratamento de case sensentive
                booksByAuthor.push(`${books.author} - ${books.title}`);
                //se existir o autor, ele vai jogar todos os livros dentro no nosso array criado nessa função

            }
        }
    }

    return booksByAuthor; // retorna um array de livros do author buscado, ou um array vazio
}


//quantidade de authores
function countAuthors() {
    let total_authors = []; // array de autores

    for (let categorias of library) {//vai percorrer o nosso array principal
        for (let autores of categorias.books) {//vai acessar os arrays dos objetos categoria
            if (total_authors.indexOf(autores.author) == -1) {//-1 significa q ele não encontrou o "autor" dentro do nosso array criado. Ai ele adiciona
                total_authors.push(autores.author);

            }
        }
    }

    return total_authors;  //retorna um array com a q uantidade total de autores
}


//verificar se um livro existe
function booksExists(book) {

    for (let livraria of library) {//acessa o nosso array que é formado por diversos obj
        for (let books of livraria.books) {//acessa os arrays de cada cadegoria
            if (book.toLowerCase() == books.title.toLowerCase()) {//verifica se o livro existe dentro do nosso array
                return `Localizado : ${books.title}, ${books.author}`;
                //retorna o livro, se houver
            }

        }
    }

}


// adicionadno uma nova categoria (IMPORTANTE)
function addCategory(categoria) {

    // Vamos rodar todos os atributos dos objetos category
    for (let categories of library) {
        if (categories.category == categoria) {//verifica se a categoria que queremos já existe dentro do nosso array library
            // Se sim, exibe uma mensagem informando que a categoria já existe e encerra a função
            console.log("Categoria já existente");
            return;// esse return; vai encerrar a função imediatamente, não vai executar outros blocos dessa função
        }
    }

    //   Se chegar até aqui, significa que o nosso parâmetro não foi encontrado e o return; não fechou a função
    const newCategory = {
        category: categoria,
        books: []
    }

    library.push(newCategory);//adicionando uma nova categoria
    console.log(`A categoria ${categoria} foi adicionada.`);


}


// Adicionando livros a uma categoria
function addBooks(categoria, author, book) {
    for (let categories of library) {
        if (categories.category.toLowerCase() == categoria.toLowerCase()) {
            //verificando se a categoria existe. Se sim, podemos partir para a verificação do livro, se ele também já existe. Nesse caso, teremos que percorrer o array books dentro do objeto categoria
            for (let books of categories.books) {
                if (book.length == 0) {//verifica se não está vazia a string
                    console.log(`Você não digitou o livro`);
                    return;// return é ÓTIMO. Ele sai da função e n executa + nada se ele entrar nesse if
                } else
                    if (books.title == book) {//se ele localizar o livro dentro da biblioteca
                        console.log(`O livro ${books.title} já existe`);
                        return;//encerra a função na hora.
                    }
            }

            //criando um objeto livro
            const newBook = {
                title: book,
                author: author
            }

            //adicionado o livro dentro da biblioteca => library
            categories.books.push(newBook);
            console.log(`${book} adicionado com sucesso`);
            return;//encerra a função
        }


    }

    //cai aqui se a categoria não existir
    console.log("Categoria não existe. Você precisa criá-lá antes")
}

// função principal -> descomente o código
function main() {
    let search, name, total_authors, add_categoria;

    // countCategory();// função que conta as categorias e exibie as categorias existentes
    // viewBooks();;// função exibe todos os livros

    name = "karl marx";
    search = findAuthor(name);// passa um nome a função retornará um array se ele encontrar

    //condicional referente a busca de livros de um autor especifico
    if (search.length > 0) {
        // console.log(`Encontado : livros de ${name} \n ${search.join(", ")}`);
    } else {
        // console.log(`Livro do author ${name} não localizado`)
    }


    //aqui estamos chamando uma função que retorna um array com a quantidade total de autores e seus nomes
    // console.log(`Autor : ${countAuthors().join("\n")}`)


    //aqui estamos chamando uma função, utilizando um argumento, que retornará o livro se ele existir na nossa biblioteca
    // console.log(booksExists("1984"));

    //adiciona uma nova categoria

    // add_categoria = addCategory("Comunismo");//testando com uma categoria já existente
    // add_categoria = addCategory("Socialismo");
    // add_categoria = addCategory("Marxismo");

    // countCategory();

    // adicionando livros em uma categoria. Passa 3 parâmetros. Ele vai verificar se a categoria passada existe. Se existir, ele verifica se o livro passada já existe. Se existir categoria e n o titulo do livro, ai ele adiciona dentro da biblioteca

    addBooks("Comunismo", "Kramptin", "O Manifesto do Partido Comunista");
    addBooks("Ficção Científica", "Gerge Orwell", "1984");
    addBooks("Comunismo", "Lenin", "O Estado e a Revolução");/////


    viewBooks();//retorna todo os livros da biblioteca

}