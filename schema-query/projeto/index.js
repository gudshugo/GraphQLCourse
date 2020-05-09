const { ApolloServer, gql } = require('apollo-server')

const usuarios = [
    {
        id : 1,
        nome: 'Hugo',
        email: 'email@email.com',
        idade: 24,
        perfil_id: 1
    },
    {
        id : 2,
        nome: 'Gilberto',
        email: 'email@email.com',
        idade: 21,
        perfil_id: 2
    },
    {
        id : 3,
        nome: 'Elizeu',
        email: 'email@email.com',
        idade: 25,
        perfil_id: 1
    }
]

const perfis = [
    {
        id: 1,
        nome: 'Comum'
    },
    {
        id: 2,
        nome: 'Administrador'
    }
]

const typeDefs = gql`
    scalar Date

    type Produto {
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto: Float
    }
    
    type Usuario {
        id: Int
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
        perfil: Perfil
    }

    type Perfil {
        id: Int
        nome: String!
    }

    # Pontos de entrada da API
    type Query {
        ola: String!
        horaCerta: Date!
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
        numerosMegaSena: [Int!]!
        usuarios: [Usuario]
        usuario(id: Int): Usuario
        perfis: [Perfil]
        perfil(id: Int): Perfil
    }
`

const resolvers = {

    Produto: {
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
    },

    Usuario: {
        salario (usuario){
            return usuario.salario_real
        },
        perfil(usuario){
            const selected = perfis
            .filter(p => p.id === usuario.perfil_id)
            return selected ? selected[0] : null
        }
    },

    Query: {
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
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})