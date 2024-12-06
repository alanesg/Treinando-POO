//Criar uma classe cinema
//objetivo é exibit o nome do filme e mostrar a quantidade de ingressos vendidos

class Cinema {
    constructor(nomeFilme, precoIngressos) {
        this.nomeFilme = nomeFilme;
        this.precoIngressos = precoIngressos;
        this.quantidadeIngressos = 0;
    }
    //métodos 
    filme(){
        console.log(`O nome do Filme é: ${this.nomeFilme}`)
    }
    //métodos 
    venderIngresso(quantidade) {
      let venda = this.precoIngressos * quantidade; // para calcular
       console.log(`Venda Realizada. Total = R$ ${venda.toFixed(2)}`) // exibir
    }

}
//chamada;
let cinema = new Cinema ('Up - Altas aventuras', 52.00);
cinema.filme();
cinema.venderIngresso(32);