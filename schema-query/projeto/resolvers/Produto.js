module.exports = {

    precoComDesconto(produto){
        if(produto.desconto){
            let desconto = produto.desconto/100
            let retirar = produto.preco * desconto 
            produto.precoComDesconto = produto.preco - retirar 
            return produto.precoComDesconto
        } else {
            return produto.preco
        }
    }

}