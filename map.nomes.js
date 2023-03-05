// para deixar todas as strings com letras maiusculas, usar a função toUpperCase();
// o map nesse caso percorreu todas as arrays para aplicar a função ditada acima. Serve tbm para reescrever as arrays
// foi usado o metodo array function para escrever parte do código


const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome)=> {
  return  nome.toUpperCase();
})

console.log(nomesPadronizados)