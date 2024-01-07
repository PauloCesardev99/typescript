"use strict";
class Curso {
    canal = null;
    curso = null;
    constructor(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
}
let c1 = new Curso("RiroTech", "Typescript");
console.log(c1.canal);
console.log(c1.curso);
/*Compilando na nova Versão Código= tsc index.ts --target 'ES2016'

tsc --target init

*/ 
