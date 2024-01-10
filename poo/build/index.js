"use strict";
/* Programação Orientada À objeto*/
class Computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        console.log("Novo computador Criado");
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }
}
//Instaciar
const c1 = new Computador("MAC", 8, 2);
const c2 = new Computador("Lenovo", 4, 2);
