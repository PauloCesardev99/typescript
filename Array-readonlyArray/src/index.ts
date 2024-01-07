/*Array-Readonly*/

 let numeros: number[]= [20,30,40];
//let numeros:Array<number|string> =[2,3,4]
//let numeros:(number|string) []=[20,30,40,"Paulo"]

numeros.push(10); //adiciona no array na última posição
numeros.unshift(30); //adiciona na primeira posição

numeros.pop();//Retira o último elemento do array

numeros.shift();//Tira do ínicio do array.

    /*ReadonlyArray = Não deixa modiicar o array  */

let numeros_ro:ReadonlyArray<number>=[20,30,40,50];

console.log(numeros_ro)


