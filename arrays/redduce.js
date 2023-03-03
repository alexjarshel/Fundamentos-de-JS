const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];



function calculaMedia(sala){
    const  somaDasNotas =sala.reduce((acumulador, nota)  =>{
        return acumulador+nota;
    },0)
    const media  =  somaDasNotas/sala.length;
    return media;
}


const js = calculaMedia(salaJS);
const java = calculaMedia(salaJava);
const py = calculaMedia(salaPython);

console.log(js);
console.log(java);
console.log(py);
