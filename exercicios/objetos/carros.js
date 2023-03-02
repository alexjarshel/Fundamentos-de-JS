/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */

class Carro {

    marca;
    cor;
    gastoDeCombustivel;

    constructor(marca, cor, gastoDeCombustivel, modelo){
        this.modelo = modelo
        this.cor = cor;
        this.marca = marca;
        this.gastoDeCombustivel = gastoDeCombustivel;
    }
}

function calculaGasto(km, precoCombustivel, gastoDeCombustivel){
    gasto = (km/gastoDeCombustivel) * precoCombustivel;
    return gasto;
}

function imprimeGasto(carro, gasto, km){
    console.log(`seu ${carro.marca} ${carro.modelo} de cor ${carro.cor} gasta ${gasto.toFixed(2)}R$ de combustivel em uma viajem de ${km}KM!`)
}

function main(){
    const marca = "chevrolet";
    const cor = "preto";
    const consumo = 6;
    const modelo = "opala";
    let km =  360;
    let precoCombustivel = 5.07;


    const opala = new Carro(marca, cor, consumo, modelo);
    const gasto = calculaGasto(km, precoCombustivel, consumo);
    imprimeGasto(opala, gasto, km);
}

main()