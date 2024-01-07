/* Union Types =Tipos diferentes na mesma variavel */

//let vteste:string|number|boolean; Union types
let vteste: any; //Recebe Qualquer coisa
vteste = "Paulo";
vteste = false;

let cursos: string [] = ["Typescript", "Javascript", "Angular"];
let valores =[10,200,2023]; 

cursos.push("HTML");
valores.push(25);

console.log(valores)
console.log(vteste)



