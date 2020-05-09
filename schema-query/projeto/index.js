const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    # Pontos de entrada da API
    type Query {
        ola: String
        horaCerta: String
    }
`

const resolvers = {
    Query: {
        horaCerta (){
            let dataAtual = new Date()
            return dataAtual.toString()
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