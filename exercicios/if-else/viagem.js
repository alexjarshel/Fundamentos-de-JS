/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

const precoEtanol = 4.16;
const precoGasolina = 5.07 ;
const combustível = 'etanol';
const gastoMedio = 12;
const distancia = 360;

if(combustível === 'gasolina'){
    let valor = (distancia/gastoMedio)*precoGasolina;
    console.log(valor.toFixed(2));
}else{
    let valor = (distancia/gastoMedio)*precoEtanol;
    console.log(valor.toFixed(2));
}