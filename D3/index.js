//objetivo é calcular o imc de uma pessoa.
// Definindo a classe;
// Definindo propriedades;
class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    // método calcularIMC definido;
    // constante para efetuar o cálculo;
    // o return foi usado para retornar o valor do método;
    //else if usado por ter 3 possiveis comparações ou mais.
    calcularIMC() {
        const imc = this.peso / (this.altura ** 2);
        if (imc < 18.5) {
            return `${this.nome} está abaixo do peso. IMC: ${imc.toFixed(2)}`;
        } else if (imc >= 18.5 && imc < 24.9) {
            return `${this.nome}  está no peso ideal. IMC: ${imc.toFixed(2)}`;
        } else {
            return `${this.nome} está acima do peso.IMC: ${imc.toFixed(2)}`;
        }
    }
}

const pessoa1 = new Pessoa('Maria', 86, 1.69);
console.log(pessoa1.calcularIMC());

const pessoa2 = new Pessoa('Jhonny', 55, 1.90);
console.log(pessoa2.calcularIMC());