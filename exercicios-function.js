const alimentos = ["arroz", "feijão", "leite", "macarrão"];
const precos = [2.50, 6.25, 1.30, 9.00];
let alimentosEprecos = [alimentos, precos];
let somaArrayModificado = 0

function exibeTabelaDeAlimentosEPrecos(alimentosEprecos) {
    for (let i = 0; i < alimentosEprecos[0].length; i++) {
        console.log(`${alimentosEprecos[0][i]} | ${alimentosEprecos[1][i]}`)
    }
}
exibeTabelaDeAlimentosEPrecos(alimentosEprecos);

function exibeSomaDosPrecos(precos) {
    let soma = 0;
    for (let i = 0; i < precos.length; i++) {
        soma = soma + precos[i];
    }
    console.log(`O valor total das compras é de R$${soma}`);
}
exibeSomaDosPrecos(precos)

function exibeDescontoMacarraoEAtualizaTotalDasCompras(arrayNomePreco) {
    let precoMacarrao = arrayNomePreco[1][3];
    let percentualDesconto = (10 / 100);

    let valorDesconto = precoMacarrao * percentualDesconto
    precoMacarrao = precoMacarrao - valorDesconto
    console.log(`O valor do macarrão com desconto é R$ ${precoMacarrao}`)

        precos.pop()
        precos.push(precoMacarrao)
        //console.log(precos) // atualiza e mostra tabela com preço do macarrão atualizado
        //pop usado para retirar o ultimo elemento do array, e push, usado para colocar a variavel precoMacarrao
        //na ultima posição do array.

    for (let i = 0; i < precos.length; i++) {
        somaArrayModificado = somaArrayModificado + precos[i]
    }
    
    console.log(`O valor das compras com o desconto de 10% no macarrão é de R$ ${somaArrayModificado.toFixed(2)}`)
       
    }
    exibeDescontoMacarraoEAtualizaTotalDasCompras(alimentosEprecos)

   function exibeMenorValorEMaiorValor(arrayPrecosAlimentos, arrayAlimentosEPrecos ){
    let menorValor = arrayPrecosAlimentos[0]
    let indiceMenorValor = 0;
    let maiorValor = arrayPrecosAlimentos[0]
    let indiceMaiorValor = 0;

    for(let i = 1; i < arrayPrecosAlimentos.length; i++){    
        if(arrayPrecosAlimentos[i] < menorValor) {
            menorValor = arrayPrecosAlimentos[i];
            indiceMenorValor = i;
        }
        if(arrayPrecosAlimentos[i] > maiorValor){
            maiorValor = arrayPrecosAlimentos[i]
            indiceMaiorValor = i;
        }}

        console.log(`O nome do produto mais barato é ${arrayAlimentosEPrecos[0][indiceMenorValor]} e seu valor é R$ ${menorValor.toFixed(2)}`)
        console.log(`O nome do produto mais caro é ${arrayAlimentosEPrecos[0][indiceMaiorValor]} e o seu valor é R$ ${maiorValor.toFixed(2)}`);
   }

exibeMenorValorEMaiorValor(precos, alimentosEprecos)

function exibeMediaDasNotas(somaArrayAlterado, arrayPrecosProdutos){
    let mediaDosPrecos = somaArrayAlterado/ arrayPrecosProdutos.length

    console.log(`A média dos preços é R$ ${mediaDosPrecos.toFixed(2)}`)
}

exibeMediaDasNotas(somaArrayModificado, precos)
