// Objetivo é calcular a Média de um aluno e dizer se está aprovado ou reprovado.
// definindo a classe ALUNO
class Aluno {
    constructor(nome, nota1, nota2) {
        this.nome = nome; // nome do aluno
        this.nota1 = nota1; // primeira nota
        this.nota2 = nota2; // segunda nota
    }
    //método para calcular a média
    calcularMedia() {
        const media = (this.nota1 + this.nota2) / 2;
        if (media >= 7) {
            return `${this.nome} está Aprovado(a)! Média: ${media.toFixed(1)}`;
        } else {
            return `${this.nome} está REPROVADO(A)! Média:  ${media.toFixed(1)}`;
        }

    }
}

const pessoa1 = new Aluno ('Apolo', 5.0, 10.0);
console.log(pessoa1.calcularMedia());

const pessoa2 = new Aluno ('Beatrix', 8.5 , 8.5);
console.log(pessoa2.calcularMedia());