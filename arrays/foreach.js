// Arquivo procurando-aluno.js

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        console.log("ta la")

        const indice = listaDeAlunosEMedias[0].indexOf(aluno )
    }else{
        console.log("não achemo")
    }
}

exibeNomeENota('alex');