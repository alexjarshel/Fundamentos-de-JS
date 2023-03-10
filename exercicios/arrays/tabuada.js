//Crie um programa que dado um número imprima a sua tabuada.

function main(){
    const tabuada = 2;
    CalcularTabuada(tabuada)
}

function CalcularTabuada(numero){
    for(let i = 0; i < 11; i++){
        console.log(`${i} X ${numero} = ${i*numero}`);

    }
}

main();