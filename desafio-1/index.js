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
    }
}
// instância da classe e métodos
const meuCachorro = new Cachorro ('Dones', 2, 'dalmata');
meuCachorro.latir();
meuCachorro.fazerAniversário();
console.log(meuCachorro.idade);