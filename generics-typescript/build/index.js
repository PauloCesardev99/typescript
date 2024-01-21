"use strict";
/*Generics em typescript em funções, classes*/
function f_teste(v, x) {
    return x;
}
//console.log(f_teste<number, string>(10, "Paulo"))
class C_teste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const c1 = new C_teste(3);
const c2 = new C_teste("Paulo");
console.log(c1.valor);
console.log(c2.valor);
