// o objetivo é exibir informações do livro e verificar se ele é recente

//criando objetos com propriedades. 
const livro = {
    titulo : "Percy Jackson e o labirinto",
    autor : "Rick Riordan", 
    AnoPublicacao: 2008,
    preco : 29.99,

    //exibindo e mostrando as informações utilizando uma função
    exibirInfo : function(){
        console.log(`Título: ${this.titulo}\nAutor: ${this.autor}\nAno de Publicação: ${this.AnoPublicacao}\nPreço: ${this.preco}`);
    },
    // verificação se o livro é recente
    ehRecente : function(){
        return this.AnoPublicacao > 2010;
    }
};
livro.exibirInfo ();
console.log(livro.ehRecente()); //true
