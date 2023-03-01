function sayName(name){
    console.log(`Your name is ${name}`);
}

function incrementarJuros(valor, juros){
    const valorDeAcressimo = (juros/100) * valor;
    return valor + valorDeAcressimo;
}

function quadrado(valor){
    return valor * valor;
}


function main(){
    const quadradoDeDez = quadrado(10);

    console.log(quadradoDeDez);


    console.log(incrementarJuros(105,10));
    console.log(incrementarJuros(155,17));
    console.log(incrementarJuros(1505,84));

    sayName('alex');
    sayName('Maria');


}

main();