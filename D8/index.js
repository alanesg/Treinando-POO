// Calculadora de Desconto em Compras

// Definindo classe
class Compra {
    constructor(valor, desconto){
        this.valor = valor;
        this.desconto = desconto;
    }

    //Definindo métodos
    calcularDesconto(){ 
 if (this.desconto <0 || this.desconto > 100){
    return "Desconto inválido.";
    }
    const valorFinal = this.valor - (this.valor * (this.desconto/100));
    return `Valor final: R$ ${valorFinal.toFixed(2)}`;
  }
}
//chamando as funções
const compra1 = new Compra (300, 15);
console.log(compra1.calcularDesconto());

const compra2 = new Compra(1000 , 50);
console.log(compra2.calcularDesconto());

