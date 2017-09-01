//Declarando um função e setando so tipos de parametro e retorno da função
var theFunction = function (theProperty) {
    return theProperty == 100;
};
console.log(theFunction(100));
//Declarando a função usando a notação Arrow Function
var theArrowFunction = function (theProperty) { return console.log("Imprimindo " + theProperty); };
///Declarando função e setando um valor padrão do parâmetro
function theStandartParameterFunction(speed, limit) {
    if (limit === void 0) { limit = 50; }
    return speed < limit;
}
console.log("Voc\u00EA" + (theStandartParameterFunction(113, 120) ? ' não tomou ' : ' tomou ') + "uma multa");
