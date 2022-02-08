const {ApolloServer} = require("apollo-server")
const typeDefs = require("./typeDefs")

const resolvers = require("./resolvers")
class App{
    constructor(){
        this.server = new ApolloServer({
            typeDefs,
            resolvers
        })
    }
}

module.exports = new App().server