// Desafio para informar a marca do tênis,
// o valor do tênis, 
// se é de útil para corrida ou dia-a-dia,
// se é masculino ou feminino

class Tenis {
    constructor(marca, valor, tamanho) {
        this.marca = marca;
        this.valor = valor;
        this.tamanho = tamanho;
    }

    nomeMarca() {
        console.log(`A marca do tênis é ${this.marca}`);
    }

    valorTenis() {
        console.log(`Esse tênis custa R$ ${this.valor.toFixed(2)}`);
    }

    tamanhoTenis() {

        if (this.tamanho >= 40) { //adicionando condição para saber se é tênis masculino ou feminino
            console.log(`E Esse é um tênis Masculino.`)
        }
         else {
            console.log(` E Esse tênis é Feminino. `)
        }  
    }
}
//Chamando os métodos e atribuindo valores;
let tenis = new Tenis('Nike', 280.56, 34);
tenis.nomeMarca();
tenis.valorTenis();
tenis.tamanhoTenis();
