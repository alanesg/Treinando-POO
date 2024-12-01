//Emergência
// objetivo é cadastrar o paciente; 
// levá-lo a triagem e descobrir se o caso é simples, médio ou grave.

class Paciente {
    constructor(nome, idade, genero, doenca) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
        this.doenca = doenca;
    }

    nomePaciente() {
        console.log(`O nome do(a) Paciente é: ${this.nome}`)
    }

    idadePaciente() {
        if (this.idade < 18) {
            console.log(`Visto que é menor de idade, os pais podem entrar para a consulta.`)
        } else {
            console.log(`Tem ${this.idade} anos`);
        }
    }

    generoPaciente() {
        console.log(`O Gênero é :  ${this.genero}`)
    }

    consultaPaciente() {
        if (this.doenca == 'Resfriado', 'Dor de barriga', 'dor de cabeça') {
            console.log(`O(a) Paciente está bem, só tomar o remédio e pode ir pra casa.`)
        } else {
            console.log(`o(a) Paciente está com ${this.doenca}! Para sala vermelha URGENTE!`)
        }
    }
}
let paciente = new Paciente('LUNNA', 14, 'Feminino', 'Dor de barriga');
paciente.nomePaciente();
paciente.idadePaciente();
paciente.generoPaciente();
paciente.consultaPaciente();