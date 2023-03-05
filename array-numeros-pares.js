//exercicio 1
const numeros = [61, 99, 90, 16, 11, 22, 3]

//exercicio 2
const nomes1 = ["Lita", "Vini", "Nize", "Bia"]
const nomes2 = ["Vini", "Van", "Bia", "Nick", "Mona"]

//exercicio 3
const nomes = ["Biu", "André", "Dani"]


function numerosPares(pares) {
    console.log("Esses são os números pares:")
    for (i = 0; i < pares.length; i++) {
        if (pares[i] % 2 === 0) {
            console.log(pares[i])
        }
    }
}

function numerosImpares(impares) {
    console.log("Esses são os números Impares:")
    for (i = 0; i < impares.length; i++) {
        if (impares[i] % 2 === 1) {
            console.log(impares[i])
        }
    }
}
numerosPares(numeros)
numerosImpares(numeros)

function imprimeValoresDoArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

function juntarArrays(arraysNomes1, arraysNomes2) {
    console.log("As arrays juntas possuem as seguintes strings:")
    let arraysJuntas = arraysNomes1.concat(arraysNomes2)
    imprimeValoresDoArray(arraysJuntas)

}
juntarArrays(nomes1, nomes2)

function arrayModificado(arrayNomes) {
    const arrayAtualizada = arrayNomes.map((nome) => {
        return `${nome} ${nome.toUpperCase()}`
    })
    console.log(`Novo array: ${arrayAtualizada}`)
}
arrayModificado(nomes)