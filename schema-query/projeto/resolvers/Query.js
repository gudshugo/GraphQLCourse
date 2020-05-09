const { usuarios, perfis } = require('../data/db')


module.exports = {

    ola(){
        return 'Bom dia!'
    },

    horaCerta (){
        return new Date
    },

    usuarioLogado(){
        return {
            id: 1,
            nome: 'Hugo',
            email: 'email@email.com',
            idade: 24,
            salario_real: 12.34,
            vip: true
        }
    },

    produtoEmDestaque(){
        return {
            nome: 'Café',
            preco: 4890.89,
            desconto: 50
        }
    },

    numerosMegaSena(){
        const crescente = (a,b) => a - b
        return Array(6)
                .fill(0)
                    .map(() => parseInt(Math.random() * 60 + 1))
                        .sort(crescente)
    },

    usuarios(){
        return usuarios
    },

    usuario(_, { id }){
        const selected = usuarios
            .filter(u => u.id === id)
        return selected ? selected[0] : null
    },

    perfis(){
        return perfis
    },

    perfil(_,{id}){
        const selected = perfis
            .filter(p => p.id === id)
        return selected ? selected[0] : null
    }


}