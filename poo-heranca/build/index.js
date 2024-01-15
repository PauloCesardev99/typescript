"use strict";
class Conta {
    numero;
    titular;
    saldo;
    constructor(t) {
        this.titular = t;
        this.numero = this.gerarNumeroConta();
        this.saldo = 0;
    }
    gerarNumeroConta() {
        return Math.floor((Math.random() * 10000)) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Numero: ${this.numero}`);
    }
    Saldo() {
        return this.saldo;
    }
    deposito(valor) {
        `Você Deposito: ${this.saldo += valor}`;
    }
    Saque(valor) {
        if (this.saldo <= 0) {
            console.log("Não pode sacar");
        }
        else {
            this.saldo -= valor;
        }
    }
}
//herdando
class ContaPF extends Conta {
    cpf;
    constructor(cpf, t) {
        super(t);
        this.cpf = cpf;
    }
    info() {
        console.log("=====Conta PF - Informações ======");
        super.info();
        console.log(`CPF: ${this.cpf}`);
        console.log(`============================`);
    }
    deposito(valor) {
        if (valor <= 0) {
            console.log("Não pode depositar");
        }
        else if (valor > 1000) {
            console.log("Não pode depositar muito alto");
        }
        else {
            super.deposito(valor);
        }
    }
    SaquePF(valor) {
        if (valor > super.Saldo() || valor <= 0) {
            console.log("Não pode sacar");
        }
        else {
            super.Saque(valor);
        }
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, t) {
        super(t);
        this.cnpj = cnpj;
    }
    info() {
        console.log(`============Conta CNPJ======`);
        super.info();
        console.log(`CNPJ: ${this.cnpj}`);
        console.log(`============================`);
    }
    deposito(valor) {
        if (valor <= 0) {
            console.log("Não pode depositar");
        }
        else if (valor > 10000) {
            console.log("Não pode depositar muito alto");
        }
        else {
            super.deposito(valor);
        }
    }
    SaquePJ(valor) {
        if (valor > super.Saldo() || valor <= 0) {
            console.log(`Não pode sacar`);
        }
        else {
            super.Saque(valor);
        }
    }
}
const conta_1 = new ContaPF(532479276, "Paulo");
const conta_2 = new ContaPJ(431241, "Bruno");
conta_1.deposito(10);
conta_1.SaquePF(10);
