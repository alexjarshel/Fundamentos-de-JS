//Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const lista = ["alex", "maria", "mauren"]

for(let i = 0; i < lista.length; i++){
    if(lista[i][0] == 'm'){
        console.log(lista[i])
    }
}