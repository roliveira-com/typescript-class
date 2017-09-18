class Car {

    // iniciando class e já requerendo um parametro
    constructor(public engine: string){

    }

    DandoPartida(){
        console.log(`Partida iniciada com o motor: ${this.engine}`)
    }

}

let veicle = new Car('1.8 TSI');
veicle.DandoPartida();

class Brasilia extends Car implements Amarela{

    cor: string;

    constructor(){
        // acessando o parâmetros da classe pai com o operador `super` e deixando-o disponível para classe pai
        super('1.8 8V');
        this.cor = "amarela";
    }

    DandoPartida(){
        if(Math.random() >= 0.5){
            super.DandoPartida()
        }else{
            console.log('Motor falhou');
        }
    }

}

let brasilia = new Brasilia();
brasilia.DandoPartida();

interface Amarela {

    // definindo a propriedade padraão para implmenetação da interface Amarela
    // podemos fazer com que esta propriedade seja opcional colocando o `?` logo após o nome da propriedade
    // cor?: string 
    cor: string;
}

let whichBand = (Brasilia: Amarela) => Brasilia.cor == 'amarela';

console.log(`Esta Banda é: ${whichBand(brasilia) ? 'Mamonas Assassina :-)' : 'qualuqer outra banda:(' }`)