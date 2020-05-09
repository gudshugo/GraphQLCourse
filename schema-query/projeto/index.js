const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    scalar Date

    type Usuario {
        id: ID
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }

    # Pontos de entrada da API
    type Query {
        ola: String!
        horaCerta: Date!
        usuarioLogado: Usuario
    }
`

const resolvers = {

    Usuario: {
        salario (usuario){
            return usuario.salario_real
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
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(4000).then(({ url }) => {
    console.log(`Executando em ${url}`)
})