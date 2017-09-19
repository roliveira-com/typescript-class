import {Car,Amarela} from './vehicles';
import {Brasilia} from './brasilia-amarela';

import * as _ from 'lodash';

console.log(_.pad('Tyescript Class', 40, "+"))

//CLASSE IMPLMENETADA NO MODULO vehicle.ts
// class Car {

//     // iniciando class e já requerendo um parametro
//     constructor(public engine: string){

//     }

//     DandoPartida(){
//         console.log(`Partida iniciada com o motor: ${this.engine}`)
//     }

// }

let veicle = new Car('1.8 TSI');
veicle.DandoPartida();

//CLASSE IMPLEMENTADA NO MODULO vehicle.ts
// class Brasilia extends Car implements Amarela{

//     cor: string;

//     constructor(){
//         // acessando o parâmetros da classe pai com o operador `super` e deixando-o disponível para classe pai
//         super('1.8 8V');
//         this.cor = "amarela";
//     }

//     DandoPartida(){
//         if(Math.random() >= 0.5){
//             super.DandoPartida()
//         }else{
//             console.log('Motor falhou');
//         }
//     }

// }

let brasilia = new Brasilia();
brasilia.DandoPartida();

//INTERFACE IMPLEMENTADA NO MODULO vehicle.ts
// interface Amarela {

//     // definindo a propriedade padraão para implmenetação da interface Amarela
//     // podemos fazer com que esta propriedade seja opcional colocando o `?` logo após o nome da propriedade
//     // cor?: string 
//     cor: string;
// }

let whichBand = (Brasilia: Amarela) => Brasilia.cor == 'amarela';

console.log(`Esta Banda é: ${whichBand(brasilia) ? 'Mamonas Assassina :-)' : 'qualuqer outra banda:(' }`)