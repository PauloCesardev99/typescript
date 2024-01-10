"use strict";
/* ENUM ou ENUMERADORES */
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
//console.log(dias.domingo) //retorna 1
//console.log(dias['domingo']) //retorna 1
//console.log(dias[1]) //retorna domingo
const dia = new Date();
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vermelho"] = "#f00";
    cores["verde"] = "#0f0";
    cores["azul"] = "#00f";
})(cores || (cores = {}));
//console.log(dias[dia.getDay()])
var tipoUser;
(function (tipoUser) {
    tipoUser[tipoUser["USER"] = 0] = "USER";
    tipoUser[tipoUser["ADMIN"] = 1] = "ADMIN";
    tipoUser[tipoUser["SUPER"] = 2] = "SUPER";
})(tipoUser || (tipoUser = {}));
console.log(tipoUser.USER);
const tp = 0;
