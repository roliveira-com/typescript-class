class Car {

    // iniciando class e já requerendo um parametro
    constructor(public engine: string){

    }

    DandoPartida(){
        console.log(`Partida iniciada com o motor: ${this.engine}`)
    }

}

interface Amarela {
    
    // definindo a propriedade padraão para implmenetação da interface Amarela
    // podemos fazer com que esta propriedade seja opcional colocando o `?` logo após o nome da propriedade
    // cor?: string 
    cor: string;
}
    
///Para exportar modulo pode-se incluir a palavra `export` no inicio da classe/interface ou listar todas no final do arquivo confrome abaixo
export {Car, Amarela}