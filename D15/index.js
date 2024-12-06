// Criar duas classes "Doar", "Reflorestamento";
// o objetivo é mostrar o nome do doador, a idade do doador, o nome planta (ou muda de planta) e quantas dela foram doadas.
// adicionar uma condição para saber se a quantidade da mesma planta que se precisa no local já foi concluida.

//classe Doar
class Doar {
    constructor(nomeDoador, idadeDoador) {
        this.nomeDoador = nomeDoador,
            this.idadeDoador = idadeDoador
    }
    //método de dados do doador
    dadosDoador() {
        console.log(`O nome do(a) Doador(a) é: ${this.nomeDoador} e tem ${this.idadeDoador} anos.`)
    }

}
//classe de reflorestamento
class Reflorestamento {
    constructor(nomePlanta, quantidadePlantas) {
        this.nomePlanta = nomePlanta,
            this.quantidadePlantas = quantidadePlantas
    }

    //método plantar
    plantar(quantidade) {
        let doacao = quantidade;
        console.log(`O nome da planta é: ${this.nomePlanta} e foi doada ${doacao} mudas dessa planta.`)
        //aplicação do IF e ELSE
        if (quantidade > 10) {
            console.log(`Obrigado, Mas já temos suficientes, poderia doar outra muda?`)
        } else {
            console.log(`Obrigado! estavamos precisando muito dessa planta aqui.`)
        }
    }

}
// instância da classe doar e chamando métodos
let doar = new Doar ('Livia', 32);
doar.dadosDoador();

//instência da classe reflorestamento e chamando métodos
let reflorestamento = new Reflorestamento ('Jaboticabeira');
reflorestamento.plantar(8);