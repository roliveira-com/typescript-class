
//Declarando um função e setando so tipos de parametro e retorno da função
let theFunction = function(theProperty:number): boolean{
    return theProperty == 100;
}
console.log(theFunction(100));

//Declarando a função usando a notação Arrow Function
let theArrowFunction = (theProperty: string) => console.log(`Imprimindo ${theProperty}`)

///Declarando função e setando um valor padrão do parâmetro
function theStandartParameterFunction (speed: number, limit: number = 50) : boolean {
    return speed < limit;
}
console.log(`Você${theStandartParameterFunction(113, 120) ? ' não tomou ' : ' tomou '}uma multa`);