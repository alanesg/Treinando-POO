//o objetivo é cadastrar informações de um cachorro.
//Definindo a classe cachorro
class Cachorro{
    constructor (nome, idade, raca) {
       this.nome = nome;
       this.idade = idade;
       this.raca = raca;
    }
    // adicionando método latir
       latir() {
           console.log(`Au au! Meu nome é: ${this.nome}.`);
       }
       // metodo aniversario com ++ para acrescentar a idade
       fazerAniversário () {
           this.idade++;
           console.log (`Tenho ${this.idade} anos`)
       }
       // metodo raca
       minhaRacaE(){
        this.raca;
        console.log (`Sou da raça: ${this.raca}`)
       }
   }
   // instância da classe e métodos
   const meuCachorro = new Cachorro ('Dones',2, 'dalmata');
   meuCachorro.latir();
   meuCachorro.fazerAniversário();
   meuCachorro.minhaRacaE();