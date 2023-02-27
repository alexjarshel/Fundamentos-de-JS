const notas = [10, 6.5, 8, 7.5];
let resultado = 0;

for(let indice = 0; indice<notas.length;indice++){
    resultado = notas[indice] + resultado;

    if(indice == notas.length-1){
        resultado = resultado/notas.length;
    }

}

console.log(resultado);