//calcular a área de um quadrado 
// exibir resultado da área

class Quadrado {
    constructor(lado) {
        this.lado = lado;
    }

    calcularArea() {
        console.log(`A área do quadrado é: ${this.lado * this.lado} cm`)
    }
}
let quadrado = new Quadrado(7);
quadrado.calcularArea();