"use strict";
/*  Rest com Spread  */
function soma(...n) {
    let s = 0;
    n.forEach((e) => { s += e; });
    return s;
}
console.log(soma(5, 44));
