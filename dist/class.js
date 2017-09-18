var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var veicle = new Car('1.8 TSI');
veicle.DandoPartida();
var Brasilia = /** @class */ (function (_super) {
    __extends(Brasilia, _super);
    function Brasilia() {
        var _this = 
        // acessando o parâmetros da classe pai com o operador `super` e deixando-o disponível para classe pai
        _super.call(this, '1.8 8V') || this;
        _this.cor = "amarela";
        return _this;
    }
    Brasilia.prototype.DandoPartida = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.DandoPartida.call(this);
        }
        else {
            console.log('Motor falhou');
        }
    };
    return Brasilia;
}(Car));
var brasilia = new Brasilia();
brasilia.DandoPartida();
var whichBand = function (Brasilia) { return Brasilia.cor == 'amarela'; };
console.log("Esta Banda \u00E9: " + (whichBand(brasilia) ? 'Mamonas Assassina :-)' : 'qualuqer outra banda:('));
