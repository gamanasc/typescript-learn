"use strict";
// INTERFACE
var _a;
// ---------------
function saudar(pessoa) {
    console.log("Olá, " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Lucas';
}
// 
var pessoa = {
    nome: 'João',
    idade: 27,
    saudar: function (sobrenome) {
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
    }
};
//
saudar(pessoa);
mudarNome(pessoa);
saudar(pessoa);
// saudar({nome: 'Jonas', idade: 27, altura: true})
pessoa.saudar("Gama");
// USANDO INTERFACE COM CLASSES
// ============================
var Cliente = /** @class */ (function () {
    function Cliente() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    Cliente.prototype.saudar = function (sobrenome) {
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
    };
    return Cliente;
}());
var meuCliente = new Cliente();
meuCliente.nome = 'Lugas';
meuCliente.saudar("Cama");
console.log(meuCliente.ultimaCompra);
var pessoa2 = (_a = {
        nome: 'Bia',
        idade: 31
    },
    _a["abc"] = true,
    _a);
console.log(pessoa2.abc);
var potencia;
potencia = function (base, expoente) {
    return Math.pow(base, expoente);
};
console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(Math.pow(3, 10));
