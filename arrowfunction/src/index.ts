/*Arrow Function */

//function() são elevadas para o topo do código.


/* function teste():void{ //essa função foi pra cima

    console.log("teste");
}; */

//obrigatóriamente em baixo a chamada

const teste=(n:number[]):number=>{ 

    let s:number = 0;
    
    n.forEach((e)=>{s += e})

    return s;
}
let numeros:number[] = [5,5,5]

console.log(teste(numeros))

