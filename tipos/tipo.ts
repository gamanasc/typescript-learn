// TIPOS AUTOMÁTICOS =============

// string
let nome: string = 'João'
console.log(nome)
// nome = 28 <- ERRO

// numbers
let idade: number = 27
idade = 27.5
console.log(idade)

// boolean
let possuiHobbies: boolean = false
console.log(possuiHobbies)

// TIPOS EXPLÍCITOS =============

let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = '27'
// console.log(typeof minhaIdade)

// TIPOS - ARRAYS =============

let hobbies: any[] = ["Jogar", "Cozinhar", true, 0]
console.log(hobbies[0])
console.log(typeof hobbies)
console.log(hobbies)

// TIPO - ARRAY TUPLA ==========

let endereco: [string, number, string] = ["Av Principal", 99, ""]
console.log(endereco)

endereco = ["Rua teste 2", 999, "Bloco A"]
console.log(endereco)

// ENUMS =======================

enum Cor{
    Cinza,          // 0
    Verde = 100,    // 100
    Azul,           // 101
    Laranja = 10,   // 10
    Vermelho        // 11
}

let minhaCor: Cor = Cor.Azul
console.log(minhaCor)
console.log(Cor.Verde, Cor.Vermelho)

// ANY =======================

let carro: any = 'BMW'
console.log(carro)

carro = {marca: 'BMW', ano: 2019}
console.log(carro)