//objetivo é dizer o nome e aonde ou qual setor o empregador trabalha na empresa.

//definindo classe funcionário
class Funcionario{
    constructor(nome,cargo,salario){
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
}
    exibirInfo(){
        console.log(`Nome do Funcionario(a):  ${this.nome}\nCargo do Funcionário(a): ${this.cargo}\nSalário do Funcionário(a): ${this.salario}`)
    }
}
 //definindo o funcionario que será gerente.
    class Gerente extends Funcionario {
        constructor(nome, salario){
            super(nome,"Gerente", salario);
        }
    // exibindo se o  funcionário está exercendo a função.
        gerenciar() {
            console.log(`${this.nome} está gerenciando.`);
        }
    }

    //difinindo o funcionário que será desenvolvedor
    class Desenvolvedor extends Funcionario {
        constructor(nome, salario){
        super(nome,"Desenvolvedor", salario);
        }
    //exibindo se o funcionário está exercendo a função
        Desenvolver(){
            console.log(`${this.nome} Está desenvolvendo.`);

        }
}
//chamando as funções
const gerente = new Gerente ("Joseane", 15000);
gerente.exibirInfo();
gerente.gerenciar();

const dev = new Desenvolvedor ("Athos", 13000);
dev.exibirInfo();
dev.Desenvolver();