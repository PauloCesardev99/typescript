"use strict";
/*Functions*/
function logar(user, pass) {
}
function soma2(n1, n2) {
    let resultado = n1 + n2;
    return resultado;
}
;
const nres = soma2(10, 2);
let s_res;
s_res = nres.toString();
//Parametro padrão
function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
}
;
//Parametro opcional
function novoUser(user, pass, nome) {
    let dados = {
        user, pass, nome
    };
    console.log(dados);
}
novoUser("Paulo", "HelloWorld");
