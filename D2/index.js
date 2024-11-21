// Objetivo: Conta bancária. dizer o valor do depósito e saque.
//definindo a classe
class contaBancaria {
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }


// metodos : depositar, sacar, ver saldo
    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de ${valor} realizado com sucesso.`);
    }


// condição para o saldo ser insuficiente ou nao
    sacar(valor) {
        if (valor > this.saldo) {
            console.log('saldo insuficiente.');
        } else {
            this.saldo -= valor;
            console.log(` Saque de ${valor} realizado com sucesso.`);
        }
    }

    verSaldo() {
        console.log(`Saque de ${this.titular}: R$ ${this.saldo}`);
    }
}
//instâncias ou retornos.
const minhaConta = new contaBancaria('Alanes', 2000);
minhaConta.verSaldo();
minhaConta.depositar(800);
minhaConta.sacar(200);
minhaConta.verSaldo();
minhaConta.sacar(2024);