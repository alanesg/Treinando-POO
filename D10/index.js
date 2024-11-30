// exibir o nome do gato e a cor
// se for adulto mensagem "adulto"
//se for um bebê mensagem "filhote"

//definido classe GATO
class Gato {
    constructor(nome, idade) { // construtor com propriedades
        this.nome = nome; //propriedade para nome
        this.idade = idade; // propriedade para idade
    }

    //métodos

    nomeGato() { //método gato
        console.log(`o nome do gato é ${this.nome}`);
    }

    idadeGato() { // método para idade do gato

        if (this.idade > 3) { //condicional if e else
            console.log(`${this.nome} é um gato adulto.`);
        }
        else {
            console.log(`${this.nome} é um gato filhote.`);
        }
    }
}
//chamada
let gato = new Gato ('Bolinha', 1); //exibe o nome e a idade.
gato.nomeGato(); // chama o método nomeGato
gato.idadeGato(); // chama o método idadeGato