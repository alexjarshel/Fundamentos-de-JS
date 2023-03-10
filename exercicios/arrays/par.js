//Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

function main(){
    const numeroMax = 100;
    separaPar(numeroMax);
}

function separaPar(numeroMax){
    for(let i = 0; i<=numeroMax; i++){
        if (i%2 === 0){
            console.log(i)
        }
    }
}

main();