/* Programação Orientada À objeto*/


    class Computador{

        nome: string;
        ram: number;
        cpu: number ;
        ligado: boolean;

        constructor(nome:string, ram:number, cpu:number){ //automaticamente exe
            console.log("Novo computador Criado")
            this.nome = nome;
            this.ram = ram;
            this.cpu = cpu;
            this.ligado =false;
        }




    }
    //Instaciar
    const c1 = new Computador("MAC", 8, 2);
    const c2 = new Computador("Lenovo" ,4, 2);

   