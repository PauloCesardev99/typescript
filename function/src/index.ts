/*Functions*/

function logar(user:string, pass:string):void{


  

}



function soma2(n1:number, n2:number):number{

    let resultado:number = n1+n2
    return resultado;

};

const nres:number = soma2(10,2);
let s_res: string;

s_res = nres.toString()

//Parametro padrão
function soma(n1:number =0, n2:number =0):number{

    return n1+n2;
};

//Parametro opcional
function novoUser(user:string, pass:string, nome?:string):void{

    let dados ={
        user,pass,nome
    }

    console.log(dados);
}

novoUser("Paulo", "HelloWorld");

