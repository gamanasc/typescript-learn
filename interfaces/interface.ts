// INTERFACE

interface Pessoa{
    nome: string,
    idade?: number
    [prop: string]: any

    saudar(sobrenome: string): void
}

// ---------------

function saudar(pessoa: Pessoa ){
    console.log("Olá, "+pessoa.nome)
}

function mudarNome(pessoa: Pessoa){
    pessoa.nome = 'Lucas';
}

// 

const pessoa: Pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string){
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome)
    }
}

//

saudar(pessoa)
mudarNome(pessoa)
saudar(pessoa)
// saudar({nome: 'Jonas', idade: 27, altura: true})
pessoa.saudar("Gama")


// USANDO INTERFACE COM CLASSES
// ============================

class Cliente implements Pessoa{
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string){
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Lugas'
meuCliente.saudar("Cama");
console.log(meuCliente.ultimaCompra)

const pessoa2 = {
    nome: 'Bia',
    idade: 31,
    ["abc"]: true
}

console.log(pessoa2.abc);

// USANDO INTERFACE COM FUNÇÕES
// ============================

interface FuncaoCalculo{
    // FUNÇÃO GENÉRICA COM PARAMETROS E RETORNO DO TIPO NUMBER
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, expoente: number): number {
    return base ** expoente 
}

console.log(potencia(3 , 10))
console.log(3 ** 10 )
console.log(Math.pow(3, 10))