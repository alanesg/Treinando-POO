// exibir o nome da pessoa e mensagem

class Pessoa {
  constructor(nome){
    this.nome = nome;
  }

  dizerOla(){
    console.log(`Olá, Bem Vindo(a) ${this.nome} !`);
  }
}
let pessoa = new Pessoa ('Akin');
pessoa.dizerOla();