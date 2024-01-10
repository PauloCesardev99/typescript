/* ENUM ou ENUMERADORES */

enum dias {

    domingo=0,
    segunda=1,
    terca = 2,
    quarta=3,
    quinta=4,
    sexta=5,
    sabado=6
}

//console.log(dias.domingo) //retorna 1
//console.log(dias['domingo']) //retorna 1
//console.log(dias[1]) //retorna domingo

const dia = new Date()

enum cores{
    branco = "#fff",
    preto = "#000",
    vermelho = "#f00",
    verde = "#0f0",
    azul = "#00f",
}



//console.log(dias[dia.getDay()])


enum tipoUser{
    USER,
    ADMIN,
    SUPER
}

console.log(tipoUser.USER)


const tp:tipoUser=0;



