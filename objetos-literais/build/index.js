"use strict";
//* Objetos literais e interface */
let curso1;
let curso2;
let curso3;
function IniciarCurso(t) {
    console.log("Tes");
}
curso1 = {
    titulo: "TypeScript",
    descricao: "Curso de typescript",
    aula: 20,
    MaxAlunos: 30,
    IniciarCurso(t) { }
};
curso2 = {
    titulo: "Javascript",
    descricao: "Curso de Javascript",
    aula: 40,
    MaxAlunos: 10,
    IniciarCurso(t) { }
};
curso3 = {
    titulo: "c++",
    descricao: "Curso de c++",
    aula: 40,
    IniciarCurso(t) { }
};
console.log(curso1);
console.log(curso2);
console.log(curso3);
