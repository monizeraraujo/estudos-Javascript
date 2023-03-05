// removendo elementos repetidos da array.
// elementos de um Set() não podem se repetir.

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes)

const nomesAtualizados = [...meuSet]

console.log(nomesAtualizados)

