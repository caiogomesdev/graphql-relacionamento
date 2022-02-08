const {loadSchemaSync} = require("@graphql-tools/load")
const {GraphQLFileLoader} = require("@graphql-tools/graphql-file-loader")
const {join} = require("path")

const schema = loadSchemaSync(join(__dirname,'/schema/index.graphql'), {
    loaders: [new GraphQLFileLoader()]
  })

  module.exports = schema