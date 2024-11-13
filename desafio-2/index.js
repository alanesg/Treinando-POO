class contaBancaria{
    constructor (titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de ${valor} realizado com sucesso.`);
    }

    sacar (valor){
       if(valor > this.saldo){
        console.log('saldo insuficiente.');
       } else {
        this.saldo -= valor;
        console.log(` "Saque de ${valor} realizado com sucesso.`);
       } 
    }

    verSaldo () {
      console.log(`Saque de ${this.titular}: R$ ${this.saldo}`); 
    }
} 

    const minhaConta = new contaBancaria ('Alanes', 2000);
   minhaConta.verSaldo();
    minhaConta.depositar(800);
    minhaConta.sacar(200);
    minhaConta.verSaldo();
    minhaConta.sacar(2024);



