const conjuntoDeNumeros = [5,50,35,66,7]

let i = 0;

function gets(){
    const valor = conjuntoDeNumeros[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto)
}

module.exports = {
    gets : gets,
    print : print
}