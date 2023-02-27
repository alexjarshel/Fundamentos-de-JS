const notas = [10, 6.5, 8, 7.5];
let media = 0;

for(let nota of notas){
    media = media + nota;
    console.log(nota);
}

media = media/4;

console.log(media);