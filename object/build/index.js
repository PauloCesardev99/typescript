"use strict";
/*  Objeto */
let dados = {
    nome: "Paulo",
    idade: 25,
    status: "A",
    ola: () => {
        console.log("Olá");
    },
    info: (Nome) => {
        console.log(`Olá ${Nome}`);
    }
};
console.log(dados.nome);
console.log(typeof (dados));
dados.ola();
dados.info(dados.nome);
