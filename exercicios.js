// const alimentos = ["arroz", "feijão", "leite", "macarrão"];
// const precos = [2.50, 10.25, 3.30, 9.00];


    const alimentos = ["arroz", "feijão", "leite", "macarrão"];
    const precos = [2.50, 6.25, 1.30, 9.00];

    let alimentosEprecos = [alimentos, precos];
    console.table(alimentosEprecos);
    
    let soma = 0;
    
    for( let i = 0; i < precos.length; i++){
        soma = soma + precos[i]
        //soma += precos[i]

    }
    //total da soma dos preços
    console.log(`O valor total das compras é de R$${soma}`);

//-------------------------------------------------------------
let precoMacarrao = alimentosEprecos[1][3];
let desconto = (10/100);

let valorDesconto = precoMacarrao * desconto;
precoMacarrao = precoMacarrao - valorDesconto;
//precoMacarrao -= valorDesconto;


   function atualizarPrecoDoMacarraoEExibir(){
    //atualiza e mostra tabela com preço do macarrão atualizado
    precos.pop()
    precos.push(precoMacarrao)
    //console.log(precos) 
    }

  atualizarPrecoDoMacarraoEExibir()

  let somaArrayModificado = 0
  for( let i = 0; i < precos.length; i++){
    somaArrayModificado = somaArrayModificado + precos[i]
    }

   console.log(`O valor das compras com o desconto de 10% no macarrão é de R$ ${somaArrayModificado.toFixed(2)}`)

   //-----------------------------------------------------------------------------

   let menorValor = precos[0]
   let indiceMenorValor = 0;
   let maiorValor = precos[0]
   let indiceMaiorValor = 0;
   
   for(let i = 1; i < precos.length; i++){    
       if(precos[i] < menorValor) {
           menorValor = precos[i];
           indiceMenorValor = i;
       }
       if(precos[i] > maiorValor){
           maiorValor = precos[i]
           indiceMaiorValor = i;
       }
    
   }
    console.log(`O nome do produto mais barato é 
    ${alimentosEprecos[0][indiceMenorValor]} e seu valor é R$ ${menorValor.toFixed(2)}`)
    console.log(`O nome do produto mais caro é 
    ${alimentosEprecos[0][indiceMaiorValor]} e o seu valor é R$ ${maiorValor.toFixed(2)}`);

    //------------------------------------------------------------------------------------------

   let mediaDosPrecos = somaArrayModificado/ precos.length

   console.log(`A média dos preços é R$ ${mediaDosPrecos.toFixed(2)}`)

   
