"use strict";
/* Type Assertion & TypeCast*/
let nvalor;
let svalor;
let uvalor;
uvalor = 10;
svalor = "20";
nvalor = 30;
svalor = nvalor.toString();
console.log(svalor);
console.log(typeof (svalor));
//Convertido
//nvalor = Number.parseInt(svalor)
//type assertion só funciona no unknown
//nvalor =<number><unknown>svalor
//console.log(typeof(nvalor))
//console.log(nvalor)
