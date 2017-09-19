"use strict";
exports.__esModule = true;
var vehicles_1 = require("./vehicles");
var brasilia_amarela_1 = require("./brasilia-amarela");
var _ = require("lodash");
console.log(_.pad('Tyescript Class', 40, "+"));
//CLASSE IMPLMENETADA NO MODULO vehicle.ts
// class Car {
//     // iniciando class e já requerendo um parametro
//     constructor(public engine: string){
//     }
//     DandoPartida(){
//         console.log(`Partida iniciada com o motor: ${this.engine}`)
//     }
// }
var veicle = new vehicles_1.Car('1.8 TSI');
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
var brasilia = new brasilia_amarela_1.Brasilia();
brasilia.DandoPartida();
//INTERFACE IMPLEMENTADA NO MODULO vehicle.ts
// interface Amarela {
//     // definindo a propriedade padraão para implmenetação da interface Amarela
//     // podemos fazer com que esta propriedade seja opcional colocando o `?` logo após o nome da propriedade
//     // cor?: string 
//     cor: string;
// }
var whichBand = function (Brasilia) { return Brasilia.cor == 'amarela'; };
console.log("Esta Banda \u00E9: " + (whichBand(brasilia) ? 'Mamonas Assassina :-)' : 'qualuqer outra banda:('));
