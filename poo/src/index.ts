/* Programação Orientada À objeto*/


    class Computador{

        public  nome: string;
        private  ram: number;
        private cpu: number ;
        private  ligado: boolean;

        constructor(nome:string, ram:number, cpu:number, ligado:boolean){ //automaticamente exe
            console.log("Novo computador Criado")
            this.nome = nome;
            this.ram = ram;
            this.cpu = cpu;
            this.ligado =ligado
        }

       public info():void{

            console.log(`NOME: ${this.nome}`)
            console.log(`CPU: ${this.cpu}`)
            console.log(` RAM: ${this.ram}`)
            console.log(`LIGADO ${this.ligado?"Ligado":"Desligado"}`)
            console.log("===========")
        }

        ligar():void{
            this.ligado = true;
        }

        desligar():void{
            this.ligado = false;
        }

        public UpRam(up:number):void{

            if(up<=0){
                console.log("Erro: O computador não liga")
            }else{
                this.ram = this.ram + up
            }
           

        }
    }
    //Instaciar
    const c1 = new Computador("MAC", 8, 2, false);
    const c2 = new Computador("Lenovo" ,4, 2,false);

    c1.nome = "ACER"


// Herança = Class filho herdar caracteristica da classe pai


class Conta{ //Class Pai
    public numero:number   

    public titular:string

    constructor(n:number, t:string){
        this.numero = n
        this.titular = t
        
    }
}
            //herdando
class ContaPF extends Conta{

}

class ContaPJ extends Conta{

}

const conta_1 = new ContaPF(12345, "Paulo")
const conta_2 = new ContaPJ(123456, "RiroTech")



  
   

   