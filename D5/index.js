// objetivo é controle de estoque de produtos.
//determinando a classe Produto
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    // métodos

    adicionarEstoque(qtd) {
        this.quantidade += qtd;
    }

    vender(qtd) {
        if (this.quantidade >= qtd) {
            this.quantidade == qtd;
        } else {
            console.log("ESTOQUE INSUFICIENTE.");
        }
    }
    informacoes() {
        return Produto `${this.nome}, Preço: R$ ${this.preco.toFixed(2)}, Quantidade em estoque:  ${this.quantidade}`;
    }

}

const produto1 = new Produto('Bola', 3.00, 50);
console.log(produto1.informacoes());

produto1.adicionarEstoque(30);
console.log(produto1.informacoes());

produto1.vender(15);
console.log(produto1.informacoes());

produto1.vender(200);