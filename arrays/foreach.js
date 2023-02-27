// Arquivo procurando-aluno.js

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        const [alunos,medias] = listaDeAlunosEMedias

        const indice = alunos.indexOf(aluno)

        const mediaDoAluno = listaDeAlunosEMedias[1][indice];

        console.log(`o ${aluno} tem a media de ${mediaDoAluno}`);
    }else{
        console.log("não achemo")
    }
}

exibeNomeENota('alex');