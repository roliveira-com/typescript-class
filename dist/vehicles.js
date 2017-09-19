"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    // iniciando class e já requerendo um parametro
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.DandoPartida = function () {
        console.log("Partida iniciada com o motor: " + this.engine);
    };
    return Car;
}());
exports.Car = Car;
