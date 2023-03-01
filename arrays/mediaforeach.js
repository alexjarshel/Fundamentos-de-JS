const notas = [10, 6.5, 8, 7.5];
let somnNotas = 0;

notas.forEach(function (nota){
    somnNotas += nota;
})
    
somnNotas = somnNotas/notas.length;

console.log(somnNotas);