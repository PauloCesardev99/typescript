//* Objetos literais e interface */

interface curso{
    titulo:string;
    descricao:string;
    IniciarCurso?(test:string):void;
}

interface cursoProg extends curso{
    aula:number;
    MaxAlunos?:number;
}

interface cursoArtes extends curso{
    aula:number;
    MaxAlunos?:number;
}


let curso1:cursoProg
let curso2:cursoProg
let curso3:cursoArtes

function IniciarCurso(t:string):void{

    console.log("Tes")
}

curso1={
    titulo:"TypeScript",
    descricao:"Curso de typescript",
    aula:20,
    MaxAlunos:30,
    IniciarCurso(t:string){}
}

curso2={
    titulo:"Javascript",
    descricao:"Curso de Javascript",
    aula:40,
    MaxAlunos:10,
    IniciarCurso(t:string){}
}


curso3={
    titulo:"c++",
    descricao:"Curso de c++",
    aula:40,
    IniciarCurso(t:string){}
}

console.log(curso1)
console.log(curso2)
console.log(curso3)