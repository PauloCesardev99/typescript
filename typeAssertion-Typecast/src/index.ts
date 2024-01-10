/* Type Assertion & TypeCast*/

let nvalor: number;
let svalor: string;
let uvalor: unknown;

uvalor = 10;
svalor = "20";
nvalor = 30

svalor = nvalor.toString()

console.log(svalor)
console.log(typeof(svalor))

//Convertido
//nvalor = Number.parseInt(svalor)



//type assertion só funciona no unknown

//nvalor =<number><unknown>svalor


//console.log(typeof(nvalor))
//console.log(nvalor)
