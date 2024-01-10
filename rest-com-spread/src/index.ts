/*  Rest com Spread  */



function soma(...n:number[]):number{

    let s:number =0;

    n.forEach((e)=>{ s+= e})


    return s

}

console.log(soma(5,44))

