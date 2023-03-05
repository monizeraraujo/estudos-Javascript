const brinquedos = [" Boneca", " Pelucia", " Bola", " Skate", " Massinha"]
const precos = [22, 17, 10, 50, 8]
const brinquedosEPrecos = [brinquedos, precos]

function exibeBrinquedosEPrecos(arraysBrinquedosEPrecos){
    console.log(`Brinquedos e seus preços disponíveis para venda:`)
    for(let i = 0; i < arraysBrinquedosEPrecos[0].length; i++){
        console.log(`O brinquedo ${arraysBrinquedosEPrecos[0][i]} custa R$${arraysBrinquedosEPrecos[1][i].toFixed(2)}`) 
    }
}

//exibeBrinquedosEPrecos(brinquedosEPrecos)

// const brinquedos2 = ["Urso", " bicicleta", " Bola", " Skate", " Massinha"]
// const precos2 = [22, 17, 10, 50, 8]
// const brinquedosEPrecos2 = [brinquedos2, precos2]

 //exibeBrinquedosEPrecos(brinquedosEPrecos2)
//----------------------------------------------------------------------------------
function exibeSomaPrecos(precosAtualizados){
    let soma = 0;
    for(let i = 0; i < precosAtualizados.length; i++){
        //soma += precosAtualizados[i]
        soma = soma + precosAtualizados[i]
    }
    let textoParaMostrarNoConsole = `O valor de todos os brinquedos é R$${soma.toFixed(2)}`
    console.log(textoParaMostrarNoConsole)
}
exibeSomaPrecos(precos)

function adicionaBrinquedosEPrecosNaLista(arrayBrinquedos, arrayPrecos, novoBrinquedo, precoNovoBrinquedo){
    arrayBrinquedos.push(novoBrinquedo)
    arrayPrecos.push(precoNovoBrinquedo)

    console.log(`Nova lista de brinquedos: ${arrayBrinquedos}`)
    console.log(`Nova lista de preços ${arrayPrecos}`)
}

let carrinho = "Carrinho de controle remoto"
let precoCarrinho = 100
adicionaBrinquedosEPrecosNaLista(brinquedos, precos, carrinho, precoCarrinho)

let bola = "bola"
let precoBola = 15
adicionaBrinquedosEPrecosNaLista(brinquedos, precos, bola, precoBola)

let cubo = "Cubo mágico"
let precoCubo = 21

adicionaBrinquedosEPrecosNaLista(brinquedos, precos, cubo, precoCubo)
exibeBrinquedosEPrecos(brinquedosEPrecos)
exibeSomaPrecos(precos)