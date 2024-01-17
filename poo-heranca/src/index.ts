 abstract class Conta{ //Public acessado de qualquer lugar // private acessado somente na sua própria classe // protected acessado na própria classe e nas filhos.
    private readonly numero:number   

    protected titular:string

    private saldo: number
    
    constructor( t:string){

        this.titular = t
        this.numero = this.gerarNumeroConta()
        this.saldo = 0
        
    }

    gerarNumeroConta():number{

        return Math.floor( (Math.random()*10000)) + 1
    }

    protected info():void{
        console.log(`Titular: ${this.titular}`)
        console.log(`Numero: ${this.numero}`)
    }

    public get Saldo():number{
     return  this.saldo
    }

    public set Saldo(s){ //setter = setar um valor

        this.saldo = s;
    }

    protected deposito(valor:number){
       `Você Deposito: ${this.saldo+=valor}` 
    }

    protected Saque(valor:number){
        if(this.saldo <=0){
            console.log("Não pode sacar")
        }else{
             this.saldo-=valor
        }
    }


}

    interface tributo{
        taxatributo:number;
        taxar(t:number):void;

    }
            //herdando
class ContaPF extends Conta implements tributo{

    taxatributo = 20
    cpf:number

    constructor(cpf:number,  t:string){
        super(t)
        this.cpf = cpf
       
    }

    info(){
        console.log("=====Conta PF - Informações ======")
        super.info()
        console.log(`CPF: ${this.cpf}`)
        console.log(`============================`)
    }

     public deposito(valor: number): void {
        if(valor <=0){
            console.log("Não pode depositar")
        } else if(valor >1000){
            console.log("Não pode depositar muito alto")
           
        } else{
            super.deposito(valor)
        }
    }

    public SaquePF(valor:number):void{
        if(valor > super.Saldo || valor <=0){
            console.log("Não pode sacar")
        }else{
           super.Saque(valor)
        }
    }

    
   public taxar(t: number): void {
        this.taxatributo *= t
    }

}

class ContaPJ extends Conta{

    cnpj:number

    constructor(cnpj:number, t:string){
        super(t)
        this.cnpj = cnpj
    }


    info(){
        console.log(`============Conta CNPJ======`)
        super.info()
        console.log(`CNPJ: ${this.cnpj}`)
        console.log(`============================`)
    }


    public deposito(valor: number): void {
        if(valor <=0){
            console.log("Não pode depositar")
        }
        else if(valor >10000){
            console.log("Não pode depositar muito alto")

        } else{
            super.deposito(valor)
        }
    }

    public SaquePJ(valor:number):void{
        if(valor > super.Saldo || valor <=0){
           console.log(`Não pode sacar`) 
        }else{
           super.Saque(valor)
        }
    }




}

const conta_1 = new ContaPF(532479276, "Paulo");
const conta_2 = new ContaPJ(431241, "Bruno")


conta_1.deposito(10)

conta_1.Saldo = 25
console.log(conta_1.Saldo) //Saldo virou propriedade




