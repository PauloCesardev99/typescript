/*Generics em typescript em funções, classes*/

function f_teste<T, U>(v:T, x:U):U{

 
    return x;



}

//console.log(f_teste<number, string>(10, "Paulo"))



class C_teste<T>{

    public valor:T

    constructor(valor:T){


        this.valor = valor;

    }


}

const c1 = new C_teste<number>(3)
const c2 = new C_teste<string>("Paulo")

console.log(c1.valor)
console.log(c2.valor)