"use strict";
/* Programação Orientada À objeto*/
class Computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu, ligado) {
        console.log("Novo computador Criado");
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = ligado;
    }
    info() {
        console.log(`NOME: ${this.nome}`);
        console.log(`CPU: ${this.cpu}`);
        console.log(` RAM: ${this.ram}`);
        console.log(`LIGADO ${this.ligado ? "Ligado" : "Desligado"}`);
        console.log("===========");
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    UpRam(up) {
        if (up <= 0) {
            console.log("Erro: O computador não liga");
        }
        else {
            this.ram = this.ram + up;
        }
    }
}
//Instaciar
const c1 = new Computador("MAC", 8, 2, false);
const c2 = new Computador("Lenovo", 4, 2, false);
c1.nome = "ACER";
// Herança = Class filho herdar caracteristica da classe pai
class Conta {
    numero;
    titular;
    constructor(n, t) {
        this.numero = n;
        this.titular = t;
    }
}
//herdando
class ContaPF extends Conta {
}
class ContaPJ extends Conta {
}
const conta_1 = new ContaPF(12345, "Paulo");
const conta_2 = new ContaPJ(123456, "RiroTech");
