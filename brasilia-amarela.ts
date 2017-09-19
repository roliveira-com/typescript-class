import {Car, Amarela} from './vehicles'

export class Brasilia extends Car implements Amarela{

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