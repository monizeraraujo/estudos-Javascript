//o metodo map() não altera o array original.
// necessário atribuir o retorno do map() para um novo array.

const notas = [10, 9.5, 8, 7, 6];

notasAtualizadas = notas.map((nota)=> {
    return nota + 1 >= 10 ? 10 : nota + 1;
})

console.log(notasAtualizadas)