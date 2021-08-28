"use strict";
// TIPOS AUTOMÁTICOS =============
// string
var nome = 'João';
console.log(nome);
// nome = 28 <- ERRO
// numbers
var idade = 27;
idade = 27.5;
console.log(idade);
// boolean
var possuiHobbies = false;
console.log(possuiHobbies);
// TIPOS EXPLÍCITOS =============
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = '27'
// console.log(typeof minhaIdade)
// TIPOS - ARRAYS =============
var hobbies = ["Jogar", "Cozinhar", true, 0];
console.log(hobbies[0]);
console.log(typeof hobbies);
console.log(hobbies);
// TIPO - ARRAY TUPLA ==========
var endereco = ["Av Principal", 99, ""];
console.log(endereco);
endereco = ["Rua teste 2", 999, "Bloco A"];
console.log(endereco);
// ENUMS =======================
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul";
    Cor[Cor["Laranja"] = 10] = "Laranja";
    Cor[Cor["Vermelho"] = 11] = "Vermelho"; // 11
})(Cor || (Cor = {}));
var minhaCor = Cor.Azul;
console.log(minhaCor);
console.log(Cor.Verde, Cor.Vermelho);
// ANY =======================
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
