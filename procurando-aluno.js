const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
        if(listaDeAlunosEMedias[0].includes(aluno)){
       // const alunos = listaDeAlunosEMedias[0];
       // const medias = listaDeAlunosEMedias[1];

       const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaAluno}`);

        }else{
            console.log("Aluno não encontrado!")
        }
        }
exibeNomeENota("Juliana");

//metódo includes() serve para conferir se o que passamos para o parametro está incluso na lista.
// neste exemplo, conferimos se o nome do aluno estava na lista.

//indexOf() serve para retornar o indice do que estamos passando para o parametro. Nesse caso, qual o indice do aluno.
